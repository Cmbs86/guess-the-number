"use strict";
var _a;
const localStorageTheme = localStorage.getItem('theme');
const systemSettingDark = window.matchMedia('(prefers-color-scheme: dark)');
function calculateSettingAsThemeString({ localStorageTheme, systemSettingDark, }) {
    if (localStorageTheme !== null) {
        return localStorageTheme;
    }
    if (systemSettingDark.matches) {
        return 'dark';
    }
    return 'light';
}
let currentThemeSetting = calculateSettingAsThemeString({
    localStorageTheme,
    systemSettingDark,
});
const button = document.querySelector('[data-theme-toggle]');
const moonIcon = button === null || button === void 0 ? void 0 : button.querySelector('.fa-moon');
const sunIcon = button === null || button === void 0 ? void 0 : button.querySelector('.fa-sun');
function updateThemeIcons() {
    if (currentThemeSetting === 'dark') {
        moonIcon === null || moonIcon === void 0 ? void 0 : moonIcon.style.setProperty('display', 'none');
        sunIcon === null || sunIcon === void 0 ? void 0 : sunIcon.style.setProperty('display', 'block');
    }
    else {
        moonIcon === null || moonIcon === void 0 ? void 0 : moonIcon.style.setProperty('display', 'block');
        sunIcon === null || sunIcon === void 0 ? void 0 : sunIcon.style.setProperty('display', 'none');
    }
}
if (button) {
    updateThemeIcons();
    button.addEventListener('click', () => {
        var _a;
        const newTheme = currentThemeSetting === 'dark' ? 'light' : 'dark';
        const newCta = newTheme === 'dark' ? 'Change to light theme' : 'Change to dark theme';
        button.setAttribute('aria-label', newCta);
        (_a = document.querySelector('html')) === null || _a === void 0 ? void 0 : _a.setAttribute('data-theme', newTheme);
        localStorage.setItem('theme', newTheme);
        currentThemeSetting = newTheme;
        updateThemeIcons();
    });
}
(_a = document.querySelector('html')) === null || _a === void 0 ? void 0 : _a.setAttribute('data-theme', currentThemeSetting);
