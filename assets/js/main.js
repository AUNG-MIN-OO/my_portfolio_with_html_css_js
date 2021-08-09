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
    .typeString('<strong style="color: red;">Full Stack</strong> Developer ')
    .pauseFor(1000)
    .start();


