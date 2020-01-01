const uiController = (()=>{
    let darkMode;
    let videoMode;

    return {
        changeTheme : ()=>{
            darkMode === true ? darkMode = false : darkMode = true;
            if(darkMode){
                document.querySelector('.darkmode__toggle--icon').src = './img/sun.png';
                document.querySelector('body').style.backgroundColor = '#1e1e1e';
                document.querySelector('.header').style.backgroundImage = `url('../../img/night.gif')`;
                document.querySelector('.header').style.backgroundSize = 'cover';
                document.querySelector('.header__content').style.color = 'white';
                document.querySelector('.about').style.background = 'linear-gradient(90deg, #403b4a 0%,#e7e9bb 100% )';
                document.querySelector('.projects').style.background = 'linear-gradient(90deg, #4da0b0 0%,#d39d38 100% )';
                Array.from(document.querySelectorAll('.project__footer--btns--1')).forEach(e => e.style.background = 'linear-gradient(90deg, #114357 0%,#f29492 100% )');
                Array.from(document.querySelectorAll('.project__footer--btns--2')).forEach(e => e.style.background = 'linear-gradient(90deg, #1f1c2c 0%,#928dab 100% )');
                document.querySelector('.project__info').style.background = 'linear-gradient(90deg, #232526 0%,#414345 100% )';
                document.querySelector('.navigation__background').style.background = 'linear-gradient(90deg, #536976 0%,#292e49 100% )';
            }else{
                document.querySelector('.darkmode__toggle--icon').src = './img/half-moon (1).png';
                document.querySelector('body').style.backgroundColor = 'white';
                document.querySelector('.header').style.background = `linear-gradient(90deg, #a1ffce 0%,#faffd1 100% )`;
                document.querySelector('.header__content').style.color = 'black';
                document.querySelector('.about').style.background = 'linear-gradient(90deg, #ff8008 0%,#ffc837 100% )';
                document.querySelector('.projects').style.background = 'linear-gradient(90deg, #ee9ca7 0%,#ffdde1 100% )';
                Array.from(document.querySelectorAll('.project__footer--btns--1')).forEach(e => e.style.background = 'linear-gradient(90deg, #ec008c 0%,#fc6767 100% )');
                Array.from(document.querySelectorAll('.project__footer--btns--2')).forEach(e => e.style.background = 'linear-gradient(90deg, #ff512f 0%,#dd2476 100% )');
                document.querySelector('.project__info').style.background = 'linear-gradient(90deg, #cc2b5e 0%,#753a88 100% )';
                document.querySelector('.navigation__background').style.background = 'linear-gradient(90deg, #feac5e 0%,#c779d0 50%,#4bc0c8 100% )';
            }
        },
        toggleVideoMode : (e)=>{
            console.log(e.target.id);
            if(e.target.id === 'eazyfood'){
                document.querySelector('video').src = "./img/eazyfood.mp4";
            }else if(e.target.id === 'eazyrent'){
                document.querySelector('video').src = "./img/eazyrent.mp4";
                // document.getElementById('video-wbem').src = "./img/eazyrent.webm";
                // document.getElementById('video-mp4').src = "./img/eazyrent.mp4";
                // document.getElementById('preview').onload()
                // document.getElementById('preview').play();
            }
        }
    }
})();

const controller = ((uiCtrl)=>{
    const setupEventListeners = ()=>{
        const darkModeBtn = document.querySelector('.darkmode__toggle');
        darkModeBtn.addEventListener('click', uiCtrl.changeTheme);
        ['eazyfood', 'eazyrent'].forEach((e)=>{
            document.getElementById(e).addEventListener('click', uiCtrl.toggleVideoMode);
        })
    }

    return {
        init: ()=>(setupEventListeners())
    }
})(uiController);

controller.init();


