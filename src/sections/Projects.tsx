"use client";
import { useState } from "react";
import ArrowUpRight from "@/assets/icons/arrow-up-right.svg";
import ArrowRight from "@/assets/icons/arrow-right.svg";

const allProjects = [
  {
    year: "2026",
    title: "Agentic Code Reviewer",
    description:
      "Six AI agents reviewing your PRs in parallel. ReAct loops, tool calls, Cloudflare Workflows with durable per-step retries, and cross-agent messaging. Persists review history per repo and does conversational follow-up. Works better than I expected it to.",
    metric: "6 parallel agents",
    link: "https://github.com/Jeffrey-F-Guo/cf_ai_prism",
    tags: ["TypeScript", "Cloudflare Workers", "React", "PostgreSQL"],
    featured: true,
  },
  {
    year: "2026",
    title: "TCP Load Testing Engine",
    description:
      "Wanted to understand what actually happens at the socket layer. Turns out: a lot. Concurrent C server with a mutex/condvar ring buffer across ten worker threads, a Python load generator with exponential interarrival times, and a custom 18-byte binary protocol with manual serialization.",
    metric: "10 worker threads",
    link: "https://github.com/Jeffrey-F-Guo",
    tags: ["C", "Python", "FastAPI", "Systems"],
    featured: true,
  },
  {
    year: "2025",
    title: "Serverless Receipt Scanner",
    description:
      "Point, scan, done — no backend running 24/7. S3 presigned URLs for direct browser-to-cloud storage, Textract with Pydantic validation for structured extraction, and a single WebSocket connection handling 50 uploads simultaneously. No polling.",
    metric: "50 concurrent uploads",
    link: "https://github.com/Jeffrey-F-Guo/receipt-scanner",
    tags: ["TypeScript", "React", "AWS", "Python"],
    featured: true,
  },
  {
    year: "2025",
    title: "Long-Context LLM Research (NeurIPS '25)",
    description:
      "Built a hierarchical memory store that cut hallucination rates from 52% to 6.8% in long-context agentic sessions. Accepted to NeurIPS 2025 Responsible Foundation Models Workshop. Second author.",
    metric: "52% → 6.8% hallucination",
    link: "https://github.com/Jeffrey-F-Guo/SJ-OANT",
    tags: ["Python", "LLMs", "Research"],
    featured: false,
  },
  {
    year: "2024",
    title: "PathForge",
    description:
      "Won Best Use of Cloudflare AI at DubHacks 2024. Built fast enough that we weren't sure it would hold together — it did.",
    metric: "Best Use of CF AI",
    link: "https://github.com/Jeffrey-F-Guo/PathForge",
    tags: ["TypeScript", "Cloudflare", "AI"],
    featured: false,
  },
];

type ProjectsSectionProps = {
  fullPage?: boolean;
};

export const ProjectsSection = ({ fullPage = false }: ProjectsSectionProps) => {
  const [expanded, setExpanded] = useState<string | null>(null);
  const projects = fullPage ? allProjects : allProjects.filter((p) => p.featured);

  const toggle = (title: string) =>
    setExpanded((prev) => (prev === title ? null : title));

  return (
    <section id="projects" className="py-14">
      <div className="container max-w-3xl">
        <div className="flex items-center gap-3 mb-7 animate-on-scroll">
          <span className="font-mono text-xs text-black/35">[01]</span>
          <span className="font-mono text-xs font-semibold uppercase tracking-widest text-black/35">
            {fullPage ? "All Projects" : "Projects"}
          </span>
          <div className="flex-1 border-t border-black/10" />
          {!fullPage && (
            <a
              href="/projects"
              className="font-mono text-xs text-black/30 hover:text-black transition-colors flex items-center gap-1"
            >
              all <ArrowRight className="size-3" />
            </a>
          )}
        </div>

        <div>
          {projects.map((project) => (
            <div
              key={project.title}
              className="border-t border-black/8 last:border-b border-l-2 border-l-transparent hover:border-l-black transition-colors"
            >
              <div
                onClick={() => toggle(project.title)}
                className="flex items-center gap-4 py-3 cursor-pointer hover:bg-black/[0.015] group px-3"
              >
                <span className="font-mono text-xs text-black/30 w-8 shrink-0 tabular-nums">
                  {project.year}
                </span>

                <span className="font-medium text-sm flex-1 min-w-0 group-hover:underline underline-offset-4 decoration-black/25">
                  {project.title}
                </span>

                <div className="hidden md:flex items-center gap-1.5 shrink-0">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="font-mono text-xs border border-black/12 rounded-sm px-1.5 py-0.5 text-black/40"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <span className="font-mono text-xs text-black/35 shrink-0 hidden sm:block w-32 text-right">
                  {project.metric}
                </span>

                <div className="flex items-center gap-2 shrink-0">
                  <ArrowRight
                    className={`size-3 text-black/20 transition-transform duration-150 ${
                      expanded === project.title ? "rotate-90" : ""
                    }`}
                  />
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={(e) => e.stopPropagation()}
                    className="text-black/20 hover:text-black transition-colors"
                  >
                    <ArrowUpRight className="size-3.5" />
                  </a>
                </div>
              </div>

              {expanded === project.title && (
                <div className="pb-4 px-3 pl-14 animate-fade-in">
                  <p className="text-sm text-black/50 leading-relaxed mb-3">
                    {project.description}
                  </p>
                  <div className="flex gap-1.5 flex-wrap md:hidden">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="font-mono text-xs border border-black/12 rounded-sm px-1.5 py-0.5 text-black/40"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
