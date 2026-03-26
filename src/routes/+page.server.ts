import { Client, LogLevel, isFullPageOrDataSource } from '@notionhq/client';
import { NOTION_TOKEN, NOTION_DATABASE_ID } from '$env/static/private';

// Inicializa o cliente do Notion com o seu token seguro
const notion = new Client({ auth: NOTION_TOKEN, logLevel: LogLevel.DEBUG });

const dataSourceId = NOTION_DATABASE_ID as string;

if (!dataSourceId) {
  throw new Error("NOTION_DATABASE_ID não está definido no arquivo .env");
}

export async function load() {
    try {
        const response = await notion.dataSources.query({
            data_source_id: dataSourceId,
        });

        // Mapeando a bagunça do Notion para o nosso formato limpo
        // Usamos ?. (optional chaining) para não quebrar se um campo estiver vazio
        const projects = response.results
        // Filtra apenas resultados que são páginas completas (garante que 'properties' existe)
        //.filter(isFullPageOrDataSource)
        .map((page: any) => {
            // Como filtramos acima, o TS sabe que 'properties' existe, mas a tipagem 
            // dinâmica do Notion ainda exige um fallback para (page as any) nas chaves exatas
            const props = (page as any).properties;
            
            return {
                id: page.id, // O ID único do Notion
                name: props.Title?.title?.[0]?.plain_text || 'Sem Nome',
                description: props.Description?.rich_text?.[0]?.plain_text || '',
                category: props.Category?.select?.name || 'Geral',
                status: props.Status?.select?.name || 'offline',
                link: props.Link?.url || '#',
                tags: props.Tags?.multi_select?.map((t: any) => t.name) || []
            };
        });

        console.log(`debug var: ${projects}`)
        return { projects };
        
    } catch (error) {
        console.error("Erro ao buscar do Notion:", error);
        // Se der erro, retorna array vazio para não quebrar o site
        return { projects: [] }; 
    }
}