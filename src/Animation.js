/* eslint-disable no-unused-vars */
// animation.js
// Animation.js
import { motion, useAnimationControls } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

// Fading In
export const fadeInAnimation = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 5 } },
};

// Fading from the Right
export const fadeFromRightAnimation = {
    hidden: { x: 100, opacity: 0 },
    visible: { x: 0, opacity: 1 },
};

// Fading from the Left
export const fadeFromLeftAnimation = {
    hidden: { x: -100, opacity: 0 },
    visible: { x: 0, opacity: 1 },
};

// Fading In and Bouncing Once
export const fadeInBounceAnimation = {
    initial: { opacity: 0, scale: 0.5 },
    whileInView: { opacity: 1, scale: 1, transition: { type: 'spring', stiffness: 150, duration: 2 } },
};

// Zooming In
export const zoomInAnimation = {
    hidden: { scale: 0 },
    visible: { scale: 1 },
};

// Flipping to the Left
export const flipLeftAnimation = {
    hidden: { rotateY: 90, opacity: 0 },
    visible: { rotateY: 0, opacity: 1 },
};

// Flipping to the Right
export const flipRightAnimation = {
    hidden: { rotateY: -90, opacity: 0 },
    visible: { rotateY: 0, opacity: 1 },
};

// Create a reusable scroll-triggered animation
export const useScrollAnimation = (animation) => {
    const controls = useAnimationControls();

    const onInView = () => {
        controls.start('visible');
    };

    const { ref } = useInView({ onInView });

    return { ref, controls };
};
