import {gsap} from 'gsap'

const timeline = gsap.timeline({ default: { duration: 1 } })
timeline
    .from(".header", { y: "-100%", ease: "bounce" });
