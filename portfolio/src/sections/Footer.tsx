import GithubIcon from "@/assets/icons/github.svg";
import ArrowUpRight from "@/assets/icons/arrow-up-right.svg";
import ChromeIcon from "@/assets/icons/chrome.svg";
import { ToolIcons } from "@/components/ToolIcons";

const contactLinks = [
  { title: "Resume", link: "#", icon: ChromeIcon },
  { title: "LinkedIn", link: "https://www.linkedin.com/in/jeffrey-f-guo", icon: ChromeIcon },
  { title: "GitHub", link: "https://github.com/Jeffrey-F-Guo", icon: GithubIcon },
  { title: "Email", link: "mailto:jeffrey.guo00703@gmail.com", icon: ChromeIcon },
];

export const Footer = () => {
  return (
    <footer id="contact" className="py-12 border-t border-black/10 relative z-10">
      <div className="container">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="text-center md:text-left">
            <p className="font-semibold text-lg">Jeffrey Guo</p>
            <p className="text-black/50 text-sm mt-1">Software Engineer</p>
            <div className="flex flex-wrap justify-center md:justify-start gap-4 mt-4">
              {contactLinks.map((item) => (
                <a
                  key={item.title}
                  href={item.link}
                  target={item.link.startsWith('http') ? '_blank' : undefined}
                  rel={item.link.startsWith('http') ? 'noopener noreferrer' : undefined}
                  className="text-sm text-black/60 hover:text-black hover:underline underline-offset-4"
                >
                  {item.title}
                </a>
              ))}
            </div>
          </div>
          
          <div className="flex items-center gap-3">
            <a 
              href="https://github.com/Jeffrey-F-Guo" 
              target="_blank" 
              rel="noopener noreferrer"
              className="p-2 bg-white rounded-full hover:bg-black hover:text-white transition-all duration-300"
              aria-label="GitHub"
            >
              <GithubIcon className="size-4" />
            </a>
            <a 
              href="https://www.linkedin.com/in/jeffrey-f-guo" 
              target="_blank" 
              rel="noopener noreferrer"
              className="p-2 bg-white rounded-full hover:bg-black hover:text-white transition-all duration-300"
              aria-label="LinkedIn"
            >
              <ArrowUpRight className="size-4" />
            </a>
          </div>
        </div>
        
        <div className="mt-8 pt-6 border-t border-black/5 text-center text-black/40 text-sm">
          <p>&copy; {new Date().getFullYear()} Jeffrey Guo. Built with Next.js.</p>
        </div>
      </div>
    </footer>
  );
};
