<script lang="ts">
    import '../app.css';
    import { Github, Coffee, Globe, Sun, Moon, Twitter, Linkedin, Mail, AlertCircle, Info } from 'lucide-svelte';
    import { themeState } from '$lib/stores/theme.svelte';
    
    let { children } = $props();

    // Mock do Toast de Idioma
    let showToast = $state(false);
    function toggleLanguage() {
        showToast = true;
        setTimeout(() => showToast = false, 3000);
    }

    $effect(() => {
        const baseClasses = 'font-sans antialiased transition-colors duration-300 min-h-screen flex flex-col';
        document.body.className = themeState.colorTheme === 'default' 
            ? `bg-neutral-50 text-neutral-900 dark:bg-neutral-950 dark:text-neutral-100 ${baseClasses}` 
            : `bg-background text-foreground ${baseClasses}`;
    });
</script>

<header class={`sticky top-0 z-50 w-full backdrop-blur-md border-b flex ${themeState.colorTheme === 'default' ? 'border-neutral-200 dark:border-neutral-800 bg-neutral-50/80 dark:bg-neutral-950/80' : 'border-border bg-background/80'}`}>
    <div class="max-w-7xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between w-full">
        <a href="/" class="flex items-center gap-2 select-none cursor-pointer">
            <div class={`w-8 h-8 flex items-center justify-center rounded-lg ${themeState.colorTheme === 'default' ? 'bg-neutral-900 dark:bg-neutral-50 text-white dark:text-black' : 'bg-primary text-primary-foreground'}`}>
                <span class="font-bold text-lg tracking-tighter">Y</span>
            </div>
            <span class={`text-sm font-semibold tracking-tight uppercase ${themeState.colorTheme === 'default' ? 'text-neutral-800 dark:text-neutral-200' : 'text-foreground'}`}>ye-hub</span>
        </a>

        <div class="flex items-center gap-2 sm:gap-4">
            <a href="/about" class={`hidden sm:flex items-center gap-2 text-xs font-medium transition-colors ${themeState.colorTheme === 'default' ? 'text-neutral-500 hover:text-neutral-900 dark:text-neutral-400 dark:hover:text-neutral-100' : 'text-muted-foreground hover:text-foreground'}`}>
                <Info size={16} strokeWidth={1.5} /> <span>About</span>
            </a>
            <a href="#" class={`hidden sm:flex items-center gap-2 text-xs font-medium transition-colors ${themeState.colorTheme === 'default' ? 'text-neutral-500 hover:text-neutral-900 dark:text-neutral-400 dark:hover:text-neutral-100' : 'text-muted-foreground hover:text-foreground'}`}>
                <Github size={16} strokeWidth={1.5} /> <span>Source</span>
            </a>
            <a href="#" class={`hidden sm:flex items-center gap-2 text-xs font-medium transition-colors mr-2 ${themeState.colorTheme === 'default' ? 'text-neutral-500 hover:text-neutral-900 dark:text-neutral-400 dark:hover:text-neutral-100' : 'text-muted-foreground hover:text-foreground'}`}>
                <Coffee size={16} strokeWidth={1.5} /> <span>Support</span>
            </a>

            <div class={`h-4 w-px hidden sm:block ${themeState.colorTheme === 'default' ? 'bg-neutral-200 dark:bg-neutral-800' : 'bg-border'}`}></div>

            <button onclick={toggleLanguage} class={`group flex items-center gap-1.5 px-3 py-1.5 rounded-md border text-xs font-medium transition-all cursor-pointer ${themeState.colorTheme === 'default' ? 'border-neutral-200 dark:border-neutral-800 hover:border-neutral-300 dark:hover:border-neutral-700 bg-white dark:bg-neutral-900 text-neutral-500' : 'border-border hover:border-accent bg-card text-card-foreground'}`}>
                <Globe size={14} class="opacity-70" /> <span>EN</span>
            </button>

            <button onclick={themeState.toggleDark} class={`p-2 rounded-md transition-colors cursor-pointer ${themeState.colorTheme === 'default' ? 'hover:bg-neutral-200 dark:hover:bg-neutral-800 text-neutral-500 dark:text-neutral-400' : 'hover:bg-accent text-muted-foreground hover:text-accent-foreground'}`}>
                {#if themeState.isDark}
                    <Moon size={18} strokeWidth={1.5} />
                {:else}
                    <Sun size={18} strokeWidth={1.5} />
                {/if}
            </button>
        </div>
    </div>
</header>

<main class="flex-grow w-full max-w-7xl mx-auto px-4 sm:px-6 py-12">
    {@render children()}
</main>

<footer class={`border-t py-8 mt-auto ${themeState.colorTheme === 'default' ? 'border-neutral-200 dark:border-neutral-800 bg-white dark:bg-neutral-950 text-neutral-500 dark:text-neutral-400' : 'border-border bg-card text-muted-foreground'}`}>
    <div class="max-w-7xl mx-auto px-4 sm:px-6 flex flex-col md:flex-row justify-between items-center gap-4">
        <p class="text-xs">
            © 2026 ye-hub. Built by <span class={`font-medium ${themeState.colorTheme === 'default' ? 'text-neutral-900 dark:text-neutral-200' : 'text-foreground'}`}>Yegear</span>.
        </p>
        <div class="flex items-center gap-6">
            <a href="#" class={`transition-colors ${themeState.colorTheme === 'default' ? 'text-neutral-400 hover:text-neutral-900 dark:hover:text-white' : 'hover:text-foreground'}`}><Twitter size={16} strokeWidth={1.5} /></a>
            <a href="#" class={`transition-colors ${themeState.colorTheme === 'default' ? 'text-neutral-400 hover:text-neutral-900 dark:hover:text-white' : 'hover:text-foreground'}`}><Linkedin size={16} strokeWidth={1.5} /></a>
            <a href="#" class={`transition-colors ${themeState.colorTheme === 'default' ? 'text-neutral-400 hover:text-neutral-900 dark:hover:text-white' : 'hover:text-foreground'}`}><Mail size={16} strokeWidth={1.5} /></a>
        </div>
    </div>
</footer>

<div class={`fixed bottom-6 right-6 transition-all duration-300 z-50 ${showToast ? 'translate-y-0 opacity-100' : 'translate-y-24 opacity-0 pointer-events-none'}`}>
    <div class={`border shadow-lg rounded-lg px-4 py-3 flex items-center gap-3 ${themeState.colorTheme === 'default' ? 'bg-white dark:bg-neutral-900 border-neutral-200 dark:border-neutral-800' : 'bg-popover border-border'}`}>
        <AlertCircle size={20} class="text-orange-500" />
        <div>
            <h4 class={`text-sm font-medium ${themeState.colorTheme === 'default' ? 'text-neutral-900 dark:text-neutral-100' : 'text-popover-foreground'}`}>Translation unavailable</h4>
            <p class={`text-xs ${themeState.colorTheme === 'default' ? 'text-neutral-500 dark:text-neutral-400' : 'text-muted-foreground'}`}>PT-BR is coming in v1.1.</p>
        </div>
    </div>
</div>