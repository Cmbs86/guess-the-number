// Get theme on page load
const localStorageTheme = localStorage.getItem('theme');
const systemSettingDark = window.matchMedia('(prefers-color-scheme: dark)');

function calculateSettingAsThemeString({ localStorageTheme, systemSettingDark }) {
  if (localStorageTheme !== null) {
    return localStorageTheme;
  }

  if (systemSettingDark.matches) {
    return 'dark';
  }

  return 'light';
}

// Calculate the current theme setting
let currentThemeSetting = calculateSettingAsThemeString({
  localStorageTheme,
  systemSettingDark,
});

// Target the button using the data attribute from HTML.
const button = document.querySelector('[data-theme-toggle]');

button.addEventListener('click', () => {
  // Toggle the theme between light and dark
  const newTheme = currentThemeSetting === 'dark' ? 'light' : 'dark';

  // Update the button text
  const newCta =
    newTheme === 'dark' ? 'Change to light theme' : 'Change to dark theme';
  button.innerText = newCta;

  // Update aria-label if using icons instead of text
  button.setAttribute('aria-label', newCta);

  // Update theme attribute on HTML to switch theme in CSS
  document.querySelector('html').setAttribute('data-theme', newTheme);

  // Save the new theme in local storage
  localStorage.setItem('theme', newTheme);

  // Update the current theme setting in memory
  currentThemeSetting = newTheme;
});

// Set the theme on page load based on saved preference or system settings
document.querySelector('html').setAttribute('data-theme', currentThemeSetting);
button.innerText =
  currentThemeSetting === 'dark' ? 'Change to light theme' : 'Change to dark theme';
