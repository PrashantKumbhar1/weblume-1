import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useMemo } from "react";

const generateParticles = () =>
  Array.from({ length: 20 }).map(() => ({
    x: Math.random() * window.innerWidth,
    y: Math.random() * window.innerHeight,
    duration: Math.random() * 4 + 3,
    delay: Math.random() * 2,
  }));

export const HeroSection = () => {
  const particles = useMemo(() => generateParticles(), []);

  return (
    <section className="relative pt-36 pb-28 overflow-hidden">
      
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-emerald-900/40 via-cyan-900/30 to-blue-900/40" />
      <div className="absolute top-40 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-emerald-500/10 blur-[120px] rounded-full pointer-events-none" />

      {/* Floating Particles */}
      {particles.map((p, i) => (
        <motion.div
          key={i}
          className="absolute w-1 h-1 rounded-full bg-white/30"
          initial={{ x: p.x, y: p.y, opacity: 0 }}
          animate={{ y: p.y - 150, opacity: [0, 1, 0] }}
          transition={{
            duration: p.duration,
            delay: p.delay,
            repeat: Infinity,
            ease: "linear",
          }}
        />
      ))}

      {/* Content */}
      <div className="relative z-10 text-center max-w-5xl mx-auto px-6">

        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="
            inline-flex items-center gap-2 
            px-5 py-2 mb-6
            rounded-full
            bg-emerald-500/10
            border border-emerald-400/30
            backdrop-blur-md
          "
        >
          <Sparkles className="text-emerald-400" size={16} />
          <span className="text-sm text-emerald-300 font-medium">
            Crafted for attention. Designed for growth 💻
          </span>
        </motion.div>

        {/* Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="font-display text-4xl md:text-6xl lg:text-7xl font-bold leading-tight mb-8"
        >
          Build a Digital Presence{" "}
          <span className="relative gradient-animated drop-shadow-[0_0_25px_rgba(16,185,129,0.25)]">
            That Drives Growth
          </span>
        </motion.h1>


        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-12"
        >
          We design and develop high-performance websites and Android apps 
          that transform ideas into measurable results.
        </motion.p>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row justify-center gap-5">

          <Link to="/contact">
            <Button
              size="xl"
              className="px-8 py-6 text-lg font-semibold shadow-lg hover:scale-105 transition-transform"
            >
              Start Your Project
              <ArrowRight className="ml-2" />
            </Button>
          </Link>

          <Link to="/work">
            <Button
              variant="outline"
              size="xl"
              className="px-8 py-6 text-lg hover:bg-white/5"
            >
              See Our Work
            </Button>
          </Link>

        </div>
      </div>
    </section>
  );
};
