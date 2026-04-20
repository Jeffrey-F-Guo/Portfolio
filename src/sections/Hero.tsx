"use client";
import { Scroll } from "@/components/ScrollToElement";

export const HeroSection = () => {
  return (
    <section id="home" className="relative min-h-[88vh] flex items-center overflow-hidden">
      {/* Watermark */}
      <div className="absolute inset-0 flex items-center justify-start pointer-events-none select-none overflow-hidden">
        <span className="font-bold text-[22vw] leading-none text-black opacity-[0.025] -ml-2">
          JG
        </span>
      </div>

      <div className="container max-w-3xl relative z-10">
        <div className="flex flex-col gap-5">
          <p className="font-mono text-xs text-black/40 animate-fade-in">
            [ Backend &amp; AI Engineer ]
          </p>

          <h1 className="text-5xl md:text-6xl font-bold tracking-tight animate-fade-in delay-100">
            Jeffrey Guo<span className="cursor font-mono font-light text-black/50 ml-1">_</span>
          </h1>

          <p className="text-base text-black/55 max-w-xl leading-relaxed animate-fade-in delay-200">
            CS student at{" "}
            <span className="text-black font-medium">WWU</span>.
            {" "}Somehow ended up co-authoring a NeurIPS &apos;25 paper.
            Previously at{" "}
            <span className="text-black font-medium">Fisher Investments</span>,
            heading to <span className="text-black font-medium">A10 Networks</span> this summer.
          </p>

          <div className="flex items-center gap-6 text-sm animate-fade-in delay-300">
            <button
              onClick={() => Scroll("projects")}
              className="font-mono text-xs text-black underline underline-offset-4 decoration-black/30 hover:decoration-black transition-all"
            >
              view projects →
            </button>
            <a
              href="mailto:jeffrey.guo00703@gmail.com"
              className="font-mono text-xs text-black/40 hover:text-black transition-colors"
            >
              get in touch
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
