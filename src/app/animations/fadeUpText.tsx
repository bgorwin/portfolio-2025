import gsap from "gsap";

// Type guard to ensure non-null elements
const isHTMLElement = (el: Element | null): el is HTMLElement => el !== null;

export const fadeUpText = (elements: Array<HTMLElement | null>) => {
  const validElements = elements.filter(isHTMLElement);

  gsap.from(validElements, {
    y: 50,
    opacity: 0,
    duration: 1,
    ease: "power3.out",
    stagger: 0.2,
  });
};