"use client";
import { usePathname } from "next/navigation";
import { useActiveSection } from "@/hooks/useActiveSection";
import { Scroll } from "@/components/ScrollToElement";

const navItems = [
  { id: "home",       label: "home" },
  { id: "projects",   label: "projects" },
  { id: "experience", label: "experience" },
  { id: "skills",     label: "skills" },
  { id: "contact",    label: "contact" },
];

export const Header = () => {
  const pathname = usePathname();
  const isHomePage = pathname === "/";
  const activeSection = useActiveSection(navItems.map((item) => item.id));

  const handleNavClick = (id: string) => {
    if (id === "home") {
      window.scrollTo({ top: 0, behavior: "smooth" });
    } else {
      Scroll(id);
    }
  };

  const isActive = (id: string) => isHomePage && activeSection === id;

  return (
    <header className="fixed top-7 left-0 right-0 z-50 flex justify-center px-4 md:px-8">
      <div className="relative w-full max-w-3xl flex items-center justify-between h-9 px-4
        bg-white/85 backdrop-blur-md
        border border-black/10
        rounded-xl shadow-sm shadow-black/5">

        <button
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className="font-mono text-sm font-semibold tracking-tight hover:opacity-50 transition-opacity"
        >
          jg
        </button>

        <nav className="flex items-center gap-5">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => handleNavClick(item.id)}
              className={isActive(item.id) ? "nav-link-active" : "nav-link"}
            >
              {isActive(item.id) ? `[${item.label}]` : item.label}
            </button>
          ))}
        </nav>


      </div>
    </header>
  );
};
