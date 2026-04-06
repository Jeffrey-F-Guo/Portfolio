import {Card} from "@/components/Card";
import { CardHeader } from "@/components/CardHeader";
import { ToolIcons } from "@/components/ToolIcons";

import ReactIcon from "@/assets/icons/react.svg";
import HTMLIcon from "@/assets/icons/html5.svg";
import CssIcon from "@/assets/icons/css3.svg";
import GithubIcon from "@/assets/icons/github.svg";
import ChromeIcon from "@/assets/icons/chrome.svg";
import JavascriptIcon from "@/assets/icons/square-js.svg";

const toolboxItems = [
  { title: "Python", icon: ChromeIcon },
  { title: "React", icon: ReactIcon },
  { title: "TypeScript", icon: JavascriptIcon },
  { title: "C", icon: ChromeIcon },
  { title: "Java", icon: ChromeIcon },
  { title: "Go", icon: ChromeIcon },
  { title: "PyTorch", icon: ChromeIcon },
  { title: "FastAPI", icon: ChromeIcon },
  { title: "AWS", icon: ChromeIcon },
  { title: "Docker", icon: ChromeIcon },
  { title: "HTML/CSS", icon: HTMLIcon },
  { title: "GitHub", icon: GithubIcon },
];

export const SkillsSection = () => {
  return (
    <section id="skills" className="py-20 relative">
      <div className="container relative z-10">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 animate-on-scroll">
          Skills
        </h2>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 max-w-4xl mx-auto">
          <Card className="px-6 py-8 md:px-10 lg:p-8 shadow-md animate-on-scroll">
            <CardHeader title="Tech Stack" />
            <div className="flex flex-wrap mt-6">
              {toolboxItems.map((item, index) => (
                <div 
                  key={item.title}
                  style={{ animationDelay: `${index * 50}ms` }}
                  className="inline-flex items-center gap-3 py-2.5 px-4 border border-black/10 rounded-xl m-1.5
                  transition-all duration-200 cursor-default hover:bg-black hover:text-white animate-on-scroll bg-white"
                >
                  <ToolIcons component={item.icon} className="size-5"/>
                  <span className="font-medium text-sm">{item.title}</span>
                </div>  
              ))}
            </div>
          </Card>

          <Card className="px-6 py-8 md:px-10 lg:p-8 shadow-md animate-on-scroll">
            <CardHeader title="Proficiencies" />
            <div className="space-y-5 mt-6">
              {[
                { name: "Python & Machine Learning", progress: 95 },
                { name: "React & TypeScript", progress: 85 },
                { name: "Backend Development", progress: 80 },
                { name: "Cloud & DevOps (AWS, Docker)", progress: 75 },
                { name: "C / Java / Go", progress: 70 },
              ].map((skill, index) => (
                <div key={skill.name} className="space-y-2 animate-on-scroll" style={{ animationDelay: `${index * 100}ms` }}>
                  <div className="flex justify-between text-sm">
                    <span className="font-medium">{skill.name}</span>
                    <span className="text-black/40">{skill.progress}%</span>
                  </div>
                  <div className="h-2 bg-black/5 rounded-full overflow-hidden">
                    <div
                      className="h-full bg-black rounded-full skill-bar"
                      style={{ width: '0%' }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};
