<script lang="ts">
    import { onMount } from 'svelte';
    import ProjectCard from '$lib/components/layouts/ProjectCard.svelte';
    import { projects } from '$lib/data/projects'

    

    let loading = $state(true);

    onMount(() => {
        setTimeout(() => {
            loading = false;
        }, 600);
    });
</script>

<div class="mb-12">
    <div class="flex flex-col md:flex-row md:items-end justify-between gap-6">
        <div>
            <div class="flex items-center gap-2 mb-2">
                <span class="px-2 py-0.5 rounded-full bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-400 text-[10px] font-medium tracking-wide uppercase border border-green-200 dark:border-green-900/50 flex items-center gap-1.5 w-fit">
                    <span class="relative flex h-1.5 w-1.5">
                        <span class="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                        <span class="relative inline-flex rounded-full h-1.5 w-1.5 bg-green-500"></span>
                    </span>
                    All Systems Operational
                </span>
            </div>
            <h1 class="text-3xl sm:text-4xl font-semibold tracking-tight text-neutral-900 dark:text-white mb-2">
                Developer Services
            </h1>
            <p class="text-neutral-500 dark:text-neutral-400 max-w-2xl text-sm sm:text-base leading-relaxed">
                Centralized dashboard monitoring personal projects. Real-time status checks.
            </p>
        </div>
    </div>
</div>

<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
    {#if loading}
        <div class="col-span-full h-48 flex items-center justify-center text-neutral-400 text-sm animate-pulse">
            Loading services...
        </div>
    {:else}
        {#each projects as project (project.id)}
            <ProjectCard {project} />
        {/each}
    {/if}
</div>