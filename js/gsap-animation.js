

const screenWidth = window.innerWidth;


if (screenWidth > 650) {

    gsap.from(".page3 .content #para span", {
        y:40,
        opacity:0,
        stagger:0.15,
        duration:0.4,
        scrollTrigger:{
            trigger:".page3 .content",
            scroller:"body",
            // markers:true,
            start:"top 45%",
        }
    })
    
gsap.to(".page2 .video-container", {
    // y:100
    width:1215,
    // scale:0,
    scrollTrigger:{
        trigger:".page2 .video-container",
        scroller:"body",
        // markers:true,
        end:"top 10%",
        start:"top 80%",
        scrub:1
    }
})

}
var tl = gsap.timeline();

gsap.from(".content h1 span", {
    y:60,
    opacity:0,
    stagger:0.1,
    delay:0.3
})

tl.from(".page1 .content .first span", {
    y:100,
    opacity:0,
    stagger:0.15,
    duration:1
})

gsap.to(".page1 .content #brand ",{
    x:-30,
    scrollTrigger:{
        trigger:".page2 .video-container",
        scroller:"body",
        end:"top 10%",
        start:"top 90%",
        scrub:1
    }
})
