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

const sections = document.querySelectorAll('section[id]')

function scrollActive(){
    const scrollY = window.pageYOffset

    sections.forEach(current =>{
        const sectionHeight = current.offsetHeight
        const sectionTop = current.offsetTop-102;
        sectionId = current.getAttribute('id')

        if(scrollY > sectionTop && scrollY <= sectionTop + sectionHeight){
            document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.add('active-link')
        }else{
            document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.remove('active-link')
        }
    })
}
window.addEventListener('scroll', scrollActive)


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

$('.owl-carousel').owlCarousel({
    dots: false,
    loop:true,
    autoplay:true,
    autoplayTimeout: 3000,
    nav: true,
    navText: [$('.owl-navigation .owl-nav-prev'),$('.owl-navigation .owl-nav-next')],
    responsive: responsive
});

//counter up

$('.counter').counterUp({
    delay: 10,
    time: 1000
});

//data aos

AOS.init();






