const menuBtn = document.querySelector('.menu');
const menu = document.querySelector('.about-div');
const navbar = document.querySelector('.navbar');

menuBtn.addEventListener("click",()=>{
    if(menuBtn.innerText ==="menu"){
        menu.style.opacity = '1';
        menuBtn.innerText ="close";

    }
    else{
          menu.style.opacity = '0';
        menuBtn.innerText ="menu";
    }
})


window .addEventListener('scroll',()=>{
    if (window.scrollY > window.innerHeight-50){
navbar.classList.add('navbar-active');

    }
       if (window.scrollY < window.innerHeight-50){
navbar.classList.remove('navbar-active');

    }

})



function firstPageAnim(){
    let tl = gsap.timeline();
    tl.from('.navbar',{
        y:'-10',
        opacity:0,
        duration:1.5,
        ease:Expo.easeInOut,
    })

     
    .to('.bounding-element',{
        y:'0%',
        duration:0.5,
        ease:Expo.easeInOut,
    })
}

firstPageAnim();
const scroll = new LocomotiveScroll({
    el: document.querySelector('#main'),
    smooth: true
});