"use client";

import { useEffect, useState } from "react";
import { User, FolderOpen, Briefcase, Mail } from "lucide-react";

import AnimatedLogo from "@/animation/animated-logo";
import ThemeSwitch from "@/components/utility/theme-switch";

export default function Navbar() {
  const [activeSection, setActiveSection] = useState("about");

  const navItems = [
    { label: "About", id: "about", icon: <User size={18} /> },
    { label: "Skills", id: "skills", icon: <Briefcase size={18} /> },
    { label: "Experience", id: "experience", icon: <Briefcase size={18} /> },
    { label: "Projects", id: "projects", icon: <FolderOpen size={18} /> },
    { label: "Contact", id: "contact", icon: <Mail size={18} /> },
  ];

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);

    if (!element) return;

    const navbarHeight = 80;

    const y = element.offsetTop - navbarHeight;

    window.scrollTo({
      top: y,
      behavior: "smooth",
    });

    setActiveSection(id);
  };

  useEffect(() => {
    const handleScroll = () => {
      let current = activeSection;

      for (const item of navItems) {
        const section = document.getElementById(item.id);

        if (!section) continue;

        const rect = section.getBoundingClientRect();

        if (rect.top <= 150 && rect.bottom >= 150) {
          current = item.id;
          break;
        }
      }

      if (current !== activeSection) {
        setActiveSection(current);
      }
    };

    window.addEventListener("scroll", handleScroll);

    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [activeSection]);

  return (
    <>
      <header className="fixed left-0 right-0 top-0 z-50 mt-4 px-4 sm:mt-6 sm:px-6">
        <div className="mx-auto flex max-w-7xl items-center justify-between">
          {/* Logo */}
          <button
            onClick={() => scrollToSection("home")}
            className="flex h-10 w-10 items-center justify-center sm:h-12 sm:w-12"
          >
            <div className="flex h-8 w-8 items-center justify-center sm:h-10 sm:w-10">
              <AnimatedLogo />
            </div>
          </button>

          {/* Theme Switch */}
          <div className="flex h-10 w-10 items-center justify-center sm:h-12 sm:w-12">
            <div className="scale-75 sm:scale-90 md:scale-100">
              <ThemeSwitch />
            </div>
          </div>
        </div>
      </header>

      {/* Spacer */}
      <div className="h-24" />

      {/* ================= BOTTOM DOCK ================= */}
      <div className="fixed bottom-6 left-1/2 z-50 -translate-x-1/2">
        <div className="flex items-center gap-2 rounded-3xl border border-slate-200 bg-white/95 px-5 py-3 shadow-2xl backdrop-blur-xl dark:border-slate-700 dark:bg-slate-900/95">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => scrollToSection(item.id)}
              className={`flex items-center gap-2 rounded-2xl px-4 py-2 text-sm font-medium transition-all duration-300 ${
                activeSection === item.id
                  ? "bg-slate-900 text-white dark:bg-white dark:text-slate-900"
                  : "text-slate-600 hover:bg-slate-100 active:bg-slate-200 dark:text-slate-400 dark:hover:bg-slate-800"
              }`}
            >
              {item.icon}
              <span className="hidden sm:block">{item.label}</span>
            </button>
          ))}
        </div>
      </div>
    </>
  );
}
