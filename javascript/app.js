const scroll = new LocomotiveScroll({
    el: document.querySelector("[data-scroll-container]"),
    smooth: true,
    tablet: { smooth: true },
    smartphone: { smooth: true },



});


/*=======GSAP ANIMATION Tweenmax========*/
TweenMax.from(".image-ENI", 4,{
    delay: 1,
    x:"30px",
    y:"-15px",
    opacity:0,
    
});
TweenMax.from(".h2--hero", 3,{
    delay: 0.5,
    x:"-100px",
    
});
TweenMax.from(".association", 3.5,{
    delay: 1.5,
    opacity:0,
    y:"15px",
    x:"15px",
    ease: Expo.easeInOut,
    
});
TweenMax.from(".para-hero", 3.5,{
    delay: 1,
    x:"60px",
    ease: Expo.easeInOut,
    
});
TweenMax.from(".hero h1", 4,{
    delay: 1,
    x:"60px",
    ease: Expo.easeInOut,
    
});
TweenMax.from(".ligne-left", 4,{
    delay: 3,
    x:"10px",
    ease: Expo.easeInOut,
    
});
TweenMax.from(".ligne-right", 4,{
    delay: 3,
    x:"10px",
    ease: Expo.easeInOut,
    
});
TweenMax.from(".image-fluid", 4,{
    delay: 3,
    opacity:0,
    y:"50px",
    ease: Expo.easeInOut,
    
});





