"use client";
import { useTheme } from "next-themes";
import Link from "next/link";
import { useState, useEffect } from "react";
import { Button } from "./ui/button";
import { MoonIcon, SunIcon, HomeIcon } from "lucide-react";

export default function Header() {
  const [active, setActive] = useState("about");
  const [scrolled, setScrolled] = useState(false);
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-14 max-w-screen-2xl items-center">
        <div className="mr-4 flex items-center">
          <Link 
            className="mr-6 flex items-center space-x-2 transition-all duration-300" 
            href="/"
          >
            <HomeIcon className="h-5 w-5" />
            {!scrolled && (
              <span className="text-sm font-bold md:text-base">
                Welcome
              </span>
            )}
          </Link>
          <nav className="flex items-center space-x-4 md:space-x-6 text-xs md:text-sm font-medium">
            <button
              onClick={() => setActive("about")}
              className={`${
                active === "about" ? "text-foreground" : "text-foreground/60"
              } transition-colors hover:text-foreground/80`}
            >
              Home
            </button>
            <button
              onClick={() => setActive("contact")}
              className={`${
                active === "contact" ? "text-foreground" : "text-foreground/60"
              } transition-colors hover:text-foreground/80`}
            >
              Blog
            </button>
          </nav>
        </div>
        <div className="flex flex-1 items-center justify-end">
          <Button
            variant="ghost"
            size="icon"
            onClick={() => setTheme(theme === "light" ? "dark" : "light")}
          >
            <SunIcon className="h-4 w-4 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0 md:h-5 md:w-5" />
            <MoonIcon className="absolute h-4 w-4 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100 md:h-5 md:w-5" />
            <span className="sr-only">Toggle theme</span>
          </Button>
        </div>
      </div>
    </header>
  );
}