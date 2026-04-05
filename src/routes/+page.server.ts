import { env } from '$env/dynamic/private';

/**
 * Define order hierarchy for service health status.
 * Used to ensure running (online) services appear first in the UI.
 */
const statusOrder: Record<string, number> = {
    online: 0,
    deprecated: 1,
    offline: 2
};

export const load = async () => {
    const NOTION_API_KEY = env.NOTION_API_KEY;
    const NOTION_DATABASE_ID = env.NOTION_DATABASE_ID;

    if (!NOTION_API_KEY || !NOTION_DATABASE_ID) {
        console.warn('⚠️  NOTION_API_KEY or NOTION_DATABASE_ID is missing. Add them to .env');
        return { projects: [] };
    }

    try {
        // We use native fetch to interact purely with the stable v1/databases endpoint.
        // Bypassing @notionhq/client library to avoid compatibility issues with v5.x
        // and its broken dataSources query method.
        const response = await fetch(`https://api.notion.com/v1/databases/${NOTION_DATABASE_ID}/query`, {
            method: 'POST',
            headers: {
                'Authorization': `Bearer ${NOTION_API_KEY}`,
                'Notion-Version': '2022-06-28',
                'Content-Type': 'application/json'
            }
        });

        if (!response.ok) {
            const errorText = await response.text();
            throw new Error(`Notion API error (${response.status}): ${errorText}`);
        }

        const data = await response.json();
        
        // Define which statuses are allowed. Anything else degrades gracefully to 'offline'.
        const validStatuses = ['online', 'deprecated', 'offline'];

        // Map the verbose Notion API page object structure into our cleaner Project interface
        const projects = data.results
            .map((page: any) => {
                // Ensure status is valid and defaults to offline if parsing fails.
                const rawStatus = page.properties.Status?.select?.name?.toLowerCase() || 'offline';
                const status = validStatuses.includes(rawStatus) ? rawStatus : 'offline';

                return {
                    id: page.id,
                    name: page.properties.Title?.title?.[0]?.plain_text || 'Untitled',
                    description: page.properties.Description?.rich_text?.[0]?.plain_text || '',
                    category: page.properties.Category?.select?.name || 'Uncategorized',
                    tags: page.properties.Tags?.multi_select?.map((t: any) => t.name) || [],
                    status,
                    uptime: 'N/A', // Keeping N/A as uptime is currently unavailable in simple database tracking
                    link: page.properties.Link?.url || '#'
                };
            })
            // Sort by health status based on statusOrder hierarchy mapped above
            .sort((a: any, b: any) => (statusOrder[a.status] ?? 99) - (statusOrder[b.status] ?? 99));

        return { projects };
    } catch (error) {
        console.error('❌ Error fetching from Notion:', error);
        return { projects: [] };
    }
};
