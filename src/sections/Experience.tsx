"use client";
import { useState } from "react";
import ArrowRight from "@/assets/icons/arrow-right.svg";

const experiences = [
  {
    period: "Jun 2026 – Present",
    role: "Software Engineer Intern",
    company: "A10 Networks",
    location: "San Jose, CA",
    description:
      "Incoming SWE intern on the AI-Application Delivery Controller team.",
    tech: ["Python", "C", "AI/ML", "Networking"],
  },
  {
    period: "May 2025 – Present",
    role: "Robotics Researcher",
    company: "MRRP Lab (WWU)",
    location: "Bellingham, WA",
    description:
      "Building a decentralized coordination system for drone swarms. Motivated by bringing autonomous campus delivery to WWU. Each drone runs the full coordination stack independently — leader election, failure detection, and formation control peer-to-peer over a bandwidth-constrained radio link. Implemented in ROS2 on Crazyflie hardware.",
    tech: ["Python", "ROS2", "C++"],
  },
  {
    period: "Sept 2024 – Present",
    role: "Computational Neuroscience Researcher",
    company: "Glomerulus Research Lab (WWU)",
    location: "Bellingham, WA",
    description:
      "Led computational development of a hippocampal seizure model in Brian2 as the primary contributor, with simulation results matching experimental data from the Kaplan Lab @ WWU. Owned model visualization (raster plots, LFP signals, neuron spikes), synchrony metric development involving signal processing (autocorrelation, Kuramoto Order Parameter), and data processing. Reduced simulation memory footprint from 7GB to 100KB by precomputing and persisting only derived metrics post-simulation.",
    tech: ["Python", "Numpy", "Brian2 Simulator"],
  },
  {
    period: "Jul 2025 – Nov 2025",
    role: "Machine Learning Researcher",
    company: "Algoverse",
    location: "Remote",
    description:
      "Second author on long-context agentic LLM systems research accepted to NeurIPS 2025 Responsible Foundation Models Workshop. Reduced hallucination rates from 52% to 6.8% by building a hierarchical memory store to enforce accurate state management across long-context sessions.",
    tech: ["Python", "LangChain", "LLMs", "Hugging Face"],
  },
  {
    period: "Jun 2025 – Aug 2025",
    role: "Software Engineer Intern",
    company: "Fisher Investments",
    location: "Camas, WA",
    description:
      "Designed and executed a full data migration of 2M+ data points from legacy Excel-based systems to Salesforce via nightly ETL pipeline, eliminating 15+ hours of weekly manual spreadsheet processing. Designed and implemented a Salesforce data model across 6 objects, replacing siloed spreadsheets to enable first-time campaign performance analysis and serve as the foundation for downstream marketing reporting. Constructed a serverless ingestion architecture using C# Azure Functions to handle secure PDF uploads, integrating Microsoft Defender for real-time malware scanning.",
    tech: ["C#", "Azure", "SQL", "Salesforce"],
  },
];

export const ExperienceSection = () => {
  const [expanded, setExpanded] = useState<Set<string>>(new Set());

  const toggle = (key: string) =>
    setExpanded((prev) => {
      const next = new Set(prev);
      next.has(key) ? next.delete(key) : next.add(key);
      return next;
    });

  return (
    <section id="experience" className="py-14 border-t border-black/8">
      <div className="container max-w-3xl">
        <div className="flex items-center gap-3 mb-7 animate-on-scroll">
          <span className="font-mono text-xs text-black/35">[02]</span>
          <span className="font-mono text-xs font-semibold uppercase tracking-widest text-black/35">
            Experience
          </span>
          <div className="flex-1 border-t border-black/10" />
        </div>

        <div>
          {[...experiences].sort((a, b) => {
            const aPresent = a.period.includes("Present");
            const bPresent = b.period.includes("Present");
            if (aPresent !== bPresent) return aPresent ? -1 : 1;
            return Number(b.period.match(/\d{4}/)?.[0]) - Number(a.period.match(/\d{4}/)?.[0]);
          }).map((exp) => {
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
                      expanded.has(key) ? "rotate-90" : ""
                    }`}
                  />
                </div>

                {expanded.has(key) && (
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
