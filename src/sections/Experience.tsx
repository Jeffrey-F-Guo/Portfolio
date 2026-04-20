"use client";
import { useState } from "react";
import ArrowRight from "@/assets/icons/arrow-right.svg";

const allExperiences = [
  {
    period: "Jun – Sep 2026",
    role: "Software Engineer Intern",
    company: "A10 Networks",
    location: "San Jose, CA",
    description:
      "Incoming SWE intern on the AI-Application Delivery Controller team.",
    tech: ["Go", "C", "AI/ML", "Networking"],
    featured: true,
  },
  {
    period: "Jul – Nov 2025",
    role: "Machine Learning Researcher",
    company: "Algoverse",
    location: "Remote",
    description:
      "Second author on long-context agentic LLM systems research accepted to NeurIPS 2025 Responsible Foundation Models Workshop. Reduced hallucination rates from 52% to 6.8% by building a hierarchical memory store to enforce accurate state management across long-context sessions.",
    tech: ["Python", "PyTorch", "LLMs", "Research"],
    featured: true,
  },
  {
    period: "Jun – Aug 2025",
    role: "Software Engineer Intern",
    company: "Fisher Investments",
    location: "Camas, WA",
    description:
      "Orchestrated a Salesforce ETL pipeline to migrate 2M+ datapoints, achieving millions of records/hour throughput and eliminating 15 hours of weekly manual processing. Optimized average data query time by 90% by unifying 6 isolated datasets into a single data model. Constructed a serverless ingestion architecture using C# Azure Functions with Microsoft Defender integration for real-time malware scanning.",
    tech: ["C#", "Azure", "Python", "SQL", "Salesforce"],
    featured: true,
  },
];

type ExperienceSectionProps = {
  fullPage?: boolean;
};

export const ExperienceSection = ({ fullPage = false }: ExperienceSectionProps) => {
  const [expanded, setExpanded] = useState<string | null>(null);
  const experiences = fullPage
    ? allExperiences
    : allExperiences.filter((e) => e.featured);

  const toggle = (key: string) =>
    setExpanded((prev) => (prev === key ? null : key));

  return (
    <section id="experience" className="py-14 border-t border-black/8">
      <div className="container max-w-3xl">
        <div className="flex items-center gap-3 mb-7 animate-on-scroll">
          <span className="font-mono text-xs text-black/35">[02]</span>
          <span className="font-mono text-xs font-semibold uppercase tracking-widest text-black/35">
            {fullPage ? "All Experience" : "Experience"}
          </span>
          <div className="flex-1 border-t border-black/10" />
        </div>

        <div>
          {experiences.map((exp) => {
            const key = `${exp.company}-${exp.period}`;
            return (
              <div
                key={key}
                className="border-t border-black/8 last:border-b border-l-2 border-l-transparent hover:border-l-black transition-colors"
              >
                <div
                  onClick={() => toggle(key)}
                  className="flex items-center gap-4 py-3 cursor-pointer hover:bg-black/[0.015] group px-3"
                >
                  <span className="font-mono text-xs text-black/30 w-24 shrink-0">
                    {exp.period}
                  </span>

                  <span className="font-medium text-sm flex-1 min-w-0 group-hover:underline underline-offset-4 decoration-black/25">
                    {exp.company}
                  </span>

                  <span className="text-xs text-black/40 shrink-0 hidden sm:block">
                    {exp.role}
                  </span>

                  <ArrowRight
                    className={`size-3 text-black/20 shrink-0 transition-transform duration-150 ${
                      expanded === key ? "rotate-90" : ""
                    }`}
                  />
                </div>

                {expanded === key && (
                  <div className="pb-4 px-3 pl-14 animate-fade-in">
                    <p className="text-xs text-black/30 font-mono mb-2">{exp.location}</p>
                    <p className="text-sm text-black/50 leading-relaxed mb-3">
                      {exp.description}
                    </p>
                    <div className="flex flex-wrap gap-1.5">
                      {exp.tech.map((t) => (
                        <span
                          key={t}
                          className="font-mono text-xs border border-black/12 rounded-sm px-1.5 py-0.5 text-black/40"
                        >
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
