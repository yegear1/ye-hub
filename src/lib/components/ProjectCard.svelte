<script lang="ts">
    import { Folder, ExternalLink } from 'lucide-svelte';
    
    // Expected interface aligned with our +page.server.ts mapped data response
    interface Project {
        id: string;
        status: 'online' | 'deprecated' | 'offline';
        name: string;
        description: string;
        category: string;
        tags: string[];
        uptime: string;
        link: string;
    }
    
    // Recebendo props no Svelte 5
    let { project }: { project: Project } = $props();

    // Map health statuses to visual UI tailwind CSS tokens
    // Provides consistent visual feedback indicating service availability 
    const statusConfig: Record<string, { color: string, text: string, bg: string }> = {
        online: { color: "bg-green-500", text: "Online", bg: "bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-400 border-green-200 dark:border-green-900/50" },
        deprecated: { color: "bg-orange-500", text: "Deprecated", bg: "bg-orange-100 dark:bg-orange-900/30 text-orange-700 dark:text-orange-400 border-orange-200 dark:border-orange-900/50" },
        offline: { color: "bg-red-500", text: "Offline", bg: "bg-red-100 dark:bg-red-900/30 text-red-700 dark:text-red-400 border-red-200 dark:border-red-900/50" }
    };

    // Reactively extract the visual configuration specific to this card's status 
    let config = $derived(statusConfig[project.status]);
</script>

<div class="group relative flex flex-col bg-white dark:bg-neutral-900/50 border border-neutral-200 dark:border-neutral-800 rounded-lg p-5 hover:shadow-sm hover:border-neutral-300 dark:hover:border-neutral-700 transition-all duration-200">
    <div class="flex justify-between items-start mb-3">
        <div class="flex items-center gap-2">
            <Folder size={18} class="text-neutral-400" />
            <span class="text-xs font-medium text-neutral-500 uppercase tracking-wide">{project.category}</span>
        </div>
        <div class="flex items-center gap-1.5 px-2 py-0.5 rounded-full border {config.bg} text-[10px] font-semibold">
            <span class="relative flex h-1.5 w-1.5">
                {#if project.status === 'online'}
                    <span class="animate-pulse absolute inline-flex h-full w-full rounded-full bg-current opacity-75"></span>
                {/if}
                <span class="relative inline-flex rounded-full h-1.5 w-1.5 {config.color}"></span>
            </span>
            {config.text}
        </div>
    </div>

    <h3 class="text-base font-semibold text-neutral-900 dark:text-neutral-100 mb-1 group-hover:text-amber-700 dark:group-hover:text-amber-500 transition-colors">
        {project.name}
    </h3>
    <p class="text-xs sm:text-sm text-neutral-500 dark:text-neutral-400 mb-4 flex-grow">
        {project.description}
    </p>

    <div class="mt-auto">
        <div class="flex flex-wrap gap-2 mb-4">
            {#each project.tags as tag}
                <span class="px-2 py-0.5 rounded text-[10px] font-medium bg-neutral-100 dark:bg-neutral-800 text-neutral-600 dark:text-neutral-400 border border-neutral-200 dark:border-neutral-700">
                    {tag}
                </span>
            {/each}
        </div>
        <div class="pt-4 border-t border-neutral-100 dark:border-neutral-800 flex justify-between items-center text-[10px] text-neutral-400">
            <span>Uptime: {project.uptime}</span>
            <a href={project.link} class="flex items-center gap-1 hover:text-neutral-900 dark:hover:text-neutral-100 transition-colors">
                Visit Service <ExternalLink size={12} />
            </a>
        </div>
    </div>
</div>
