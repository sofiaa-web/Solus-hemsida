import { motion } from "motion/react";
import { Link, useLocation } from "react-router-dom";
import { cn } from "@/src/lib/utils";

const navItems = [
  { name: "Hem", path: "/" },
  { name: "Designprocess", path: "/process" },
  { name: "Användartester och iteration", path: "/tester" },
  { name: "Solus", path: "/solus" },
];

export function Navbar() {
  const location = useLocation();

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-solus-bg/80 backdrop-blur-md border-b border-solus-border font-serif">
      <div className="max-w-7xl mx-auto px-12 h-24 flex items-center justify-between">
        <Link to="/" className="text-3xl font-serif tracking-tight transition-colors hover:opacity-80">
          Solus<span className="text-solus-accent">.</span>
        </Link>

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

        <div className="md:hidden">
          <button className="text-solus-accent">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M4 6h16M4 12h16M4 18h16"/></svg>
          </button>
        </div>
      </div>
    </nav>
  );
}
