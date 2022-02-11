const Icon = {
    dark: 'dark-theme-icon.svg',
    light: 'light-theme-icon.svg',
};

function toggleTheme(button) {
    let existDarkClass = document.querySelector('body').classList.toggle('dark');

    if (existDarkClass) {
        updateButtonTheme(button, Icon.dark);
        return;
    }

    updateButtonTheme(button, Icon.light);
}

function updateButtonTheme(button, pathIcon) {
    button.querySelector('img').attributes[0].value = `assets/${pathIcon}`;

    button.classList.toggle('button-animation');
}