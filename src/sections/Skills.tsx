const skillGroups = [
  {
    label: "Languages",
    items: ["Python", "TypeScript", "JavaScript", "C/C++", "Golang", "C#", "Java", "PostgreSQL"],
  },
  {
    label: "Cloud & DevOps",
    items: ["Cloudflare", "AWS", "Azure", "Docker", "Linux/Unix", "CI/CD", "Git"],
  },
  {
    label: "Frameworks",
    items: ["FastAPI", "Flask", "React.js", "Next.js", "Node.js"],
  },
  {
    label: "ML / AI",
    items: ["PyTorch", "LLM Systems", "Agentic AI", "RAG", "NumPy"],
  },
];

export const SkillsSection = () => {
  return (
    <section id="skills" className="py-14 border-t border-black/8">
      <div className="container max-w-3xl">
        <div className="flex items-center gap-3 mb-7 animate-on-scroll">
          <span className="font-mono text-xs text-black/35">[03]</span>
          <span className="font-mono text-xs font-semibold uppercase tracking-widest text-black/35">
            Skills
          </span>
          <div className="flex-1 border-t border-black/10" />
        </div>

        <div className="flex flex-col gap-4">
          {skillGroups.map((group) => (
            <div key={group.label} className="flex gap-8 animate-on-scroll">
              <span className="font-mono text-xs text-black/30 w-20 shrink-0 pt-0.5">
                {group.label}
              </span>
              <p className="text-sm text-black/65 leading-relaxed">
                {group.items.join(" · ")}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
