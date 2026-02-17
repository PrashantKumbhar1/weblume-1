
import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import logo from "@/assets/logo.svg"; // SVG LOGO

const navLinks = [
  { name: "Home", path: "/" },
  { name: "Services", path: "/services" },
  { name: "Work", path: "/work" },
  { name: "About", path: "/about" },
  { name: "Contact", path: "/contact" },
];

export const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location]);

  return (
    <>
      <motion.header
        initial={{ y: -80 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6 }}
        className={cn(
          "fixed top-0 left-0 right-0 z-50 transition-all duration-500",
          isScrolled
            ? "backdrop-blur-xl bg-black/40 border-b border-white/10 py-3"
            : "py-5"
        )}
      >
        <nav className="container mx-auto flex items-center justify-between px-6">

          {/* 🔥 LOGO SECTION */}
          <Link to="/" className="flex items-center gap-3 group">

            {/* Logo */}
            <motion.img
              src={logo}
              alt="Weblume"
              className="h-9 w-auto object-contain mix-blend-lighten"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.2 }}
            />

            {/* Text */}
            <span className="text-xl font-semibold tracking-wide text-white group-hover:text-emerald-400 transition">
              Weblume
            </span>
          </Link>

          {/* Desktop Nav */}
          <ul className="hidden lg:flex items-center gap-2">
            {navLinks.map((link) => (
              <li key={link.path}>
                <Link
                  to={link.path}
                  className={cn(
                    "relative px-4 py-2 text-sm font-medium transition-all duration-300",
                    location.pathname === link.path
                      ? "text-emerald-400"
                      : "text-white/70 hover:text-white"
                  )}
                >
                  {link.name}

                  {location.pathname === link.path && (
                    <motion.div
                      layoutId="navDot"
                      className="absolute bottom-0 left-1/2 -translate-x-1/2 w-1 h-1 bg-emerald-400 rounded-full"
                    />
                  )}
                </Link>
              </li>
            ))}
          </ul>

          {/* CTA */}
          <div className="hidden lg:block">
            <Link to="/contact">
              <Button
                size="sm"
                className="bg-emerald-500 hover:bg-emerald-600 text-white px-5 shadow-lg shadow-emerald-500/20"
              >
                Start Your Project
              </Button>
            </Link>
          </div>

          {/* Mobile btn */}
          <button
            className="lg:hidden text-white"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X size={26} /> : <Menu size={26} />}
          </button>
        </nav>
      </motion.header>

      {/* Mobile menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -30 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -30 }}
            className="fixed inset-0 z-40 bg-black/90 backdrop-blur-xl lg:hidden"
          >
            <div className="pt-28 px-6">
              <ul className="flex flex-col gap-6 text-center">
                {navLinks.map((link) => (
                  <Link
                    key={link.path}
                    to={link.path}
                    className="text-2xl text-white/80 hover:text-emerald-400 transition"
                  >
                    {link.name}
                  </Link>
                ))}
              </ul>

              <div className="mt-10 text-center">
                <Link to="/contact">
                  <Button className="bg-emerald-500 hover:bg-emerald-600 w-full">
                    Start Your Project
                  </Button>
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};
