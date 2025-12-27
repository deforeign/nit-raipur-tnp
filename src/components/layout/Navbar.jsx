import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, GraduationCap } from "lucide-react";
import { Button } from "@/components/ui/button.jsx"; // <-- Updated
import { cn } from "@/lib/utils.js"; // <-- CRITICAL: Updated from .ts to .js
import { motion, AnimatePresence } from "framer-motion";
import nitrlogo from "../../assets/nitr.png"

const navLinks = [
  { name: "Home", href: "/" },
  { name: "Academics", href: "/academics" },
  { name: "Placements", href: "/placements" },
  { name: "For Recruiters", href: "/recruiters" },
  { name: "Our Team", href: "/team" },
  { name: "Contact Us", href: "/contact" },
];

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-card backdrop-blur-md border-b border-border shadow-sm">
      <nav className="container mx-auto px-2 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2 sm:gap-3 group min-w-0">
  <div className="flex-shrink-0 w-10 h-10 sm:w-14 sm:h-14 rounded-full flex items-center justify-center shadow-elegant group-hover:shadow-glow transition-shadow duration-300">
    <img src={nitrlogo} className="w-8 h-8 sm:w-12 sm:h-12 object-contain" />
  </div>
  
  <div className="flex flex-col items-start min-w-0">
    <p className="font-bold text-xs sm:text-lg text-primary leading-tight truncate max-w-full">
      Training & Placement Cell
    </p>
    <p className="text-[9px] sm:text-xs text-muted-foreground truncate max-w-[180px] xs:max-w-full">
      NIT Raipur
    </p>
  </div>
</Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.href}
                className={cn(
                  "px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200",
                  location.pathname === link.href
                    ? "bg-primary text-primary-foreground"
                    : "text-foreground hover:bg-secondary hover:text-primary"
                )}
              >
                {link.name}
              </Link>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <Button
            variant="ghost"
            size="icon"
            className="lg:hidden"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </Button>
        </div>

        {/* Mobile Navigation */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.2 }}
              className="lg:hidden overflow-hidden"
            >
              <div className="py-4 space-y-1 border-t border-border">
                {navLinks.map((link) => (
                  <Link
                    key={link.name}
                    to={link.href}
                    onClick={() => setIsOpen(false)}
                    className={cn(
                      "block px-4 py-3 rounded-lg text-sm font-medium transition-all duration-200",
                      location.pathname === link.href
                        ? "bg-primary text-primary-foreground"
                        : "text-foreground hover:bg-secondary"
                    )}
                  >
                    {link.name}
                  </Link>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </header>
  );
};