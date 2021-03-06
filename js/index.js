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
                document.querySelector('.about').style.background = 'linear-gradient(to right bottom, #403b4a 0%,#e7e9bb 100% )';
                document.querySelector('.projects').style.background = 'linear-gradient(to right bottom, #4da0b0 0%,#d39d38 100% )';
                Array.from(document.querySelectorAll('.project__footer--btns--1')).forEach(e => e.style.background = 'linear-gradient(to right bottom, #114357 0%,#f29492 100% )');
                Array.from(document.querySelectorAll('.project__footer--btns--2')).forEach(e => e.style.background = 'linear-gradient(to right bottom, #1f1c2c 0%,#928dab 100% )');
                document.querySelector('.project__info').style.background = 'linear-gradient(to right bottom, #232526 0%,#414345 100% )';
                document.querySelector('.contact').style.background = 'linear-gradient(to right bottom, #232526 0%,#414345 100% )';
                ['title','greeting'].forEach(e => document.getElementById(e).style.color = 'white');
                ['name', 'company', 'work'].forEach(e => {
                    document.getElementById(e).style.color = 'white';
                    document.getElementById(e).style.borderBottom = '.15rem solid white'
                });
                document.querySelector('.contact__btn').style.background = 'linear-gradient(to right bottom, #1f1c2c 0%,#928dab 100% )';
                document.querySelector('.navigation__background').style.background = 'linear-gradient(to right bottom, #536976 0%,#292e49 100% )';
            }else{
                document.querySelector('.darkmode__toggle--icon').src = './img/half-moon (1).png';
                document.querySelector('body').style.backgroundColor = 'white';
                document.querySelector('.header').style.background = `linear-gradient(to right bottom, #a1ffce 0%,#faffd1 100% )`;
                document.querySelector('.header__content').style.color = 'black';
                document.querySelector('.about').style.background = 'linear-gradient(to right bottom, #ff8008 0%,#ffc837 100% )';
                document.querySelector('.projects').style.background = 'linear-gradient(to right bottom, #ee9ca7 0%,#ffdde1 100% )';
                Array.from(document.querySelectorAll('.project__footer--btns--1')).forEach(e => e.style.background = 'linear-gradient(to right bottom, #ec008c 0%,#fc6767 100% )');
                Array.from(document.querySelectorAll('.project__footer--btns--2')).forEach(e => e.style.background = 'linear-gradient(to right bottom, #ff512f 0%,#dd2476 100% )');
                document.querySelector('.project__info').style.background = 'linear-gradient(to right bottom, #cc2b5e 0%,#753a88 100% )';
                document.querySelector('.contact').style.background = 'linear-gradient(to right bottom, #ece9e6 0%,#ffffff 100% )';
                ['title','greeting'].forEach(e => document.getElementById(e).style.color = 'black');
                ['name', 'company', 'work'].forEach(e => {
                    document.getElementById(e).style.color = 'black';
                    document.getElementById(e).style.borderBottom = '.15rem solid black'
                });
                document.querySelector('.contact__btn').style.background = 'linear-gradient(to right bottom, #833ab4 0%,#fd1d1d 50%,#fcb045 100% )';
                document.querySelector('.navigation__background').style.background = 'linear-gradient(to right bottom, #feac5e 0%,#c779d0 50%,#4bc0c8 100% )';
            }
        },
        toggleVideoMode : (e)=>{
            console.log(e.target.id);
            if(e.target.id === 'eazyfood'){
                document.querySelector('video').src = "./img/eazyfood.mp4";
            }else if(e.target.id === 'eazyrent'){
                document.querySelector('video').src = "./img/eazyrent.mp4";
            }
        },
        closeNavAndNavigate : (e)=>{
            document.getElementById('toggle').checked = false;
        },
        submitContactForm: (e)=>{
            e.preventDefault();
            if(document.getElementById('name').value && document.getElementById('company').value && document.getElementById('work').value){
                console.log("submitting form");
                document.querySelector('.contact__error').textContent = "";
                ['name', 'company', 'work'].forEach(e => document.getElementById(e).style.borderBottom = `.15rem solid ${darkMode ? 'white' : 'black'}`);
                document.getElementById('greeting').reset();
            }else{
                switch (true) {
                    case !document.getElementById('name').value:
                        document.getElementById('name').style.borderBottom = ".15rem solid red";
                        document.querySelector('.contact__error').textContent = "Please enter your name";
                        break;
                
                    case !document.getElementById('company').value:
                        document.getElementById('company').style.borderBottom = ".15rem solid red";
                        document.querySelector('.contact__error').textContent = "Please indicate the company you work for";
                        break;

                    case !document.getElementById('work').value:
                        document.getElementById('work').style.borderBottom = ".15rem solid red";
                        document.querySelector('.contact__error').textContent = "Please choose a reason for reaching out";
                        break;
                }
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
        });
        Array.from(document.querySelectorAll('.navigation__menu--items--link')).forEach(e => e.addEventListener('click', uiCtrl.closeNavAndNavigate));
        document.getElementById('submit-btn').addEventListener('click', uiCtrl.submitContactForm);
    }

    const getCurrentYear = ()=>{
        document.getElementById('year').textContent = new Date().getFullYear();
    }

    return {
        init: ()=>{
            getCurrentYear();
            setupEventListeners();
        }
    }
})(uiController);

controller.init();


