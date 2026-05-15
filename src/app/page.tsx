"use client";
import { useState, useEffect } from "react";
import { Header } from "@/sections/Header";
import { HeroSection } from "@/sections/Hero";
import { ProjectsSection } from "@/sections/Projects";
import { ExperienceSection } from "@/sections/Experience";
import { SkillsSection } from "@/sections/Skills";
import { ContactSection } from "@/sections/Contact";
import { ScrollAnimator } from "@/components/ScrollAnimator";
import { DraggableSticker } from "@/components/DraggableSticker";

const STICKER_CATALOG = [
  { id: "gojocat", src: "/stickers/gojocat.png", width: 56,  rotation: 180,
    defaultPos: () => ({ x: window.innerWidth - 130, y: 90 }) },
  { id: "smiski",  src: "/stickers/smiski.png",  width: 112, rotation: -5,
    defaultPos: () => ({ x: window.innerWidth - 140, y: window.innerHeight - 170 }) },
  { id: "mofucat", src: "/stickers/mofucat.png", width: 80,  rotation: -6,
    defaultPos: () => ({ x: window.innerWidth / 2 - 40, y: 90 }) },
];

// ── Links panel ────────────────────────────────────────────────────────────────

const LINKS = [
  { label: "email",    value: "jeffrey.guo00703@gmail.com" },
  { label: "github",   value: "https://github.com/Jeffrey-F-Guo" },
  { label: "linkedin", value: "https://www.linkedin.com/in/jeffrey-f-guo" },
  { label: "resume",   value: "/Jeffrey_Guo_Resume.pdf", open: true },
];

const LinksPanel = () => {
  const [open, setOpen] = useState(false);
  const [copied, setCopied] = useState<string | null>(null);

  const copy = (value: string) => {
    navigator.clipboard.writeText(value);
    setCopied(value);
    setTimeout(() => setCopied(null), 1500);
  };

  return (
    <div className="fixed bottom-5 right-5 z-50 flex flex-col items-end gap-2">
      {open && (
        <div className="bg-white border border-black/10 rounded-xl shadow-sm p-4 flex flex-col gap-3 w-72">
          {LINKS.map(({ label, value, open: isLink }) => (
            <div key={label} className="flex items-center justify-between gap-3">
              <div className="flex flex-col min-w-0">
                <span className="font-mono text-xs text-black/30">{label}</span>
                <span className="font-mono text-xs text-black/70 truncate">{value}</span>
              </div>
              {isLink ? (
                <a
                  href={value}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-mono text-xs text-black/30 hover:text-black transition-colors shrink-0"
                >
                  open
                </a>
              ) : (
                <button
                  onClick={() => copy(value)}
                  className="font-mono text-xs text-black/30 hover:text-black transition-colors shrink-0"
                >
                  {copied === value ? "copied" : "copy"}
                </button>
              )}
            </div>
          ))}
        </div>
      )}
      <button
        onClick={() => setOpen(v => !v)}
        className="font-mono text-xs text-black/20 hover:text-black/50 transition-colors"
      >
        {open ? "close" : "links"}
      </button>
    </div>
  );
};

// ── Sticker bank ───────────────────────────────────────────────────────────────

type BankDrag = { id: string; x: number; y: number; width: number };

type StickersBankProps = {
  activeStickers: Set<string>;
  onAdd: (id: string, x: number, y: number, width: number) => void;
};

const StickersBank = ({ activeStickers, onAdd }: StickersBankProps) => {
  const [open, setOpen] = useState(false);
  const [bankDrag, setBankDrag] = useState<BankDrag | null>(null);

  useEffect(() => {
    if (!bankDrag) return;
    const onMove = (e: MouseEvent) =>
      setBankDrag(d => d ? { ...d, x: e.clientX, y: e.clientY } : null);
    const onUp = (e: MouseEvent) => {
      onAdd(bankDrag.id, e.clientX, e.clientY, bankDrag.width);
      setBankDrag(null);
    };
    window.addEventListener("mousemove", onMove);
    window.addEventListener("mouseup", onUp);
    return () => {
      window.removeEventListener("mousemove", onMove);
      window.removeEventListener("mouseup", onUp);
    };
  }, [bankDrag]);

  const ghostSrc = bankDrag ? STICKER_CATALOG.find(s => s.id === bankDrag.id)?.src : undefined;

  return (
    <>
      {bankDrag && ghostSrc && (
        <img
          src={ghostSrc}
          alt=""
          aria-hidden
          style={{
            position: "fixed",
            left: bankDrag.x - bankDrag.width / 2,
            top: bankDrag.y - bankDrag.width / 2,
            width: bankDrag.width,
            opacity: 0.75,
            pointerEvents: "none",
            zIndex: 9999,
            transform: "scale(1.07)",
            filter: "drop-shadow(4px 8px 14px rgba(0,0,0,0.22))",
          }}
        />
      )}

      <div className="fixed bottom-14 right-5 z-50 flex flex-col items-end gap-2">
        {open && (
          <div className="bg-white border border-black/10 rounded-xl shadow-sm p-4 grid grid-cols-3 gap-3 w-56">
            {STICKER_CATALOG.map(s => {
              const active = activeStickers.has(s.id);
              return (
                <div key={s.id} className="flex flex-col items-center gap-1">
                  <img
                    src={s.src}
                    alt={s.id}
                    draggable={false}
                    style={{
                      width: 48,
                      opacity: active ? 0.3 : 1,
                      cursor: active ? "default" : "grab",
                      userSelect: "none",
                    }}
                    onMouseDown={active ? undefined : (e) => {
                      e.preventDefault();
                      setBankDrag({ id: s.id, x: e.clientX, y: e.clientY, width: s.width });
                    }}
                  />
                  <span className="font-mono text-xs text-black/30">
                    {active ? "on page" : s.id}
                  </span>
                </div>
              );
            })}
          </div>
        )}
        <button
          onClick={() => setOpen(v => !v)}
          className="font-mono text-xs text-black/20 hover:text-black/50 transition-colors"
        >
          {open ? "close" : "stickers"}
        </button>
      </div>
    </>
  );
};

// ── Home ───────────────────────────────────────────────────────────────────────

export default function Home() {
  const [stickersVisible, setStickersVisible] = useState(false);
  const [activeStickers, setActiveStickers] = useState<Set<string>>(
    new Set(["gojocat", "smiski", "mofucat"])
  );

  const removeSticker = (id: string) => setActiveStickers(prev => {
    const next = new Set(prev);
    next.delete(id);
    return next;
  });

  const addSticker = (id: string, x: number, y: number, width: number) => {
    localStorage.setItem(`sticker-${id}`, JSON.stringify({ x: x - width / 2, y: y - width / 2 }));
    setActiveStickers(prev => new Set(Array.from(prev).concat(id)));
  };

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

      {stickersVisible && STICKER_CATALOG.map(s =>
        activeStickers.has(s.id) && (
          <DraggableSticker
            key={s.id}
            src={s.src}
            storageKey={`sticker-${s.id}`}
            defaultPos={s.defaultPos}
            width={s.width}
            rotation={s.rotation}
            onDelete={() => removeSticker(s.id)}
          />
        )
      )}

      <StickersBank activeStickers={activeStickers} onAdd={addSticker} />
      <LinksPanel />

      <div className="fixed bottom-5 left-5 z-50 flex gap-4">
        <button
          onClick={() => setStickersVisible(v => !v)}
          className="font-mono text-xs text-black/20 hover:text-black/50 transition-colors"
        >
          {stickersVisible ? "hide stickers" : "show stickers"}
        </button>
      </div>
    </div>
  );
}
