const navbar = document.querySelector('.navbar')
const loginForm = document.querySelector('.login-form')
const searchForm = document.querySelector('.search-form')

document.querySelector('#menu-btn').onclick = () =>{
    navbar.classList.toggle('active')
    loginForm.classList.remove('active')
    searchForm.classList.remove('active')
}

document.querySelector('#login-btn').onclick = () =>{
    loginForm.classList.toggle('active')
    navbar.classList.remove('active')
    searchForm.classList.remove('active')
}

document.querySelector('#search-button').onclick = () =>{
    searchForm.classList.toggle('active')
    navbar.classList.remove('active')
    loginForm.classList.remove('active')
}

window.onscroll = () =>{
    navbar.classList.remove('active')
    loginForm.classList.remove('active')
    searchForm.classList.remove('active')
}

// Theme

const themeBtn = document.querySelector('#theme-btn')
themeBtn.onclick = () =>{
    themeBtn.classList.toggle('fa-sun')

    if(themeBtn.classList.contains('fa-sun')){
        document.body.classList.add('active')
    }
    else{
        document.body.classList.remove('active')
    }
}

var swiper = new Swiper(".review-slider", {
    loop: true,
    spaceBetween: 20,
    centeredSlides: true,
    autoplay: {
        delay: 5500,
        disableOnInteraction: false,
    },
      pagination: {
        el: ".swiper-pagination",
      },
    });

    
    secOpt = document.querySelector(".sec-opt2")
    
    function show(){
        secOpt.style.display = 'inline'
    }

    function hide(){
        secOpt.style.display = 'none'
    }

    trvOpt2 = document.querySelector('.trv-opt2')
    trvOpt22 = document.querySelector('.trv-opt22')
    
    
    function showTr(){
        trvOpt2.style.display = 'inline'
        trvOpt22.style.display = 'inline'
    }

    function hideTr(){
        trvOpt2.style.display = 'none'
        trvOpt22.style.display = 'none'
    }


    const Diff = document.querySelector('.diff')
    function differ(){
        Diff.style.display = 'inline'
    }