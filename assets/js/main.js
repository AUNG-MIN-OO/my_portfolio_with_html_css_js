//nav bar scroll effect

function  scrollNav(){
    let header = document.getElementById('header');
    console.log(header.classList)
    if (this.scrollY >= 50){
        header.classList.add('scroll-nav');
    }else{

        header.classList.remove('scroll-nav');
    }
}
window.addEventListener('scroll',scrollNav);
// function scrollHeader(){
//     if(this.scrollY >= 80) nav.classList.add('scroll-header'); else nav.classList.remove('scroll-header')
// }
// window.addEventListener('scroll', scrollHeader)


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
        items: 2
    },
    960:{
        items:1
    },
}

$('.owl-carousel').owlCarousel({
    dots: false,
    loop:true,
    autoplay:true,
    autoplayTimeout: 2000,
    nav: true,
    navText: [$('.owl-navigation .owl-nav-prev'),$('.owl-navigation .owl-nav-next')],
    responsive: responsive
});



