"use client";
import { useEffect, useRef } from "react";

export function ScrollAnimator() {
  useEffect(() => {
    const animateSkillBars = (element: Element) => {
      const skillBars = element.querySelectorAll(".skill-bar");
      skillBars.forEach((bar) => {
        const parent = bar.parentElement?.parentElement;
        const progress = parent?.querySelector("span:last-child")?.textContent;
        if (progress && bar instanceof HTMLElement) {
          const width = parseInt(progress);
          bar.style.width = `${width}%`;
        }
      });
    };

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
            animateSkillBars(entry.target);
          }
        });
      },
      { threshold: 0.1, rootMargin: "0px 0px -50px 0px" }
    );

    const elements = document.querySelectorAll(".animate-on-scroll");
    
    elements.forEach((el) => {
      const rect = el.getBoundingClientRect();
      if (rect.top < window.innerHeight) {
        el.classList.add("visible");
        animateSkillBars(el);
      }
      observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  return null;
}
