import Link from "next/link";
import darkSaasLandingPage from "@/assets/images/dark-saas-landing-page.png";
import lightSaasLandingPage from "@/assets/images/light-saas-landing-page.png";
import aiStartupLandingPage from "@/assets/images/ai-startup-landing-page.png";
import map from "@/assets/images/map.png";
import Image from "next/image";
import Check from "@/assets/icons/check-circle.svg";
import ArrowUpRight from "@/assets/icons/arrow-up-right.svg";
import ArrowRight from "@/assets/icons/arrow-right.svg";
import {Card} from "@/components/Card";

const allProjects = [
  {
    company: "Acme Corp",
    year: "2025",
    title: "Pairwise Speaker Identification",
    description: "Machine learning model for identifying speakers in audio recordings with high accuracy. Utilized deep learning techniques to achieve state-of-the-art results.",
    results: [
      { title: "93%+ Accuracy" },
      { title: "Real-time Processing" },
    ],
    link: "https://github.com",
    image: darkSaasLandingPage,
    tags: ["Python", "PyTorch", "Deep Learning"],
    featured: true,
  },
  {
    company: "Innovative Co",
    year: "2024",
    title: "Meal Genie",
    description: "Recipe recommendation app that suggests meals based on available ingredients. Built with modern web technologies and an intuitive user interface.",
    results: [
      { title: "20% Sales Boost" },
      { title: "35% User Reach" },
    ],
    link: "https://github.com",
    image: lightSaasLandingPage,
    tags: ["React", "Flask", "SQL"],
    featured: true,
  },
  {
    company: "Quantum Dynamics",
    year: "2023",
    title: "Neural Network from Scratch",
    description: "Custom neural network architecture for image classification tasks. Implemented forward and backward propagation from scratch.",
    results: [
      { title: "40% UX Improvement" },
      { title: "50% Speed Gain" },
    ],
    link: "https://github.com",
    image: aiStartupLandingPage,
    tags: ["TensorFlow", "Python", "ML"],
    featured: true,
  },
  {
    company: "Personal",
    year: "2024",
    title: "Spotify Recommendations",
    description: "Enhanced music recommendation system with improved algorithmic suggestions. Built with Python and the Spotify API.",
    results: [
      { title: "50% Better Quality" },
      { title: "API Enhancement" },
    ],
    link: "https://github.com",
    image: map,
    tags: ["Python", "Spotify API", "ML"],
    featured: true,
  },
  {
    company: "University",
    year: "2023",
    title: "Distributed Computing Project",
    description: "Implemented distributed algorithms for parallel processing. Demonstrated scalability improvements on multi-node clusters.",
    results: [
      { title: "3x Speed Improvement" },
      { title: "Fault Tolerance" },
    ],
    link: "https://github.com",
    image: darkSaasLandingPage,
    tags: ["Go", "Docker", "Kubernetes"],
    featured: false,
  },
  {
    company: "Hackathon",
    year: "2023",
    title: "Climate Data Visualizer",
    description: "Real-time visualization tool for climate data analysis. Features interactive maps and predictive modeling.",
    results: [
      { title: "1st Place Winner" },
      { title: "10k+ Users" },
    ],
    link: "https://github.com",
    image: lightSaasLandingPage,
    tags: ["React", "D3.js", "Python"],
    featured: false,
  },
];

type ProjectsSectionProps = {
  fullPage?: boolean;
};

export const ProjectsSection = ({ fullPage = false }: ProjectsSectionProps) => {
  const projects = fullPage ? allProjects : allProjects.filter(p => p.featured);

  return (
    <section id="projects" className="py-20 lg:py-28 relative">
      {!fullPage && <div className="absolute inset-0 bg-gradient-to-b from-transparent via-gray-100/50 to-transparent" />}
      
      <div className="container relative z-10">
        <div className="flex items-center justify-between mb-12">
          <h2 className="text-4xl md:text-5xl font-bold animate-on-scroll">
            {fullPage ? "All Projects" : "Featured Projects"}
          </h2>
          {!fullPage && (
            <Link 
              href="/projects"
              className="hidden md:inline-flex items-center gap-2 px-4 py-1.5 text-sm font-medium text-black/60 hover:underline"
            >
              View All
              <ArrowRight className="size-4"/>
            </Link>
          )}
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {projects.map((project, index) => (
            <Card 
              key={project.title} 
              className="group overflow-hidden animate-on-scroll hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="relative h-48 lg:h-56 overflow-hidden">
                <Image 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/10 to-transparent" />
                <div className="absolute bottom-4 left-4 flex gap-2 flex-wrap">
                  {project.tags.map((tag) => (
                    <span 
                      key={tag}
                      className="px-2 py-1 text-xs font-medium bg-white/95 text-black rounded-full shadow-sm"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
              
              <div className="p-6">
                <div className="flex items-center gap-2 text-sm text-black/40 mb-2">
                  <span className="font-medium">{project.company}</span>
                  <span>•</span>
                  <span>{project.year}</span>
                </div>
                
                <h3 className="text-xl lg:text-2xl font-bold text-black mb-2 group-hover:underline underline-offset-4 transition-all">
                  {project.title}
                </h3>
                
                <p className="text-black/50 text-sm mb-4 line-clamp-2">
                  {project.description}
                </p>
                
                <div className="flex flex-wrap gap-3 mb-4">
                  {project.results.map((result) => (
                    <div key={result.title} className="flex items-center gap-1 text-sm text-black/60">
                      <Check className="size-4"/>
                      <span>{result.title}</span>
                    </div>
                  ))}
                </div>
                
                <a 
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 font-semibold hover:gap-3 transition-all duration-300"
                >
                  <span>View Project</span>
                  <ArrowUpRight className="size-4" />
                </a>
              </div>
            </Card>
          ))}
        </div>
        
        {!fullPage && (
          <div className="mt-8 text-center md:hidden">
            <Link 
              href="/projects"
              className="inline-flex items-center gap-2 px-4 py-1.5 text-sm font-medium text-black/60 hover:underline"
            >
              View All Projects
              <ArrowRight className="size-4" />
            </Link>
          </div>
        )}
      </div>
    </section>
  );
};
