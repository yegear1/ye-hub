<script lang="ts">
    import { X, Moon, Sun, Palette } from 'lucide-svelte';
    import { themeState } from '$lib/stores/theme.svelte';

    let { open = false, onClose } = $props();

    function handleBackdropClick(e: MouseEvent) {
        if (e.target === e.currentTarget) {
            onClose();
        }
    }
</script>

<svelte:window onkeydown={(e) => open && e.key === 'Escape' && onClose()} />

{#if open}
    <div class="fixed inset-0 z-[100] flex items-center justify-center bg-black/50 backdrop-blur-sm transition-all" onclick={handleBackdropClick} role="presentation">
        <div class={`w-full max-w-md p-6 rounded-2xl shadow-xl transform transition-all ${themeState.colorTheme === 'default' ? 'bg-white dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800' : 'bg-card border border-border'}`}>
            <div class="flex items-center justify-between mb-6">
                <div class="flex items-center gap-2">
                    <Palette size={20} class={themeState.colorTheme === 'default' ? 'text-neutral-900 dark:text-neutral-100' : 'text-card-foreground'} />
                    <h2 class={`text-xl font-semibold tracking-tight ${themeState.colorTheme === 'default' ? 'text-neutral-900 dark:text-white' : 'text-card-foreground'}`}>Theme Settings</h2>
                </div>
                <button onclick={onClose} class={`p-1.5 rounded-full transition-colors cursor-pointer ${themeState.colorTheme === 'default' ? 'hover:bg-neutral-100 dark:hover:bg-neutral-800 text-neutral-500' : 'hover:bg-accent text-muted-foreground'}`}>
                    <X size={20} />
                </button>
            </div>

            <div class="space-y-6">
                <!-- Color Theme Toggle -->
                <div class="space-y-3">
                    <label class={`text-sm font-medium ${themeState.colorTheme === 'default' ? 'text-neutral-700 dark:text-neutral-300' : 'text-card-foreground'}`}>Color Palette</label>
                    <div class="grid grid-cols-2 gap-3">
                        <button 
                            onclick={() => themeState.setColorTheme('default')}
                            class={`flex flex-col items-center justify-center py-4 px-3 rounded-xl border-2 transition-all cursor-pointer ${
                                themeState.colorTheme === 'default' 
                                ? (themeState.colorTheme === 'default' ? 'border-neutral-900 dark:border-white bg-neutral-50 dark:bg-neutral-800' : 'border-primary bg-accent')
                                : (themeState.colorTheme === 'default' ? 'border-neutral-200 dark:border-neutral-700 hover:border-neutral-300' : 'border-border hover:border-accent')
                            }`}>
                            <span class={`text-sm font-semibold mb-1 ${themeState.colorTheme === 'default' ? 'text-neutral-900 dark:text-white' : 'text-card-foreground'}`}>Classic</span>
                            <span class={`text-xs ${themeState.colorTheme === 'default' ? 'text-neutral-500 dark:text-neutral-400' : 'text-muted-foreground'}`}>Neutral / Slate</span>
                        </button>
                        
                        <button 
                            onclick={() => themeState.setColorTheme('custom')}
                            class={`flex flex-col items-center justify-center py-4 px-3 rounded-xl border-2 transition-all cursor-pointer ${
                                themeState.colorTheme === 'custom' 
                                ? 'border-primary bg-accent/30'
                                : (themeState.colorTheme === 'default' ? 'border-neutral-200 dark:border-neutral-700 hover:border-neutral-300' : 'border-border hover:border-accent')
                            }`}>
                            <span class={`text-sm font-semibold mb-1 ${themeState.colorTheme === 'default' ? 'text-neutral-900 dark:text-white' : 'text-card-foreground'}`}>Red Dark</span>
                            <span class={`text-xs ${themeState.colorTheme === 'default' ? 'text-neutral-500 dark:text-neutral-400' : 'text-muted-foreground'}`}>Custom OKLCH</span>
                        </button>
                    </div>
                </div>

                <!-- Dark Mode Toggle -->
                <div class="space-y-3">
                    <label class={`text-sm font-medium ${themeState.colorTheme === 'default' ? 'text-neutral-700 dark:text-neutral-300' : 'text-card-foreground'}`}>Mode</label>
                    <div class={`flex items-center justify-between p-3 rounded-xl border ${themeState.colorTheme === 'default' ? 'border-neutral-200 dark:border-neutral-800' : 'border-border'}`}>
                        <div class="flex items-center gap-3">
                            <div class={`p-2 rounded-lg ${themeState.colorTheme === 'default' ? 'bg-neutral-100 dark:bg-neutral-800 text-neutral-600 dark:text-neutral-300' : 'bg-muted text-foreground'}`}>
                                {#if themeState.isDark}
                                    <Moon size={18} />
                                {:else}
                                    <Sun size={18} />
                                {/if}
                            </div>
                            <span class={`text-sm font-medium ${themeState.colorTheme === 'default' ? 'text-neutral-700 dark:text-neutral-200' : 'text-card-foreground'}`}>
                                {themeState.isDark ? 'Dark Mode' : 'Light Mode'}
                            </span>
                        </div>
                        
                        <button 
                            onclick={themeState.toggleDark}
                            class={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors cursor-pointer focus:outline-none focus:ring-2 focus:ring-offset-2 ${
                                themeState.colorTheme === 'default' 
                                ? (themeState.isDark ? 'bg-neutral-900 dark:bg-white focus:ring-neutral-900' : 'bg-neutral-300 focus:ring-neutral-400')
                                : (themeState.isDark ? 'bg-primary focus:ring-primary' : 'bg-muted focus:ring-primary')
                            }`}
                        >
                            <span class={`inline-block h-4 w-4 transform rounded-full transition-transform ${themeState.colorTheme === 'default' ? 'bg-white' : 'bg-primary-foreground'} ${themeState.isDark ? 'translate-x-6' : 'translate-x-1'}`}></span>
                        </button>
                    </div>
                </div>
            </div>
            
            <div class={`mt-8 pt-4 border-t ${themeState.colorTheme === 'default' ? 'border-neutral-200 dark:border-neutral-800' : 'border-border'} flex justify-end`}>
                <button onclick={onClose} class={`px-5 py-2 text-sm font-medium rounded-lg transition-colors cursor-pointer ${themeState.colorTheme === 'default' ? 'bg-neutral-900 text-white hover:bg-neutral-800 dark:bg-neutral-100 dark:text-neutral-900 dark:hover:bg-white' : 'bg-primary text-primary-foreground hover:bg-primary/90'}`}>
                    Done
                </button>
            </div>
        </div>
    </div>
{/if}
