import gsap from 'gsap';
import { ScrollTrigger } from "gsap/ScrollTrigger";

// import { ScrollTrigger } from 'scrolltrigger';

// Import the ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);

// Animation 1: Falling Text with ScrollTrigger
export const fallingTextAnimation = (element) => {
    gsap.from(element, {
        y: -100,
        rotation: -15,
        ease: 'bounce.out',
        duration: 2,
        scrollTrigger: {
            trigger: element,
            start: 'top 80%', // Start animation when the element is 80% in the viewport
        },
    });
};

// Animation 2: Appear from Below with ScrollTrigger
export const appearFromBelowAnimation = (element) => {
    gsap.from(element, {
        y: 100,
        opacity: 0,
        duration: 1,
        scrollTrigger: {
            trigger: element,
            start: 'top 80%',
        },
    });
};

// Animation 3: Rotation with Fade and ScrollTrigger
export const rotateWithFadeAnimation = (element) => {
    gsap.from(element, {
        rotation: 360,
        opacity: 0,
        duration: 3,
        scrollTrigger: {
            trigger: element,
            start: 'top 80%',
        },
    });
};
