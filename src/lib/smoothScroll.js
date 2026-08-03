import Lenis from 'lenis';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';

// Wire Lenis smooth scroll into GSAP's ticker + ScrollTrigger so scrubbed
// animations stay perfectly in sync with the eased scroll position.
export function initSmoothScroll() {
  const lenis = new Lenis({
    duration: 1.15,
    easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
    smoothWheel: true,
    wheelMultiplier: 1,
    touchMultiplier: 1.4,
    lerp: 0.1,
  });

  lenis.on('scroll', ScrollTrigger.update);
  gsap.ticker.add((time) => lenis.raf(time * 1000));
  gsap.ticker.lagSmoothing(0);

  // Belt-and-suspenders: also refresh scrubs on any *native* scroll that
  // bypasses Lenis (keyboard PageDown/arrows/Space, scrollbar drag,
  // programmatic scrollTo). Idempotent — ScrollTrigger throttles internally.
  window.addEventListener('scroll', () => ScrollTrigger.update(), { passive: true });

  return lenis;
}
