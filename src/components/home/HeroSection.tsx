import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useMemo } from "react";

export const HeroSection = () => {
  const particles = useMemo(
    () =>
      Array.from({ length: 24 }).map(() => ({
        x: Math.random() * window.innerWidth,
        y: Math.random() * window.innerHeight,
        duration: Math.random() * 4 + 3,
        delay: Math.random() * 2,
      })),
    []
  );

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Gradient mesh */}
      <div className="absolute inset-0 bg-gradient-to-br from-emerald-900/40 via-cyan-900/30 to-blue-900/40" />

      {/* Floating particles */}
      {particles.map((p, i) => (
        <motion.div
          key={i}
          className="absolute w-1 h-1 rounded-full bg-white/40"
          initial={{ x: p.x, y: p.y, opacity: 0 }}
          animate={{ y: p.y - 200, opacity: [0, 1, 0] }}
          transition={{
            duration: p.duration,
            delay: p.delay,
            repeat: Infinity,
            ease: "linear",
          }}
        />
      ))}

      {/* Content */}
      <div className="relative z-10 text-center max-w-5xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-card mb-8"
        >
          <Sparkles className="text-emerald-400" size={16} />
          <span className="text-sm text-emerald-300">
            Websites that bloom into success 🌱
          </span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9 }}
          className="font-display text-5xl md:text-7xl lg:text-8xl font-bold leading-tight mb-8"
        >
          <h1 className="font-display text-5xl md:text-7xl lg:text-8xl font-bold leading-tight mb-8">
            Let Your Business{" "}
          <span className="gradient-animated">Bloom Online ✨</span>
          </h1>
        </motion.h1>

        <p className="text-xl text-muted-foreground max-w-2xl mx-auto mb-10">
          Beautiful, affordable websites for professionals and small businesses.
        </p>

        <div className="flex justify-center gap-4">
          <Link to="/contact">
      <Button
        size="xl"
        className="relative"
        onMouseMove={(e) => {
          const r = e.currentTarget.getBoundingClientRect();
          e.currentTarget.style.transform = `translate(${(e.clientX - r.left - r.width / 2) / 10}px, ${(e.clientY - r.top - r.height / 2) / 10}px)`;
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.transform = "translate(0,0)";
        }}
      >
        Start Growing 🚀
      </Button>

          </Link>
          <Link to="/work">
            <Button variant="outline" size="xl">
              See Our Work
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};
