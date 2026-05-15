"use client";
import { useState } from "react";
import ArrowUpRight from "@/assets/icons/arrow-up-right.svg";

const projects = [
  {
    year: "2026",
    title: "Snag",
    description: "",
    link: "",
    tags: [],
  },
  {
    year: "2026",
    title: "Verdict",
    description: "",
    link: "",
    tags: [],
  },
  {
    year: "2026",
    title: "Agentic Code Reviewer",
    description:
      "Multi-agent code review system built on Cloudflare Workers AI. Six specialized agents run in parallel using ReAct loops and tool calls, coordinated via Cloudflare Workflows with durable per-step retries and cross-agent messaging. Maintains persistent review history per repository with conversational follow-up.",
    link: "https://github.com/Jeffrey-F-Guo/cf_ai_prism",
    tags: ["TypeScript", "Cloudflare Workers", "React", "PostgreSQL"],
  },
  {
    year: "2026",
    title: "TCP Load Testing Engine",
    description:
      "High-throughput TCP load testing engine built from the socket layer. Concurrent C server using a mutex/condvar ring buffer across ten worker threads, a Python load generator with exponential interarrival times, and a custom 18-byte binary protocol with manual serialization.",
    link: "https://github.com/Jeffrey-F-Guo",
    tags: ["C", "Python", "Systems"],
  },
  {
    year: "2025",
    title: "Multiplexed Chatroom in C",
    description: "",
    link: "",
    tags: [],
  },
  {
    year: "2025",
    title: "Custom Java DBMS",
    description: "",
    link: "",
    tags: [],
  },
  {
    year: "2025",
    title: "Serverless Receipt Scanner",
    description:
      "Serverless receipt processing pipeline with no persistent backend. S3 presigned URLs for direct browser-to-cloud uploads, AWS Textract with Pydantic validation for structured data extraction, and a WebSocket connection supporting 50 concurrent uploads.",
    link: "https://github.com/Jeffrey-F-Guo/receipt-scanner",
    tags: ["TypeScript", "React", "AWS", "Python"],
  },
];

export const ProjectsSection = () => {
  const [expanded, setExpanded] = useState<Set<string>>(new Set());

  const toggle = (title: string) =>
    setExpanded((prev) => {
      const next = new Set(prev);
      next.has(title) ? next.delete(title) : next.add(title);
      return next;
    });

  return (
    <section id="projects" className="py-14">
      <div className="container max-w-3xl">
        <div className="flex items-center gap-3 mb-7 animate-on-scroll">
          <span className="font-mono text-xs text-black/35">[01]</span>
          <span className="font-mono text-xs font-semibold uppercase tracking-widest text-black/35">
            Projects
          </span>
          <div className="flex-1 border-t border-black/10" />
        </div>

        <div>
          {[...projects].sort((a, b) => Number(b.year) - Number(a.year)).map((project) => (
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

                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={(e) => e.stopPropagation()}
                  className="text-black/20 hover:text-black transition-colors shrink-0"
                >
                  <ArrowUpRight className="size-3.5" />
                </a>
              </div>

              {expanded.has(project.title) && (
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
