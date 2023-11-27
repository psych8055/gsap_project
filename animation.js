// gsap.registerPlugin(ScrollTrigger);
var tl =
        gsap.timeline({scrollTrigger:{
        trigger:".first-page-outer",
        start:"32% 32%",
        end:"70% 1%",
        scrub:true,
        // markers:true,
        pin: true,
}})
tl.to(".first-page-frame-image1",{
    scale:5,
    display:"none"
},'jh')
tl.to(".first-page-frame-image2",{
    left:"-10%",
    translateX:"-800px",
    display:"none"
},'jh')
tl.to(".first-page-frame-image3",{
    translateX:"800px",
    display:"none"
},'jh')
tl.to(".text-animation",{
    opacity:"0"
},'jh')
// var window_height = window.innerHeight
// console.log(window_height)
// var tl3 =
//         gsap.timeline({scrollTrigger:{
//         trigger:".first-page-frame",
//         start:"100% 50%",
//         end:"120% 50%",
//         scrub:true,
//         markers:true,
//         // pin: true,
// }})
// tl3.to("body",{
//     translateY:"-100vh",
//     transition: "all 1s ease-out"
// })
var tl2= gsap.timeline({scrollTrigger:{
        trigger:".second-page",
        start:"top top",
        end:"15% 10%",
        scrub:true,
        // markers:true,
        pin: true
}})
tl2.to(".first-page-frame",{
    backgroundPosition: "bottom"
},"second")
tl2.to(".second-page-image-1",{
    left: "-10%",
    top: "-10%",
    transition: "all 1s ease-in"
},"second")
tl2.to(".second-page-image-2",{
    right: "-10%",
    top: "-10%",
    transition: "all 1s ease-in",
},"second")
tl2.to(".second-page-image-4",{
    top: "0%",
    transition: "all 1s ease-in"
},"second")
tl2.to(".second-page-image-3",{
    top: "40%",
    transition: "all 1s ease-in"
},"second")
// tl2.to(".second-page",{
//     top:"-200vh",
//     transition: "all 1s ease-in"
// },"second")

var tl4= gsap.timeline({scrollTrigger:{
    trigger:".second-page",
    start:"top top",
    end:"60% 10%",
    scrub:true,
    // markers:true,
    // pin: true
}})

tl4.to(".third-page-bg .para-text",{
    transition: "all 2s ease-in",
    transform: "translateY(0px)",
    opacity:"1",
},"third")
tl4.to(".third-page-bg",{
    transition: "all 2s ease-in",
    transform: "translateY(0px)",
    opacity:"1",
    transitionDelay : "1s",
    backgroundImage: "url(images/third-overlap.png),url(/images/fourth-page-bg.png)",
    pin: true
},"third")
tl4.to(".second-page-image-2",{
    display:"none"
},"third")

var tl5= gsap.timeline({scrollTrigger:{
    trigger:".third-page",
    start:"80% 60%",
    end:"30% 0%",
    scrub:true,
    // markers:true,
    // pin: true
}})
tl5.to(".fourth-para-text-outer",{
    transition: "all 1.5s ease-in",
    transform: "translateY(0px)"
},"fifth")
tl5.to(".fourth-page-line",{
    transition: "all 1.5s ease-in",
    top:"57%",
},"fifth")

var tl6= gsap.timeline({scrollTrigger:{
    trigger:".fifth-page",
    start:"0% 0%",
    end:"50% 0%",
    scrub:true,
    // markers:true,
    pin: true
}})
tl6.to(".fifth-page-bg .fifth-page-image3",{
    width:"100%",
    height:"100vh",
    left:"0",
    top:"0",
    opacity:"1"
},"fifth")

// var tl7= gsap.timeline({scrollTrigger:{
//     trigger:".fifth-page",
//     start:"50% 100%",
//     end:"50% 100%",
//     scrub:true,
//     markers:true,
//     pin: true
// }})

// tl7.to(".fifth-page-bg .fifth-page-image3",{
//     width:"549px",
//     height:"auto",
//     left:"20%",
//     bottom:"25%",
//     opacity:"0.8"
// },"sixth")

const t8 = gsap.timeline({
    scrollTrigger: {
      trigger: ".ninth-page",
      start: "top 25%",
      end: "bottom top",
      scrub: 1,
      markers: true,
      toggleClass: 'split'
    }
  });