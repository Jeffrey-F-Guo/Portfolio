"use client";
import { useState, useEffect, useRef } from "react";

export function useActiveSection(sectionIds: string[]) {
  const [activeSection, setActiveSection] = useState<string>("home");
  const lockedUntil = useRef(0);

  const lockSection = (id: string) => {
    lockedUntil.current = Date.now() + 800;
    setActiveSection(id);
  };

  useEffect(() => {
    const handleScroll = () => {
      if (Date.now() < lockedUntil.current) return;

      const threshold = window.innerHeight / 3;
      let current = sectionIds[0];

      for (const id of sectionIds) {
        const el = document.getElementById(id);
        if (!el) continue;
        if (el.getBoundingClientRect().top <= threshold) {
          current = id;
        }
      }

      setActiveSection(current);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [sectionIds]);

  return { activeSection, lockSection };
}
