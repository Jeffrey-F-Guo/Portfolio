"use client";
import { useEffect, useState, useRef } from "react";

interface Blob {
  x: number;
  y: number;
  vx: number;
  vy: number;
  size: number;
  hue: number;
  opacity: number;
}

export function GlowingOrbs() {
  const [mounted, setMounted] = useState(false);
  const [blobs, setBlobs] = useState<Blob[]>([]);
  const containerRef = useRef<HTMLDivElement>(null);
  const animationRef = useRef<number>();
  const timeRef = useRef(0);

  useEffect(() => {
    setMounted(true);
    
    const initialBlobs: Blob[] = Array.from({ length: 8 }, (_, i) => ({
      x: Math.random() * window.innerWidth,
      y: Math.random() * window.innerHeight,
      vx: (Math.random() - 0.5) * 3,
      vy: (Math.random() - 0.5) * 3,
      size: 56 + Math.random() * 280,
      hue: 200 + Math.random() * 50,
      opacity: 0.15 + Math.random() * 0.15,
    }));
    
    setBlobs(initialBlobs);

    const animate = () => {
      timeRef.current += 1;
      
      const updatedBlobs = initialBlobs.map((blob) => {
        const updated = { ...blob };
        
        updated.x += updated.vx;
        updated.y += updated.vy;
        
        if (timeRef.current % 120 === 0) {
          updated.vx += (Math.random() - 0.5) * 0.8;
          updated.vy += (Math.random() - 0.5) * 0.8;
          const speed = Math.sqrt(updated.vx * updated.vx + updated.vy * updated.vy);
          if (speed > 4) {
            updated.vx = (updated.vx / speed) * 4;
            updated.vy = (updated.vy / speed) * 4;
          }
        }
        
        const margin = 150;
        if (updated.x < margin) { updated.x = margin; updated.vx *= -0.8; }
        if (updated.x > window.innerWidth - margin) { updated.x = window.innerWidth - margin; updated.vx *= -0.8; }
        if (updated.y < margin) { updated.y = margin; updated.vy *= -0.8; }
        if (updated.y > window.innerHeight - margin) { updated.y = window.innerHeight - margin; updated.vy *= -0.8; }
        
        return updated;
      });
      
      initialBlobs.splice(0, initialBlobs.length, ...updatedBlobs);
      setBlobs([...updatedBlobs]);
      
      animationRef.current = requestAnimationFrame(animate);
    };

    animationRef.current = requestAnimationFrame(animate);

    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, []);

  if (!mounted) return null;

  return (
    <div ref={containerRef} className="fixed inset-0 pointer-events-none overflow-hidden" style={{ zIndex: 0 }}>
      <svg className="absolute inset-0 w-full h-full" preserveAspectRatio="xMidYMid slice">
        <defs>
          <filter id="blob-glow" x="-100%" y="-100%" width="300%" height="300%">
            <feGaussianBlur in="SourceGraphic" stdDeviation="20" />
          </filter>
        </defs>
        
        <g style={{ mixBlendMode: 'screen' }}>
        {blobs.map((blob, i) => (
          <circle
            key={i}
            cx={blob.x}
            cy={blob.y}
            r={blob.size}
            fill={`hsl(${blob.hue}, 70%, 60%)`}
            opacity={blob.opacity}
            filter="url(#blob-glow)"
          />
        ))}
        </g>
      </svg>
    </div>
  );
}
