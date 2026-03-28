<script lang="ts">
    import { Settings, Code, Zap, BookOpen } from 'lucide-svelte';
    import ThemeModal from '$lib/components/ThemeModal.svelte';
    import { themeState } from '$lib/stores/theme.svelte';

    let isModalOpen = $state(false);

    function openModal() {
        isModalOpen = true;
    }
    
    function closeModal() {
        isModalOpen = false;
    }
</script>

<svelte:head>
    <title>About Me | ye-hub</title>
</svelte:head>

<div class="max-w-4xl mx-auto space-y-12">
    <!-- Header Section -->
    <div class="space-y-4">
        <h1 class={`text-4xl sm:text-5xl font-bold tracking-tight ${themeState.colorTheme === 'default' ? 'text-neutral-900 dark:text-white' : 'text-foreground'}`}>
            About Me
        </h1>
        <p class={`text-lg max-w-2xl leading-relaxed ${themeState.colorTheme === 'default' ? 'text-neutral-500 dark:text-neutral-400' : 'text-muted-foreground'}`}>
            Welcome to <strong class={themeState.colorTheme === 'default' ? 'text-neutral-700 dark:text-neutral-200' : 'text-foreground'}>ye-hub</strong>, 
            a centralized developer dashboard designed to monitor and manage my personal projects, services, and applications in a clean, unified interface.
        </p>
    </div>

    <!-- Objectives Section -->
    <div class={`grid sm:grid-cols-3 gap-6 pt-6 border-t ${themeState.colorTheme === 'default' ? 'border-neutral-200 dark:border-neutral-800' : 'border-border'}`}>
        <div class={`p-6 rounded-2xl border ${themeState.colorTheme === 'default' ? 'bg-white dark:bg-neutral-900 border-neutral-200 dark:border-neutral-800' : 'bg-card text-card-foreground border-border'}`}>
            <Code class={`w-8 h-8 mb-4 ${themeState.colorTheme === 'default' ? 'text-neutral-900 dark:text-white' : 'text-primary'}`} />
            <h3 class={`text-lg font-semibold mb-2 ${themeState.colorTheme === 'default' ? 'text-neutral-900 dark:text-white' : 'text-card-foreground'}`}>Centralized View</h3>
            <p class={`text-sm leading-relaxed ${themeState.colorTheme === 'default' ? 'text-neutral-500 dark:text-neutral-400' : 'text-muted-foreground'}`}>
                Keep track of all deployments, status checks, and metadata in one single place without navigating through multiple host dashboards.
            </p>
        </div>

        <div class={`p-6 rounded-2xl border ${themeState.colorTheme === 'default' ? 'bg-white dark:bg-neutral-900 border-neutral-200 dark:border-neutral-800' : 'bg-card text-card-foreground border-border'}`}>
            <Zap class={`w-8 h-8 mb-4 ${themeState.colorTheme === 'default' ? 'text-neutral-900 dark:text-white' : 'text-primary'}`} />
            <h3 class={`text-lg font-semibold mb-2 ${themeState.colorTheme === 'default' ? 'text-neutral-900 dark:text-white' : 'text-card-foreground'}`}>Efficiency</h3>
            <p class={`text-sm leading-relaxed ${themeState.colorTheme === 'default' ? 'text-neutral-500 dark:text-neutral-400' : 'text-muted-foreground'}`}>
                Built with modern web standards to be blazing fast and accessible, allowing quick updates and immediate feedback.
            </p>
        </div>

        <div class={`p-6 rounded-2xl border ${themeState.colorTheme === 'default' ? 'bg-white dark:bg-neutral-900 border-neutral-200 dark:border-neutral-800' : 'bg-card text-card-foreground border-border'}`}>
            <BookOpen class={`w-8 h-8 mb-4 ${themeState.colorTheme === 'default' ? 'text-neutral-900 dark:text-white' : 'text-primary'}`} />
            <h3 class={`text-lg font-semibold mb-2 ${themeState.colorTheme === 'default' ? 'text-neutral-900 dark:text-white' : 'text-card-foreground'}`}>Transparency</h3>
            <p class={`text-sm leading-relaxed ${themeState.colorTheme === 'default' ? 'text-neutral-500 dark:text-neutral-400' : 'text-muted-foreground'}`}>
                Showcasing project states openly, including degraded or offline services, to maintain a realistic portfolio footprint.
            </p>
        </div>
    </div>

    <!-- Configuration Trigger -->
    <div class={`flex flex-col sm:flex-row items-center justify-between p-6 rounded-2xl border sm:p-8 ${themeState.colorTheme === 'default' ? 'bg-neutral-50 dark:bg-neutral-900 border-neutral-200 dark:border-neutral-800' : 'bg-muted border-border'}`}>
        <div class="mb-4 sm:mb-0 space-y-1">
            <h3 class={`text-xl font-semibold ${themeState.colorTheme === 'default' ? 'text-neutral-900 dark:text-white' : 'text-foreground'}`}>
                Appearance Settings
            </h3>
            <p class={`text-sm ${themeState.colorTheme === 'default' ? 'text-neutral-500 dark:text-neutral-400' : 'text-muted-foreground'}`}>
                Personalize your experience by switching color palettes and modes.
            </p>
        </div>
        
        <button 
            onclick={openModal} 
            class={`flex items-center gap-2 px-5 py-2.5 rounded-lg font-medium text-sm transition-all cursor-pointer shadow-sm ${
                themeState.colorTheme === 'default' 
                ? 'bg-neutral-900 text-white hover:bg-neutral-800 dark:bg-white dark:text-neutral-900 dark:hover:bg-neutral-200' 
                : 'bg-primary text-primary-foreground hover:bg-primary/90'
            }`}
        >
            <Settings size={18} />
            <span>Configure Theme</span>
        </button>
    </div>
</div>

<ThemeModal open={isModalOpen} onClose={closeModal} />
