const scroll = new LocomotiveScroll({
    el: document.querySelector('#main'),
    smooth: true
});

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