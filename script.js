const toogleThemeButton = document.getElementById('switch-theme');

toogleThemeButton.addEventListener('click', () => {

    document.querySelector('body').classList.toggle('dark');

    let currentIcon = document.querySelector('img').attributes[0].value;

    if (currentIcon === 'assets/light.svg') {
        document.querySelector('img').attributes[0].value = 'assets/dark.svg';

        toogleThemeButton.classList.toggle('switch-button-animation');
        
        return;
    }

    document.querySelector('img').attributes[0].value = 'assets/light.svg';
    toogleThemeButton.classList.toggle('switch-button-animation');
});