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




