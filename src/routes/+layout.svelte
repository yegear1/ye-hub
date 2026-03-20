<script lang="ts">
    import '../app.css';
    import { onMount } from 'svelte';
    import { Github, Coffee, Globe, Sun, Moon, Twitter, Linkedin, Mail, AlertCircle } from 'lucide-svelte';
    
    let { children } = $props();

    // Lógica do Tema (Dark/Light Mode)
    let isDark = $state(false);

    onMount(() => {
        if (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
            isDark = true;
            document.documentElement.classList.add('dark');
        }
    });

    function toggleTheme() {
        isDark = !isDark;
        if (isDark) {
            document.documentElement.classList.add('dark');
            localStorage.theme = 'dark';
        } else {
            document.documentElement.classList.remove('dark');
            localStorage.theme = 'light';
        }
    }

    // Mock do Toast de Idioma
    let showToast = $state(false);
    function toggleLanguage() {
        showToast = true;
        setTimeout(() => showToast = false, 3000);s
    }
</script>

<header class="sticky top-0 z-50 w-full border-b border-neutral-200 dark:border-neutral-800 bg-neutral-50/80 dark:bg-neutral-950/80 backdrop-blur-md">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between">
        <div class="flex items-center gap-2 select-none cursor-pointer">
            <div class="w-8 h-8 bg-neutral-900 dark:bg-neutral-50 text-white dark:text-black rounded-lg flex items-center justify-center">
                <span class="font-bold text-lg tracking-tighter">Y</span>
            </div>
            <span class="text-sm font-semibold tracking-tight uppercase text-neutral-800 dark:text-neutral-200">ye-hub</span>
        </div>

        <div class="flex items-center gap-2 sm:gap-4">
            <a href="#" class="hidden sm:flex items-center gap-2 text-xs font-medium text-neutral-500 hover:text-neutral-90s0 dark:text-neutral-400 dark:hover:text-neutral-100 transition-colors">
                <Github size={16} strokeWidth={1.5} /> <span>Source</span>
            </a>
            <a href="#" class="hidden sm:flex items-center gap-2 text-xs font-medium text-neutral-500 hover:text-neutral-900 dark:text-neutral-400 dark:hover:text-neutral-100 transition-colors mr-2">
                <Coffee size={16} strokeWidth={1.5} /> <span>Support</span>
            </a>

            <div class="h-4 w-px bg-neutral-200 dark:bg-neutral-800 hidden sm:block"></div>

            <button onclick={toggleLanguage} class="group flex items-center gap-1.5 px-3 py-1.5 rounded-md border border-neutral-200 dark:border-neutral-800 hover:border-neutral-300 dark:hover:border-neutral-700 bg-white dark:bg-neutral-900 text-xs font-medium transition-all cursor-pointer">
                <Globe size={14} class="text-neutral-500" /> <span>EN</span>
            </button>

            <button onclick={toggleTheme} class="p-2 rounded-md hover:bg-neutral-200 dark:hover:bg-neutral-800 text-neutral-500 dark:text-neutral-400 transition-colors cursor-pointer">
                {#if isDark}
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

<footer class="border-t border-neutral-200 dark:border-neutral-800 bg-white dark:bg-neutral-950 py-8 mt-auto">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 flex flex-col md:flex-row justify-between items-center gap-4">
        <p class="text-xs text-neutral-500 dark:text-neutral-400">
            © 2026 ye-hub. Built by <span class="text-neutral-900 dark:text-neutral-200 font-medium">Yegear</span>.
        </p>
        <div class="flex items-center gap-6">
            <a href="#" class="text-neutral-400 hover:text-neutral-900 dark:hover:text-white transition-colors"><Twitter size={16} strokeWidth={1.5} /></a>
            <a href="#" class="text-neutral-400 hover:text-neutral-900 dark:hover:text-white transition-colors"><Linkedin size={16} strokeWidth={1.5} /></a>
            <a href="#" class="text-neutral-400 hover:text-neutral-900 dark:hover:text-white transition-colors"><Mail size={16} strokeWidth={1.5} /></a>
        </div>
    </div>
</footer>

<div class="fixed bottom-6 right-6 transition-all duration-300 z-50 {showToast ? 'translate-y-0 opacity-100' : 'translate-y-24 opacity-0 pointer-events-none'}">
    <div class="bg-white dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 shadow-lg rounded-lg px-4 py-3 flex items-center gap-3">
        <AlertCircle size={20} class="text-orange-500" />
        <div>
            <h4 class="text-sm font-medium text-neutral-900 dark:text-neutral-100">Translation unavailable</h4>
            <p class="text-xs text-neutral-500 dark:text-neutral-400">PT-BR is coming in v1.1.</p>
        </div>
    </div>
</div>