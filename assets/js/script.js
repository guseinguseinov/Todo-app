'use strict';

const themeButton = document.querySelector('.theme-btn');
const themeButtonImage = document.querySelector('.theme-icon');


themeButton.addEventListener('click', function(){
    
    if (document.documentElement.dataset.theme === 'dark') {
        document.documentElement.dataset.theme = 'light';  
        themeButtonImage.src = 'assets/images/icon-sun.svg';
    }
    else {
        document.documentElement.dataset.theme = 'dark';  
        themeButtonImage.src = 'assets/images/icon-moon.svg';
    }
}); 