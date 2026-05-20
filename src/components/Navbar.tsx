import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Link, useLocation } from "react-router-dom";
import { cn } from "@/src/lib/utils";
import { Menu, X } from "lucide-react";

const navItems = [
  { name: "Hem", path: "/" },
  { name: "Designprocessen", path: "/process" },
  { name: "Solus", path: "/solus" },
];

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  // Close mobile menu when pathname changes
  useEffect(() => {
    setIsOpen(false);
  }, [location.pathname]);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-solus-bg/80 backdrop-blur-md border-b border-solus-border font-serif">
      <div className="max-w-7xl mx-auto px-12 h-24 flex items-center justify-between">
        <Link to="/" className="text-3xl font-serif tracking-tight transition-colors hover:opacity-80">
          Solus<span className="text-solus-accent">.</span>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-10">
          {navItems.map((item) => (
            <Link
              key={item.path}
              to={item.path}
              className={cn(
                "text-[10px] font-bold tracking-[0.2em] uppercase transition-all hover:text-solus-accent relative py-1 font-sans",
                location.pathname === item.path ? "text-solus-accent border-b-2 border-solus-accent" : "text-solus-text"
              )}
            >
              {item.name}
            </Link>
          ))}
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button 
            type="button"
            className="text-solus-accent focus:outline-none p-2 rounded-md hover:bg-solus-tag-bg/50 transition-colors"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Öppna meny"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation Dropdown */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25, ease: "easeInOut" }}
            className="absolute top-24 left-0 right-0 bg-solus-bg/95 backdrop-blur-md border-b border-solus-border overflow-hidden md:hidden"
          >
            <div className="flex flex-col gap-6 py-8 px-12">
              {navItems.map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  className={cn(
                    "text-[11px] font-bold tracking-[0.2em] uppercase transition-all hover:text-solus-accent py-2 font-sans",
                    location.pathname === item.path ? "text-solus-accent border-l-2 border-solus-accent pl-3" : "text-solus-text"
                  )}
                >
                  {item.name}
                </Link>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}

