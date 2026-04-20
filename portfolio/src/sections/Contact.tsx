export const ContactSection = () => {
  return (
    <section id="contact" className="py-14 border-t border-black/8">
      <div className="container max-w-3xl">
        <div className="flex items-center gap-3 mb-7 animate-on-scroll">
          <span className="font-mono text-xs text-black/35">[04]</span>
          <span className="font-mono text-xs font-semibold uppercase tracking-widest text-black/35">
            Contact
          </span>
          <div className="flex-1 border-t border-black/10" />
        </div>

        <div className="flex flex-col gap-4 animate-on-scroll">
          <p className="text-sm text-black/50 max-w-sm leading-relaxed">
            Open to interesting problems. I also reply faster than most people expect.
          </p>

          <div className="flex flex-wrap gap-6 mt-1">
            <a
              href="mailto:jeffrey.guo00703@gmail.com"
              className="font-mono text-xs text-black underline underline-offset-4 decoration-black/30 hover:decoration-black transition-all"
            >
              jeffrey.guo00703@gmail.com
            </a>
            <a
              href="https://github.com/Jeffrey-F-Guo"
              target="_blank"
              rel="noopener noreferrer"
              className="font-mono text-xs text-black/40 hover:text-black transition-colors"
            >
              github
            </a>
            <a
              href="https://www.linkedin.com/in/jeffrey-f-guo"
              target="_blank"
              rel="noopener noreferrer"
              className="font-mono text-xs text-black/40 hover:text-black transition-colors"
            >
              linkedin
            </a>
            <a
              href="#"
              className="font-mono text-xs text-black/40 hover:text-black transition-colors"
            >
              resume
            </a>
          </div>
        </div>

        <p className="mt-16 font-mono text-xs text-black/20">
          © {new Date().getFullYear()} Jeffrey Guo
        </p>
      </div>
    </section>
  );
};
