import { useEffect } from 'react';
import Lenis from '@studio-freight/lenis';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function SmoothScrollWrapper({ children }) {
  useEffect(() => {
    const lenis = new Lenis({
      lerp: 0.1,
    });

    lenis.on('scroll', ScrollTrigger.update);

    gsap.ticker.add((time) => {
      lenis.raf(time * 1000);
    });

    const scrollableElements = document.querySelectorAll('.allow-natural-scroll');
    scrollableElements.forEach((element) => {
      element.addEventListener('wheel', (event) => {
        event.stopPropagation();
      });

      element.addEventListener('touchmove', (event) => {
        event.stopPropagation();
      });
    });

    return () => {
      gsap.ticker.remove(lenis.raf);
      lenis.destroy();
    };
  }, []);

  return <div>{children}</div>;
}
