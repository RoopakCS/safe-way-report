import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

/**
 * Animate text reveal on scroll
 */
export const animateTextReveal = (
  element: HTMLElement | null,
  options?: {
    delay?: number;
    duration?: number;
    y?: number;
  }
) => {
  if (!element) return;

  const { delay = 0, duration = 1, y = 50 } = options || {};

  gsap.fromTo(
    element,
    {
      y,
      opacity: 0,
    },
    {
      y: 0,
      opacity: 1,
      duration,
      delay,
      ease: 'power3.out',
      scrollTrigger: {
        trigger: element,
        start: 'top 80%',
        toggleActions: 'play none none reverse',
      },
    }
  );
};

/**
 * Animate elements with stagger effect
 */
export const animateStagger = (
  elements: HTMLElement[] | NodeListOf<HTMLElement>,
  options?: {
    y?: number;
    opacity?: number;
    scale?: number;
    stagger?: number;
    duration?: number;
  }
) => {
  if (!elements || elements.length === 0) return;

  const {
    y = 60,
    opacity = 0,
    scale = 1,
    stagger = 0.15,
    duration = 0.8,
  } = options || {};

  gsap.fromTo(
    Array.from(elements),
    {
      y,
      opacity,
      scale,
    },
    {
      y: 0,
      opacity: 1,
      scale: 1,
      duration,
      stagger,
      ease: 'power3.out',
      scrollTrigger: {
        trigger: elements[0]?.parentElement || elements[0],
        start: 'top 80%',
        toggleActions: 'play none none reverse',
      },
    }
  );
};

/**
 * Create parallax effect
 */
export const createParallax = (
  element: HTMLElement | null,
  speed: number = 0.5,
  direction: 'up' | 'down' = 'up'
) => {
  if (!element) return;

  const multiplier = direction === 'up' ? -1 : 1;

  gsap.to(element, {
    y: `${multiplier * speed * 100}%`,
    ease: 'none',
    scrollTrigger: {
      trigger: element,
      start: 'top bottom',
      end: 'bottom top',
      scrub: 1,
    },
  });
};

/**
 * Pin section with overlap effect
 */
export const pinSection = (
  element: HTMLElement | null,
  duration: string = '100%',
  pinSpacing: boolean = true
) => {
  if (!element) return;

  ScrollTrigger.create({
    trigger: element,
    start: 'top top',
    end: `+=${duration}`,
    pin: true,
    pinSpacing,
    anticipatePin: 1,
  });
};

