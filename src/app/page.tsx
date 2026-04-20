"use client";
import { useState } from "react";
import { Header } from "@/sections/Header";
import { HeroSection } from "@/sections/Hero";
import { ProjectsSection } from "@/sections/Projects";
import { ExperienceSection } from "@/sections/Experience";
import { SkillsSection } from "@/sections/Skills";
import { ContactSection } from "@/sections/Contact";
import { ScrollAnimator } from "@/components/ScrollAnimator";
import { DraggableSticker } from "@/components/DraggableSticker";

export default function Home() {
  const [stickersVisible, setStickersVisible] = useState(true);
  const [gojocatPinned, setGojocatPinned] = useState(true);
  const [smiskiPinned, setSmiskiPinned] = useState(true);

  const allPinned = gojocatPinned && smiskiPinned;

  return (
    <div>
      <ScrollAnimator />
      <Header />
      <main>
        <HeroSection />
        <ProjectsSection />
        <ExperienceSection />
        <SkillsSection />
        <ContactSection />
      </main>

      {stickersVisible && (
        <DraggableSticker
          src="/stickers/gojocat.png"
          storageKey="sticker-gojocat"
          defaultPos={() => ({ x: window.innerWidth - 130, y: 90 })}
          width={56}
          rotation={180}
          pinned={gojocatPinned}
          onTogglePin={() => setGojocatPinned(v => !v)}
        />
      )}
      {stickersVisible && (
        <DraggableSticker
          src="/stickers/smiski.png"
          storageKey="sticker-smiski"
          defaultPos={() => ({ x: window.innerWidth - 140, y: window.innerHeight - 170 })}
          width={112}
          rotation={-5}
          pinned={smiskiPinned}
          onTogglePin={() => setSmiskiPinned(v => !v)}
        />
      )}

      <div className="fixed bottom-5 left-5 z-50 flex gap-4">
        <button
          onClick={() => setStickersVisible(v => !v)}
          className="font-mono text-xs text-black/20 hover:text-black/50 transition-colors"
        >
          {stickersVisible ? "hide stickers" : "show stickers"}
        </button>
        {stickersVisible && (
          <button
            onClick={() => { setGojocatPinned(!allPinned); setSmiskiPinned(!allPinned); }}
            className="font-mono text-xs text-black/20 hover:text-black/50 transition-colors"
          >
            {allPinned ? "unpin all" : "pin all"}
          </button>
        )}
      </div>
    </div>
  );
}
