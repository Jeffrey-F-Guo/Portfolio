import darkSaasLandingPage from "@/assets/images/dark-saas-landing-page.png";
import lightSaasLandingPage from "@/assets/images/light-saas-landing-page.png";
import aiStartupLandingPage from "@/assets/images/ai-startup-landing-page.png";
import map from "@/assets/images/map.png";
import Image from "next/image";
import Check from "@/assets/icons/check-circle.svg";
import ArrowUpRight from "@/assets/icons/arrow-up-right.svg";
import {Card} from "@/components/Card";

const portfolioProjects = [
  {
    company: "Acme Corp",
    year: "2025",
    title: "Pairwise Speaker Identification",
    results: [
      { title: "Achieved over 93% Accuracy" },
      { title: "Improved site speed by 50%" },
      { title: "Increased mobile traffic by 35%" },
    ],
    link: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
    image: darkSaasLandingPage,
  },
  {
    company: "Innovative Co",
    year: "2021",
    title: "Meal Genie",
    results: [
      { title: "Boosted sales by 20%" },
      { title: "Expanded customer reach by 35%" },
      { title: "Increased brand awareness by 15%" },
    ],
    link: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
    image: lightSaasLandingPage,
  },
  {
    company: "Quantum Dynamics",
    year: "2023",
    title: "Neural Network",
    results: [
      { title: "Enhanced user experience by 40%" },
      { title: "Improved site speed by 50%" },
      { title: "Increased mobile traffic by 35%" },
    ],
    link: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
    image: aiStartupLandingPage,
  },
  {
    company: "Jeffrey",
    year: "2025",
    title: "Spotify recommendations",
    results: [
      { title: "Enhanced user experience by 40%" },
      { title: "Improved site speed by 50%" },
      { title: "Increased recommendation quality by 50% over the spotify API" },
    ],
    link: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
    image: map,
  },
];
// <div key={project.title} className="p-8 rounded-3xl border bg-black/10 relative z-0 overflow-hidden after:z-10 after:content[''] after:absolute after:inset-0 after:outline-2 after:outline after:-outline-offset-2 after:rounded-3xl">
// its cool i guess lmao... looks the same, apparently more customizable
// style={{
//   top: `calc(160px + ${projectIndex * 10}px)`
// }}
export const ProjectsSection = () => {
  return (
    <section id="projects" className="bg-gray-100 py-16 lg:py-20 lg:pb-24">
      <div className="container flex flex-col">
        <h2 className="text-4xl md:text-5xl font-bold text-center mt-6 top-20">
          Featured Projects
        </h2>
        <div className="flex overflow-x-auto snap-x snap-mandatory no-scrollbar mt-10 mb-6 md:mt-20 gap-5">
          {portfolioProjects.map((project) => (
            <Card key={project.title} className="px-8 pt-8 md:pt-12 md:px-10 h-[500px] md:h-[700px] lg:h-[500px] flex-shrink-0 w-[80%] lg:pt-16 lg:px-20
            snap-center hover:scale-100 scale-95 transition duration-200">
              <div className="lg:grid lg:grid-cols-2 lg:gap-16">
                <div className="lg:mb-16">
                  <span>{project.company}</span>
                  <span> . </span>
                  <span>{project.year}</span>
                  <h3 className="text-2xl md:text-4xl lg:text-5xl font-semibold mt-2 md:mt-4">{project.title}</h3>
                  <hr className="border-black/80 border-t-2 mt-4 md:mt-5"/>
                  <ul className="flex flex-col gap-4 mt-4 md:mt-5">
                    {project.results.map((result) => (
                      <li className="flex gap-2 text-sm md:text-base text-black/70">
                        <Check className="size-5 md:size-6"/>
                        <span>{result.title}</span>
                      </li>
                    ))}
                  </ul>
                  <a href={project.link} className="bg-black rounded-xl text-white h-12
                    font-semibold w-full md:w-auto md:px-6 inline-flex items-center justify-center gap-2 mt-8">
                    <span>View Github</span>
                    <ArrowUpRight className="size-5"/>
                  </a>
                </div>
                <div className="relative h-full lg:overflow-visible">
                  <Image src={project.image} alt={project.title}
                  className="mt-8 -mb-4 md:-mb-0 lg:mt-0 lg:absolute lg:h-full lg:w-auto lg:max-w-none lg:object-contain lg:object-left-top"/>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
