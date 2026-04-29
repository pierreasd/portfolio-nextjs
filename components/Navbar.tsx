"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { Sun, Moon, Laptop, Menu, X } from "lucide-react";

// Define the navigation items centrally for easy updates
const navLinks = [
  { name: "Home", href: "/" },
  { name: "Projects", href: "/projects" },
  // { name: "Contact", href: "/contact" },
];

export default function Navbar() {
  const pathname = usePathname();
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  // Ensure component is mounted before rendering theme toggle to avoid hydration mismatch
  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <nav className="sticky top-0 z-50 w-full backdrop-blur-md bg-white/75 border-b border-gray-200 dark:bg-gray-800/75 dark:border-gray-700 shadow-sm">
      <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          
          {/* Logo or Name */}
          <div className="flex items-center shrink-0">
            <Laptop size={20} className="text-gray-900 dark:text-white m-2" />
            <Link href="/" className="font-bold text-xl tracking-tight text-gray-900 dark:text-white">
              Pierre Azhanzi Ibrahim
            </Link>
          </div>

          {/* Navigation Links - Desktop */}
          <div className="hidden md:flex space-x-6 sm:space-x-8">
            {navLinks.map((link) => {
              const isActive = pathname === link.href;
              
              return (
                <Link
                    key={link.name}
                    href={link.href}
                    className={`text-sm font-medium py-2 transition-colors ${
                      isActive
                        ? "text-teal-600 dark:text-teal-400 border-b-2 border-teal-600 dark:border-teal-400"
                        : "text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white"
                    }`}
                  >
                    {link.name}
                  </Link>
              );
            })}
          </div>
          
          {/* Desktop Dark Mode Button */}
          {mounted && (
              <button
                onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
                className="hidden md:flex p-2 rounded-md bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
                aria-label="Toggle Dark Mode"
              >
                {theme === "dark" ? <Sun size={18} /> : <Moon size={18} />}
              </button>
            )}
          
          {/* Mobile Menu Button */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="md:hidden p-2 rounded-md text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
            aria-label="Toggle Menu"
          >
            {menuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
            
        </div>
      </div>
      
      {/* Mobile Menu Panel */}
      <div className={`md:hidden border-t border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 overflow-hidden origin-top transition-all duration-300 ${
        menuOpen ? "max-h-screen" : "max-h-0"
      }`}>
          <div className="px-4 py-4 space-y-4">
            {navLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.name}
                  href={link.href}
                  className={`block text-sm font-medium py-2 transition-colors ${
                    isActive
                      ? "text-teal-600 dark:text-teal-400"
                      : "text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white"
                  }`}
                  onClick={() => setMenuOpen(false)}
                >
                  {link.name}
                </Link>
              );
            })}
            
            {mounted && (
              <button
                onClick={() => {
                  setTheme(theme === "dark" ? "light" : "dark");
                  setMenuOpen(false);
                }}
                className="w-full text-left flex items-center gap-2 text-sm font-medium py-2 px-2 rounded-md bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors"
                aria-label="Toggle Dark Mode"
              >
                {theme === "dark" ? <Sun size={18} /> : <Moon size={18} />}
                {theme === "dark" ? "Light Mode" : "Dark Mode"}
              </button>
            )}
          </div>
        </div>
    </nav>
  );
}