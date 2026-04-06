"use client";
import { usePathname } from "next/navigation";
import { useActiveSection } from "@/hooks/useActiveSection";
import { Scroll } from "@/components/ScrollToElement";

const navItems = [
  { id: "home", label: "Home", href: "/" },
  { id: "projects", label: "Projects", href: "#projects" },
  { id: "experience", label: "Experience", href: "#experience" },
  { id: "skills", label: "Skills", href: "#skills" },
  { id: "contact", label: "Contact", href: "#contact" },
];

export const Header = () => {
  const pathname = usePathname();
  const isHomePage = pathname === "/";
  const activeSection = useActiveSection(navItems.map((item) => item.id));

  const handleNavClick = (item: typeof navItems[0]) => {
    window.scrollTo({ top: 0, behavior: "smooth" });
    setTimeout(() => {
      if (item.id === "home" && pathname === "/") {
        Scroll("home");
      } else if (item.href.startsWith("#")) {
        Scroll(item.id);
      }
    }, 50);
  };

  return (
    <div className="flex justify-center items-center w-full fixed top-3 z-50 animate-slide-down">
      <nav className="flex gap-1 border border-black/20 rounded-xl p-1 bg-white/90 backdrop-blur-md shadow-sm">
        {navItems.map((item) => {
          const isActive = isHomePage && activeSection === item.id;
          
          return (
            <button
              key={item.id}
              onClick={() => handleNavClick(item)}
              className={`nav-item ${isActive ? "bg-black text-white" : ""}`}
            >
              {item.label}
            </button>
          );
        })}
      </nav>
    </div>
  );
};
