import {Card} from "@/components/Card";
import { CardHeader } from "@/components/CardHeader";
import { ToolIcons } from "@/components/ToolIcons";

import Image from "next/image";
import ReactIcon from "@/assets/icons/react.svg";
import HTMLIcon from "@/assets/icons/html5.svg";
import CssIcon from "@/assets/icons/css3.svg";
import GithubIcon from "@/assets/icons/github.svg";
import ChromeIcon from "@/assets/icons/chrome.svg";
import JavascriptIcon from "@/assets/icons/square-js.svg";


const toolboxItems = [
  {
    title: "React",
    icon: ReactIcon
  },
  {
    title: "HTML",
    icon: HTMLIcon
  },
  {
    title: "CSS",
    icon: CssIcon
  },
  {
    title: "GitHub",
    icon: GithubIcon
  },
  {
    title: "JavaScript",
    icon: JavascriptIcon
  },
  {
    title: "Pytorch",
    icon: ChromeIcon
  },  {
    title: "Python3",
    icon: ChromeIcon
  },
  {
    title: "Flask",
    icon: ChromeIcon
  },
  {
    title: "SQL",
    icon: ChromeIcon
  }
]

const linkItems = [
  {
    title: "My Resume",
    link: "#",
    icon: ChromeIcon,
  },
  {
    title: "My LinkedIn",
    link: "https://www.linkedin.com/in/jeffrey-f-guo",
    icon: ChromeIcon,
  },
  {
    title: "My GitHub",
    link: "https://github.com/Jeffrey-F-Guo",
    icon: GithubIcon,
  },
  {
    title: "My Email",
    link: "mailto:jeffrey.guo00703@gmail.com",
    icon: ChromeIcon,
  }
]
export const AboutSection = () => {
  return (
    <section id="about" className="py-20">
      <div className="container">
        <h1 className="text-5xl flex justify-center items-center font-bold m-4">About Me</h1>

        <div className="mt-10 flex flex-col gap-5">
            <Card className="px-8 py-12 md:px-10 lg:px-20 lg:pt-12 bg-custom-gray-light">
              <CardHeader 
                title="Useful Links"
                className="items-center"
              />
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 lg:flex-row items-center justify-center gap-10 mt-10">
                
                {linkItems.map((linkitem) =>
                  <a key={linkitem.title} 
                  href={linkitem.link}
                  className="border border-black/15 rounded-xl p-4 text-center text-lg font-semibold w-full
                  flex flex-col gap-2 justify-center items-center"
                  >
                    <ToolIcons component={linkitem.icon} className="size-20"/>
                    {linkitem.title}
                  </a>
                  
                )}
              </div>
            </Card>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
            <Card className="px-4 p-4 md:pt-12 md:px-10 lg:p-8 lg:px-10 bg-custom-gray-light">
              <div>
                <CardHeader 
                  title="My Toolbox" 
                />
              </div>
              <div>
                {toolboxItems.map((item) =>
                  <div key={item.title}  
                    className="inline-flex item-center 
                    gap-4 py-2 px-3 outline outline-black/15 rounded-lg m-2
                    transition-transform duration-200 transform hover:scale-110">
                    <ToolIcons component={item.icon} className="size-5"/>
                    <span className="font-semibold">{item.title}</span>
                  </div>  
                )}
              </div>
            </Card>

            <Card className="px-8 p-4 md:pt-12 md:px-10 lg:p-8 lg:px-20 bg-custom-gray-light">
              <CardHeader
                title="My Skills"
              />
            </Card>


          </div>
          

        </div>
      </div>
    </section>
    
  );

};
