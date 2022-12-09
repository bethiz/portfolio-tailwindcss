
//navbar fixed
window.onscroll=function(){
    const header=document.querySelector('header');
    const fixedNav=header.offsetTop;
    const toTop=document.querySelector('#to-top');

    if(window.pageYOffset>fixedNav){
        header.classList.add('navbar-fixed');
        toTop.classList.remove('hidden');
        toTop.classList.add('flex');
    }else{
        header.classList.remove('navbar-fixed');
        toTop.classList.remove('flex');
        toTop.classList.add('hidden');
    }
};


//bahagian hamburger

const hamburger=document.querySelector('#hamburger');
const navMenu=document.querySelector('#nav-menu');

hamburger.addEventListener('click',function(){
    hamburger.classList.toggle('hamburger-active');
    navMenu.classList.toggle('hidden');
});

//klick di luar hamburger
window.addEventListener('click',function (e){
    if(e.target != hamburger && e.target !=navMenu){
        hamburger.classList.remove('hamburger-active');
        navMenu.classList.add('hidden');
    }
});

//darkmode toggle
const darktoggle=document.querySelector('#dark-toggle');
const html=document.querySelector('html');

darktoggle.addEventListener('click',function(){
    if(darktoggle.checked){
      html.classList.add('dark')  ;
      localStorage.theme = 'dark';
    }else{
        html.classList.remove('dark');
        localStorage.theme = 'light'
    }
});

//pindahkan position toggle sesuai dengan mode
if (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
    darktoggle.checked=true;
  } else {
    darktoggle.checked=false;
  }