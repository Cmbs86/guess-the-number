// Get theme on page load
const localStorageTheme: string | null = localStorage.getItem('theme');
const systemSettingDark: MediaQueryList = window.matchMedia('(prefers-color-scheme: dark)');

function calculateSettingAsThemeString({
  localStorageTheme,
  systemSettingDark,
}: {localStorageTheme: string | null;
  systemSettingDark: MediaQueryList;}): string {
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
const button = document.querySelector('[data-theme-toggle]') as HTMLButtonElement | null;
const moonIcon = button?.querySelector('.fa-moon') as HTMLElement | null;
const sunIcon = button?.querySelector('.fa-sun') as HTMLElement | null;

// Function to update the icon based on the currente theme
function updateThemeIcons() {
  if (currentThemeSetting === 'dark') {
    moonIcon.style.display = 'none';
    sunIcon.style.display = 'block';
  } else {
   
    moonIcon.style.display = 'block';
    sunIcon.style.display = 'none';
  }
}

updateThemeIcons();

button.addEventListener('click', () => {
  // Toggle the theme between light and dark
  const newTheme = currentThemeSetting === 'dark' ? 'light' : 'dark';

  // Update the button text
  const newCta =
    newTheme === 'dark' ? 'Change to light theme' : 'Change to dark theme';
  // Update aria-label when using icons
  button.setAttribute('aria-label', newCta);

  // Update theme attribute on HTML to switch theme in CSS
  document.querySelector('html').setAttribute('data-theme', newTheme);

  // Save the new theme in local storage
  localStorage.setItem('theme', newTheme);

  // Update the current theme setting in memory
  currentThemeSetting = newTheme;

  //update the icons after changing the theme.
  updateThemeIcons();
});

// Set the theme on page load based on saved preference or system settings
document.querySelector('html').setAttribute('data-theme', currentThemeSetting);
// button.innerText =
//   currentThemeSetting === 'dark' ? 'Change to light theme' : 'Change to dark theme';
