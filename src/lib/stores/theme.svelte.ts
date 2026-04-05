import { browser } from '$app/environment';

export function createThemeState() {
	let isDark = $state(false);
	let colorTheme = $state('default'); // 'default' or 'custom'

	if (browser) {
		const savedTheme = localStorage.getItem('theme');
		const savedColorTheme = localStorage.getItem('colorTheme');

		if (savedTheme === 'dark' || (!savedTheme && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
			isDark = true;
			document.documentElement.classList.add('dark');
		}

		if (savedColorTheme) {
			colorTheme = savedColorTheme;
			document.documentElement.setAttribute('data-theme', colorTheme);
		}
	}

	function toggleDark() {
		isDark = !isDark;
		if (browser) {
			if (isDark) {
				document.documentElement.classList.add('dark');
				localStorage.setItem('theme', 'dark');
			} else {
				document.documentElement.classList.remove('dark');
				localStorage.setItem('theme', 'light');
			}
		}
	}

	function setColorTheme(newTheme: string) {
		colorTheme = newTheme;
		if (browser) {
			document.documentElement.setAttribute('data-theme', newTheme);
			localStorage.setItem('colorTheme', newTheme);
		}
	}

	return {
		get isDark() { return isDark; },
		toggleDark,
		get colorTheme() { return colorTheme; },
		setColorTheme
	};
}

export const themeState = createThemeState();
