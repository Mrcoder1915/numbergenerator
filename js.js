const maincontainer = document.querySelector('.maincontainer');
const register = document.querySelector('.register');
const loginlink = document.querySelector('.login-link');
const iconclose= document.querySelector('.iconclose');
const btnlogin = document.querySelector('.btn-login');
const btnabout = document.querySelector('.btn-about')
const about = document.querySelector('.about')
const iconcloseabout = document.querySelector('.iconclose-about');


register.addEventListener('click',() => {
    maincontainer.classList.add('active');
});

loginlink.addEventListener('click',() => {
    maincontainer.classList.remove('active');
});
iconclose.addEventListener('click',() => {
    maincontainer.classList.remove('active-popup');
});
btnlogin.addEventListener('click',() => {
    maincontainer.classList.add('active-popup');
});
btnabout.addEventListener('click',() => {
    about.classList.add('active-popup');
});
iconcloseabout.addEventListener('click',() => {
    about.classList.remove('active-popup');
});
btnlogin.addEventListener('click',() => {
    about.classList.remove('active-popup');
});
btnabout.addEventListener('click',() => {
    maincontainer.classList.remove('active-popup');
});
