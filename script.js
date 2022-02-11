const toogleThemeButton = document.getElementById('switch-theme');

toogleThemeButton.addEventListener('click', toggleTheme);

function toggleTheme() {
    let existDarkClass = document.querySelector('body').classList.toggle('dark');

    updateIconToogleThemeButton(existDarkClass);
}

function updateIconToogleThemeButton(existDarkClass) {

    if (existDarkClass === false) {
        document.querySelector('img').attributes[0].value = 'assets/dark.svg';

        toogleThemeButton.classList.toggle('switch-button-animation');
        
        return;
    }

    document.querySelector('img').attributes[0].value = 'assets/light.svg';
    toogleThemeButton.classList.toggle('switch-button-animation');
}