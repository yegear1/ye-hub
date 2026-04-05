<script lang="ts">
    import { Settings, User, UserCircle, Lightbulb, Cpu } from 'lucide-svelte';
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

<!-- Hero Section -->
<div class="mb-12">
    <div class="flex flex-col md:flex-row md:items-end justify-between gap-6">
        <div>
            <div class="flex items-center gap-2 mb-3">
                <span class="px-2.5 py-1 rounded-full bg-neutral-200/50 dark:bg-neutral-900 text-neutral-600 dark:text-neutral-400 text-xs font-medium tracking-wide uppercase border border-neutral-200 dark:border-neutral-800 flex items-center gap-1.5 w-fit">
                    <User size={14} />
                    Profile
                </span>
            </div>
            <h1 class="text-3xl sm:text-4xl font-medium tracking-tight text-neutral-900 dark:text-white mb-3">
                About Me
            </h1>
            <p class="text-neutral-500 dark:text-neutral-400 max-w-2xl text-sm sm:text-base leading-relaxed">
                A quick glimpse into who I am, what I build, and why this corner of the internet exists.
            </p>
        </div>
    </div>
</div>

<!-- Content Grid -->
<div class="flex flex-col md:flex-row gap-8">
    
    <!-- Left Column: Avatar & Bio -->
    <div class="md:w-1/4 flex-shrink-0 flex flex-col">
        <div class="w-24 h-24 sm:w-32 sm:h-32 rounded-2xl bg-neutral-100 dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 flex items-center justify-center text-neutral-400 shadow-sm mb-6">
            <UserCircle size={48} strokeWidth={1.5} />
        </div>
        <h2 class="text-2xl font-medium tracking-tight text-neutral-900 dark:text-white mb-2">
            Hey, I'm Luis.
        </h2>
        <p class="text-sm text-neutral-500 dark:text-neutral-400 leading-relaxed">
            I'm a 22-year-old developer enthusiast from Brazil. I spend my time tinkering with code, exploring new technologies, and building things that I find cool or genuinely useful for my day-to-day.
        </p>
    </div>

    <!-- Right Column: Cards -->
    <div class="flex-1 flex flex-col gap-6">
        
        <!-- Card 1: Philosophy -->
        <div class="group relative flex flex-col bg-white dark:bg-neutral-900/50 border border-neutral-200 dark:border-neutral-800 rounded-lg p-6 sm:p-8 hover:shadow-sm hover:border-neutral-300 dark:hover:border-neutral-700 transition-all duration-200">
            <div class="flex items-center gap-3 mb-4">
                <div class="w-8 h-8 rounded-lg bg-neutral-50 dark:bg-neutral-900 flex items-center justify-center text-neutral-600 dark:text-neutral-300 border border-neutral-200 dark:border-neutral-800">
                    <Lightbulb size={18} strokeWidth={1.5} />
                </div>
                <h3 class="text-lg font-medium tracking-tight text-neutral-900 dark:text-white">
                    The Philosophy
                </h3>
            </div>
            <p class="text-sm text-neutral-500 dark:text-neutral-400 leading-relaxed">
                This hub exists for two main reasons: to document my learning process out loud, and to host the random, practical tools I build to make my own life easier. I'm not a corporate enterprise; I'm just a tech enthusiast sharing my journey and the messy, fun process of creating things.
            </p>
        </div>

        <!-- Card 2: Stack & Interests -->
        <div class="group relative flex flex-col bg-white dark:bg-neutral-900/50 border border-neutral-200 dark:border-neutral-800 rounded-lg p-6 sm:p-8 hover:shadow-sm hover:border-neutral-300 dark:hover:border-neutral-700 transition-all duration-200">
            <div class="flex items-center gap-3 mb-4">
                <div class="w-8 h-8 rounded-lg bg-neutral-50 dark:bg-neutral-900 flex items-center justify-center text-neutral-600 dark:text-neutral-300 border border-neutral-200 dark:border-neutral-800">
                    <Cpu size={18} strokeWidth={1.5} />
                </div>
                <h3 class="text-lg font-medium tracking-tight text-neutral-900 dark:text-white">
                    Current Stack & Interests
                </h3>
            </div>
            <p class="text-sm text-neutral-500 dark:text-neutral-400 leading-relaxed mb-6">
                I tinker mostly with Python and JavaScript. Beyond just writing code, I'm really into homelabbing, self-hosting my own services, and mixing technology with daily life (like experimenting with computer vision for fitness tracking).
            </p>
            
            <div class="flex flex-wrap gap-2">
                <span class="inline-flex items-center px-2.5 py-1 rounded text-xs font-medium bg-neutral-100 dark:bg-neutral-800 text-neutral-700 dark:text-neutral-300 border border-neutral-200 dark:border-neutral-700">Python</span>
                <span class="inline-flex items-center px-2.5 py-1 rounded text-xs font-medium bg-neutral-100 dark:bg-neutral-800 text-neutral-700 dark:text-neutral-300 border border-neutral-200 dark:border-neutral-700">JavaScript</span>
                <span class="inline-flex items-center px-2.5 py-1 rounded text-xs font-medium bg-neutral-100 dark:bg-neutral-800 text-neutral-700 dark:text-neutral-300 border border-neutral-200 dark:border-neutral-700">Homelabbing</span>
                <span class="inline-flex items-center px-2.5 py-1 rounded text-xs font-medium bg-neutral-100 dark:bg-neutral-800 text-neutral-700 dark:text-neutral-300 border border-neutral-200 dark:border-neutral-700">Self-Hosting</span>
                <span class="inline-flex items-center px-2.5 py-1 rounded text-xs font-medium bg-neutral-100 dark:bg-neutral-800 text-neutral-700 dark:text-neutral-300 border border-neutral-200 dark:border-neutral-700">Computer Vision</span>
            </div>
        </div>

        <!-- Card 3: Appearance Settings -->
        <div class="group relative flex flex-col sm:flex-row items-start sm:items-center justify-between bg-white dark:bg-neutral-900/50 border border-neutral-200 dark:border-neutral-800 rounded-lg p-6 sm:p-8 hover:shadow-sm hover:border-neutral-300 dark:hover:border-neutral-700 transition-all duration-200">
            <div class="mb-4 sm:mb-0 space-y-1">
                <h3 class="text-lg font-medium tracking-tight text-neutral-900 dark:text-white">
                    Appearance Settings
                </h3>
                <p class="text-sm text-neutral-500 dark:text-neutral-400">
                    Personalize your experience by switching color palettes and modes.
                </p>
            </div>
            
            <button 
                onclick={openModal} 
                class="flex items-center gap-2 px-5 py-2.5 rounded-lg font-medium text-sm transition-all cursor-pointer shadow-sm bg-neutral-900 text-white hover:bg-neutral-800 dark:bg-white dark:text-neutral-900 dark:hover:bg-neutral-200"
            >
                <Settings size={18} />
                <span>Configure Theme</span>
            </button>
        </div>

    </div>
</div>

<ThemeModal open={isModalOpen} onClose={closeModal} />
