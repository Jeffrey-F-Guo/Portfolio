"use client";
import { useState, useRef, useEffect } from "react";

interface Props {
  src: string;
  storageKey: string;
  defaultPos: () => { x: number; y: number };
  width: number;
  rotation: number;
  pinned?: boolean;
  onTogglePin?: () => void;
}

export const DraggableSticker = ({ src, storageKey, defaultPos, width, rotation, pinned = true, onTogglePin }: Props) => {
  const [pos, setPos] = useState<{ x: number; y: number } | null>(null);
  const [dragging, setDragging] = useState(false);
  const [hovered, setHovered] = useState(false);
  const offset = useRef({ x: 0, y: 0 });

  // Hydrate from localStorage or default position (client-only)
  useEffect(() => {
    const saved = localStorage.getItem(storageKey);
    if (saved) {
      try { setPos(JSON.parse(saved)); return; } catch {}
    }
    setPos(defaultPos());
  }, [storageKey]);

  // Persist on release
  useEffect(() => {
    if (dragging || !pos) return;
    localStorage.setItem(storageKey, JSON.stringify(pos));
  }, [dragging, pos, storageKey]);

  const scrollX = () => (pinned ? 0 : window.scrollX);
  const scrollY = () => (pinned ? 0 : window.scrollY);

  // Mouse drag
  const onMouseDown = (e: React.MouseEvent) => {
    e.preventDefault();
    setDragging(true);
    offset.current = { x: e.clientX + scrollX() - (pos?.x ?? 0), y: e.clientY + scrollY() - (pos?.y ?? 0) };
  };

  useEffect(() => {
    if (!dragging) return;
    const onMove = (e: MouseEvent) =>
      setPos({ x: e.clientX + scrollX() - offset.current.x, y: e.clientY + scrollY() - offset.current.y });
    const onUp = () => setDragging(false);
    window.addEventListener("mousemove", onMove);
    window.addEventListener("mouseup", onUp);
    return () => {
      window.removeEventListener("mousemove", onMove);
      window.removeEventListener("mouseup", onUp);
    };
  }, [dragging]);

  // Touch drag
  const onTouchStart = (e: React.TouchEvent) => {
    const t = e.touches[0];
    setDragging(true);
    offset.current = { x: t.clientX + scrollX() - (pos?.x ?? 0), y: t.clientY + scrollY() - (pos?.y ?? 0) };
  };

  useEffect(() => {
    if (!dragging) return;
    const onMove = (e: TouchEvent) => {
      e.preventDefault();
      const t = e.touches[0];
      setPos({ x: t.clientX + scrollX() - offset.current.x, y: t.clientY + scrollY() - offset.current.y });
    };
    const onUp = () => setDragging(false);
    window.addEventListener("touchmove", onMove, { passive: false });
    window.addEventListener("touchend", onUp);
    return () => {
      window.removeEventListener("touchmove", onMove);
      window.removeEventListener("touchend", onUp);
    };
  }, [dragging]);

  if (!pos) return null;

  return (
    <div
      onMouseDown={onMouseDown}
      onTouchStart={onTouchStart}
      onDoubleClick={onTogglePin}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        position: pinned ? "fixed" : "absolute",
        left: pos.x,
        top: pos.y,
        width: width,
        zIndex: dragging ? 9999 : 40,
        cursor: dragging ? "grabbing" : "grab",
        transform: `rotate(${dragging ? rotation + 4 : rotation}deg) scale(${dragging ? 1.07 : 1})`,
        filter: `drop-shadow(${dragging ? "4px 8px 14px rgba(0,0,0,0.22)" : "2px 4px 8px rgba(0,0,0,0.12)"})`,
        transition: dragging ? "none" : "transform 0.25s ease, filter 0.25s ease",
        userSelect: "none",
        WebkitUserSelect: "none",
      }}
    >
      <img
        src={src}
        alt=""
        aria-hidden
        draggable={false}
        style={{ width: "100%", display: "block" }}
      />

      {/* Pin indicator */}
      <div
        title={pinned ? "pinned · double-click to unpin" : "unpinned · double-click to pin"}
        style={{
          position: "absolute",
          top: -4,
          right: -4,
          width: 8,
          height: 8,
          borderRadius: "50%",
          background: pinned ? "rgba(0,0,0,0.45)" : "transparent",
          border: "1.5px solid rgba(0,0,0,0.3)",
          opacity: hovered || !pinned ? 1 : 0.4,
          transition: "opacity 0.2s, background 0.2s",
          pointerEvents: "none",
        }}
      />
    </div>
  );
};
