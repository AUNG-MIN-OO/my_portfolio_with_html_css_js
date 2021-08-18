//nav menu show hide

$('.nav__menu-fontawesome-icon').click(function (){
    $('.nav__menu').animate({top : "8vh"},500);
    $('#nav__menu-icon').addClass('nav__menu-show-icon')
    $('#nav__menu-hide-fontawesome').addClass('nav__menu-hide-icon')
})
$('#nav__menu-hide-fontawesome').click(function (){
    $('.nav__menu').animate({top : "-90vh"},500);
    $('#nav__menu-icon').removeClass('nav__menu-show-icon')
    $('#nav__menu-hide-fontawesome').removeClass('nav__menu-hide-icon')
})
$('.nav__link').click(function (){
    $('.nav__menu').animate({top : "-90vh"},500);
    $('#nav__menu-icon').removeClass('nav__menu-show-icon')
    $('#nav__menu-hide-fontawesome').removeClass('nav__menu-hide-icon')
})

//nav bar scroll effect

function  scrollNav(){
    let header = document.getElementById('header');
    // console.log(header.classList)
    if (this.scrollY >= 50){
        header.classList.add('scroll-nav');
    }else{

        header.classList.remove('scroll-nav');
    }
}
window.addEventListener('scroll',scrollNav);

// Scroll top button show
const scrollTopBtn = document.getElementById("scroll__top");
function showBtn(){
    if (this.scrollY >= 300){
        scrollTopBtn.classList.add('scroll__top-show');
    }else{
        scrollTopBtn.classList.remove('scroll__top-show');
    }
}
window.addEventListener('scroll',showBtn);

//click to scroll top
$(document).ready(function (){
    $('#scroll__top').click(function (e){
        e.preventDefault();
        $('html,body').animate({
            scrollTop : 0,
            scrollBehavior : "smooth",
        },500)
        return false;
    })
})

//Skills toggle
const skillContent = document.getElementsByClassName("skill__content"),
      skillTitle = document.querySelectorAll('.skill__content-title');

function showSkills(){
    let className = this.parentNode.className;
    for (let i = 0; i < skillContent.length; i++){
        skillContent[i].className = "skill__content skill__hide";
    }
    if (className === "skill__content skill__hide"){
        this.parentNode.className = "skill__content skill__show";
    }
}

skillTitle.forEach((el)=>{
    el.addEventListener('click',showSkills)
})

// nav link active
let navLinks = document.querySelectorAll(".nav__link");
for (let i = 0; i < navLinks.length; i++) {
    console.log(navLinks[i])
    navLinks[i].addEventListener("click", function() {
        let current = document.getElementsByClassName("active-link");
        console.log(current[0].className);
        current[0].className = current[0].className.replace(" active-link","");
        this.className += " active-link";
    });
}

// Dark Theme
const themeButton = document.getElementById('theme-button')
const darkTheme = 'dark-theme'
const iconTheme = 'feather-sun'

// Previously selected topic (if user selected)
const selectedTheme = localStorage.getItem('selected-theme')
const selectedIcon = localStorage.getItem('selected-icon')

// We obtain the current theme that the interface has by validating the dark-theme class
const getCurrentTheme = () => document.body.classList.contains(darkTheme) ? 'dark' : 'light'
const getCurrentIcon = () => themeButton.classList.contains(iconTheme) ? 'feather-moon' : 'feather-sun'

// We validate if the user previously chose a topic
if (selectedTheme) {
    // If the validation is fulfilled, we ask what the issue was to know if we activated or deactivated the dark
    document.body.classList[selectedTheme === 'dark' ? 'add' : 'remove'](darkTheme)
    themeButton.classList[selectedIcon === 'uil-moon' ? 'add' : 'remove'](iconTheme)
}

// Activate / deactivate the theme manually with the button
themeButton.addEventListener('click', () => {
    // Add or remove the dark / icon theme
    document.body.classList.toggle(darkTheme)
    themeButton.classList.toggle(iconTheme)
    // We save the theme and the current icon that the user chose
    localStorage.setItem('selected-theme', getCurrentTheme())
    localStorage.setItem('selected-icon', getCurrentIcon())
})

//typewriter css

var app = document.getElementById('typewriter');

var typewriter = new Typewriter(app, {
    loop: true,
    delay: 75,
});

typewriter
    .pauseFor(1000)
    .typeString('Future Ambition - 3 girlfriends')
    .pauseFor(300)
    .deleteChars(13)
    .typeString('<strong style="color: #1CB698;">Full Stack</strong> Developer ')
    .pauseFor(1000)
    .start();

//owlcarousel

const responsive  ={
    0:{
        items:1
    },
    320:{
        items:1
    },
    560:{
        items: 1
    },
    960:{
        items:1
    },
}

$('.owl-carousel-portfolio').owlCarousel({
    dots: false,
    loop:true,
    autoplay:true,
    autoplayTimeout: 3000,
    nav: true,
    navText: [$('.owl-navigation .owl-nav-prev'),$('.owl-navigation .owl-nav-next')],
    responsive: responsive
});

//slick slider

$('.testimonial__slider').slick({
    centerMode: true,
    infinite: true,
    speed: 500,
    autoplay: true,
    autoplaySpeed: 1500,
    arrows: false,
    dots: true,
    slidesToShow: 3,
    responsive: [
        {
            breakpoint: 769,
            settings: {
                arrows: false,
                centerMode: true,
                slidesToShow: 1,
                slidesToScroll: 1,
            }
        },
        {
            breakpoint: 480,
            settings: {
                arrows: false,
                centerMode: true,
                slidesToShow: 1,
            }
        }
    ]
});


//counter up

$('.counter').counterUp({
    delay: 10,
    time: 1000
});

//data aos

AOS.init();






