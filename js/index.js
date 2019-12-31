var darkMode;

const darkModeBtn = document.querySelector('.darkmode__toggle');
darkModeBtn.addEventListener('click', changeTheme);

function changeTheme() {
    darkMode === true ? darkMode = false : darkMode = true;
    if(darkMode){
        document.querySelector('body').style.backgroundColor = '#1e1e1e';
        document.querySelector('.header').style.backgroundImage = `url('../../img/night.gif')`;
        document.querySelector('.header').style.backgroundSize = 'cover';
        document.querySelector('.header__content').style.color = 'white';
        document.querySelector('.navigation__background').style.background = 'linear-gradient(90deg, #536976 0%,#292e49 100% )';
    }else{
        document.querySelector('body').style.backgroundColor = 'white';
        document.querySelector('.header').style.background = `linear-gradient(90deg, #a1ffce 0%,#faffd1 100% )`;
        document.querySelector('.header__content').style.color = 'black';
        document.querySelector('.navigation__background').style.background = 'linear-gradient(90deg, #feac5e 0%,#c779d0 50%,#4bc0c8 100% )';
    }
}


