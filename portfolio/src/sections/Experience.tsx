import Link from "next/link";
import { Card } from "@/components/Card";
import ArrowRight from "@/assets/icons/arrow-right.svg";

const allExperiences = [
  {
    title: "Software Engineering Intern",
    company: "Fisher Investments",
    period: "Summer 2024",
    description: "Developed internal tooling and automation systems for financial data processing. Implemented ML pipelines for risk assessment and built dashboards for portfolio analytics.",
    tech: ["Python", "Java", "SQL", "AWS"],
    featured: true,
  },
  {
    title: "Software Engineering Intern",
    company: "A10 Networks",
    period: "Summer 2023",
    description: "Worked on network security products and contributed to backend services. Optimized packet processing algorithms and improved system throughput.",
    tech: ["Go", "C", "Python", "Linux"],
    featured: true,
  },
  {
    title: "Research Assistant",
    company: "University ML Lab",
    period: "2023 - 2024",
    description: "Conducted research on speaker identification using deep learning. Published paper on neural network architectures for audio processing.",
    tech: ["Python", "PyTorch", "TensorFlow", "Research"],
    featured: true,
  },
  {
    title: "Teaching Assistant",
    company: "University CS Department",
    period: "2022 - 2023",
    description: "Led weekly sessions for 50+ students in data structures and algorithms. Created supplementary materials and held office hours.",
    tech: ["Python", "C", "Java", "Teaching"],
    featured: false,
  },
  {
    title: "Freelance Developer",
    company: "Self-Employed",
    period: "2021 - Present",
    description: "Built web applications and automation tools for clients. Delivered projects on time and under budget.",
    tech: ["React", "Node.js", "Python", "Full Stack"],
    featured: false,
  },
];

type ExperienceSectionProps = {
  fullPage?: boolean;
};

export const ExperienceSection = ({ fullPage = false }: ExperienceSectionProps) => {
  const experiences = fullPage ? allExperiences : allExperiences.filter(e => e.featured);

  return (
    <section id="experience" className="py-20 relative">
      <div className="container relative z-10">
        <div className="flex items-center justify-between mb-16">
          <h2 className="text-4xl md:text-5xl font-bold animate-on-scroll">
            {fullPage ? "All Experience" : "Experience"}
          </h2>
          {!fullPage && (
            <Link 
              href="/experience"
              className="hidden md:inline-flex items-center gap-2 px-4 py-1.5 text-sm font-medium text-black/60 hover:underline"
            >
              View All
              <ArrowRight className="size-4"/>
            </Link>
          )}
        </div>
        
        <div className="relative max-w-3xl mx-auto">
          <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-px bg-black/10 md:transform md:-translate-x-px" />
          
          {experiences.map((exp, index) => (
            <div 
              key={`${exp.company}-${exp.period}`} 
              className="relative pl-8 md:pl-0 mb-12 last:mb-0 animate-on-scroll"
              style={{ animationDelay: `${index * 150}ms` }}
            >
              <div className="absolute left-0 md:left-1/2 w-4 h-4 bg-white border-2 border-black rounded-full transform -translate-x-1/2 mt-6" />
              
              <div className={`md:w-[calc(50%-2rem)] ${index % 2 === 0 ? 'md:mr-auto md:pr-8' : 'md:ml-auto md:pl-8'}`}>
                <Card className="p-6 hover:shadow-lg transition-shadow duration-300">
                  <div className="flex flex-col gap-1 mb-3">
                    <span className="text-sm text-black/50">{exp.period}</span>
                    <h3 className="text-xl font-bold">{exp.title}</h3>
                    <span className="text-black/60 font-medium">{exp.company}</span>
                  </div>
                  
                  <p className="text-black/60 mb-4">{exp.description}</p>
                  
                  <div className="flex flex-wrap gap-2">
                    {exp.tech.map((t) => (
                      <span 
                        key={t}
                        className="px-3 py-1 text-xs font-medium bg-black/5 rounded-full"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </Card>
              </div>
            </div>
          ))}
        </div>
        
        {!fullPage && (
          <div className="mt-8 text-center md:hidden">
            <Link 
              href="/experience"
              className="inline-flex items-center gap-2 px-4 py-1.5 text-sm font-medium text-black/60 hover:underline"
            >
              View All Experience
              <ArrowRight className="size-4" />
            </Link>
          </div>
        )}
      </div>
    </section>
  );
};
