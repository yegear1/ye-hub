<script lang="ts">
    import { Search } from 'lucide-svelte';
    import { onMount } from 'svelte';
    import ProjectCard from '$lib/components/layouts/ye-default.svelte';
    import SkeletonCard from '$lib/components/SkeletonCard.svelte';

    let { data } = $props();
    let projects = $derived(data.projects);

    let activeFilter = $state('All')
    let searchQuery = $state('')

    const categories = $derived(['All', ...new Set(projects.map(p => p.category))]);

    let filteredProjects = $derived(
        projects.filter(p => {
            const matchesCategory = activeFilter === 'All' || p.category === activeFilter;
            
            const searchLower = searchQuery.toLowerCase();
            const matchesSearch = 
                p.name.toLowerCase().includes(searchLower) || 
                p.tags.some(tag => tag.toLowerCase().includes(searchLower)) ||
                p.description.toLowerCase().includes(searchLower);

            return matchesCategory && matchesSearch;
        })
    );

    let loading = $state(true);

    onMount(() => {
        setTimeout(() => {
            loading = false;
        }, 800);
    });

    const skeletonCount = 6;
</script>

{#if loading}
    <!-- ===== SKELETON STATE ===== -->
    <div class="mb-12">
        <div class="flex flex-col md:flex-row md:items-end justify-between gap-6">
            <div class="w-full">
                <div class="mb-2">
                    <div class="skeleton h-5 w-44 rounded-full"></div>
                </div>
                <div class="skeleton h-9 w-72 mb-2 rounded-lg"></div>
                <div class="space-y-2 max-w-2xl">
                    <div class="skeleton h-4 w-96 rounded"></div>
                </div>
            </div>
        </div>
        <div class="flex flex-col sm:flex-row items-start sm:items-center gap-4 mt-6">
            <div class="skeleton h-10 w-full sm:w-72 rounded-lg"></div>
        </div>
    </div>

    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {#each { length: skeletonCount } as _, i}
            <div class="fade-in-up" style="--delay: {i * 100}ms">
                <SkeletonCard />
            </div>
        {/each}
    </div>

{:else}
    <!-- ===== LOADED STATE ===== -->
    <div class="mb-12">
        <div class="flex flex-col md:flex-row md:items-end justify-between gap-6">
            <div>
                <div class="flex items-center gap-2 mb-2">
                    <span class="px-2 py-0.5 rounded-full bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-400 text-[10px] font-medium tracking-wide uppercase border border-green-200 dark:border-green-900/50 flex items-center gap-1.5 w-fit">
                        <span class="relative flex h-1.5 w-1.5 no-theme-transition">
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
        <div class="flex flex-col sm:flex-row items-start sm:items-center gap-4 mt-6">
            <div class="relative w-full sm:w-72">
                <Search size={16} class="absolute left-3 top-1/2 -translate-y-1/2 text-neutral-400" />
                <input 
                    type="text" 
                    bind:value={searchQuery}
                    placeholder="Search by name or tech stack..." 
                    class="w-full bg-white dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 rounded-lg pl-9 pr-4 py-2 text-sm text-neutral-900 dark:text-neutral-100 placeholder:text-neutral-500 focus:outline-none focus:ring-2 focus:ring-neutral-200 dark:focus:ring-neutral-800 shadow-sm"
                >
            </div>

            <div class="flex gap-2 overflow-x-auto pb-1 no-scrollbar w-full sm:w-auto">
            </div>
        </div>
    </div>

    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {#each filteredProjects as project, i (project.id)}
            <div class="fade-in-up" style="--delay: {i * 80}ms">
                <ProjectCard {project} />
            </div>
        {/each}
    </div>
{/if}

<style>
    @keyframes fadeInUp {
        from {
            opacity: 0;
            transform: translateY(12px);
        }
        to {
            opacity: 1;
            transform: translateY(0);
        }
    }

    .fade-in-up {
        animation: fadeInUp 0.4s ease-out forwards;
        animation-delay: var(--delay, 0ms);
        opacity: 0;
        /* Override the global theme transition for opacity on animated elements */
        transition-property: color, background-color, border-color, box-shadow, outline-color, fill, stroke !important;
    }
</style>