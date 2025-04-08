import darkSaasLandingPage from "@/assets/images/dark-saas-landing-page.png";
import lightSaasLandingPage from "@/assets/images/light-saas-landing-page.png";
import aiStartupLandingPage from "@/assets/images/ai-startup-landing-page.png";
import map from "@/assets/images/map.png";
import Image from "next/image";
import Check from "@/assets/icons/check-circle.svg";
import ArrowUpRight from "@/assets/icons/arrow-up-right.svg";

const portfolioProjects = [
  {
    company: "Acme Corp",
    year: "2022",
    title: "Dark Saas Landing Page",
    results: [
      { title: "Enhanced user experience by 40%" },
      { title: "Improved site speed by 50%" },
      { title: "Increased mobile traffic by 35%" },
    ],
    link: "https://youtu.be/4k7IdSLxh6w",
    image: darkSaasLandingPage,
  },
  {
    company: "Innovative Co",
    year: "2021",
    title: "Light Saas Landing Page",
    results: [
      { title: "Boosted sales by 20%" },
      { title: "Expanded customer reach by 35%" },
      { title: "Increased brand awareness by 15%" },
    ],
    link: "https://youtu.be/7hi5zwO75yc",
    image: lightSaasLandingPage,
  },
  {
    company: "Quantum Dynamics",
    year: "2023",
    title: "AI Startup Landing Page",
    results: [
      { title: "Enhanced user experience by 40%" },
      { title: "Improved site speed by 50%" },
      { title: "Increased mobile traffic by 35%" },
    ],
    link: "https://youtu.be/Z7I5uSRHMHg",
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
    link: "",
    image: map,
  },
];
// <div key={project.title} className="p-8 rounded-3xl border bg-black/10 relative z-0 overflow-hidden after:z-10 after:content[''] after:absolute after:inset-0 after:outline-2 after:outline after:-outline-offset-2 after:rounded-3xl">
// its cool i guess lmao... looks the same, apparently more customizable
export const ProjectsSection = () => {
  return (
    <section className="bg-gray-100 py-20">
      <div className="container">
        <h2 className="text-4xl font-bold text-center mt-6">
          Featured Projects
        </h2>
        <div className="flex flex-col mt-10 gap-20">
          {portfolioProjects.map((project) => (
            <div key={project.title} className="px-8 pt-8 rounded-3xl bg-black/10 border-2 border-black overflow-hidden">
              <span>{project.company}</span>
              <span> . </span>
              <span>{project.year}</span>
              <h3 className="text-2xl font-semibold mt-2">{project.title}</h3>
              <hr className="border-black/80 border-t-2 mt-4"/>
              <ul className="flex flex-col gap-4 mt-4">
                {project.results.map((result) => (
                  <li className="flex gap-2 text-sm text-black/70">
                    <Check className="size-5"/>
                    <span>{result.title}</span>
                  </li>
                ))}
              </ul>
              <a href={project.link}>
                <button className="bg-black rounded-xl text-white h-12
                font-semibold w-full inline-flex items-center justify-center gap-2 mt-8">
                  <span>View Github</span>
                  <ArrowUpRight className="size-5"/>
                </button>
              </a>
              <Image src={project.image} alt={project.title}
              className="mt-8 -mb-4"/>

            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
