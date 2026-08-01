import { useEffect } from 'react';
import Lenis from '@studio-freight/lenis';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

// Register ScrollTrigger inside this file so it knows it exists
gsap.registerPlugin(ScrollTrigger);

export default function SmoothScroll({ children }) {
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)), 
      smooth: true,
    });

    // 1. Tell ScrollTrigger to update itself every time Lenis scrolls
    lenis.on('scroll', ScrollTrigger.update);

    // 2. Create a function to sync GSAP's internal ticker with Lenis
    const update = (time) => {
      // GSAP's time is in seconds, Lenis expects milliseconds
      lenis.raf(time * 1000); 
    };

    // 3. Add the update function to GSAP's ticker
    gsap.ticker.add(update);

    // 4. Turn off GSAP's default lag smoothing so it doesn't clash with Lenis's easing
    gsap.ticker.lagSmoothing(0);

    return () => {
      // Clean everything up when the component unmounts
      lenis.destroy();
      gsap.ticker.remove(update);
    };
  }, []);

  return <>{children}</>;
}