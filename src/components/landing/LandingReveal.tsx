import { motion, useMotionValue, useTransform } from "framer-motion";
import { useEffect, useState, ReactNode } from "react";
import logo from "@/assets/logo.svg";

interface Props {
  children: ReactNode;
}

export default function LandingReveal({ children }: Props) {
  const [done, setDone] = useState(false);

  // mouse glow effect
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const glowX = useTransform(mouseX, [0, window.innerWidth], ["-20%", "120%"]);
  const glowY = useTransform(mouseY, [0, window.innerHeight], ["-20%", "120%"]);

  useEffect(() => {
    const timer = setTimeout(() => setDone(true), 3800);
    return () => clearTimeout(timer);
  }, []);

  const handleMouse = (e: any) => {
    mouseX.set(e.clientX);
    mouseY.set(e.clientY);
  };

  if (done) return <>{children}</>;

  return (
    <motion.div
      onMouseMove={handleMouse}
      className="fixed inset-0 z-[9999] flex items-center justify-center bg-black overflow-hidden"
      initial={{ opacity: 1 }}
      animate={{ opacity: 0 }}
      transition={{ delay: 3.2, duration: 0.7 }}
    >
      {/* gradient bg */}
      <div className="absolute inset-0 bg-gradient-to-br from-black via-[#020617] to-black" />

      {/* moving glow following mouse */}
      <motion.div
        style={{ left: glowX, top: glowY }}
        className="absolute w-[500px] h-[500px] rounded-full bg-emerald-500/20 blur-[120px] pointer-events-none"
      />

      {/* cinematic center glow */}
      <motion.div
        className="absolute w-[700px] h-[700px] rounded-full bg-cyan-500/10 blur-[160px]"
        animate={{ scale: [1, 1.15, 1], opacity: [0.3, 0.55, 0.3] }}
        transition={{ duration: 6, repeat: Infinity }}
      />

      {/* content */}
      <div className="relative z-10 text-center px-6">

        {/* LOGO */}
        <motion.img
          src={logo}
          alt="Weblume"
          className="h-24 md:h-32 mx-auto mb-6 mix-blend-lighten"
          initial={{ opacity: 0, scale: 0.7, y: 40 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        />

        {/* BRAND NAME */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.8 }}
          className="
            text-4xl md:text-6xl lg:text-7xl
            tracking-[0.25em]
            text-white font-semibold
          "
          style={{
            fontFamily:
              "Inter, SF Pro Display, system-ui, sans-serif",
          }}
        >
          WEBLUME
        </motion.h1>

        {/* WORDS */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.9 }}
          className="flex justify-center gap-8 md:gap-14 mt-10"
        >
          {["Precision", "Performance", "Presence"].map((w, i) => (
            <motion.span
              key={w}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1 + i * 0.2 }}
              className="
                text-lg md:text-2xl lg:text-3xl
                bg-gradient-to-r from-white via-emerald-300 to-cyan-300
                bg-clip-text text-transparent
                font-medium tracking-wide
              "
            >
              {w}
            </motion.span>
          ))}
        </motion.div>

        {/* glow line */}
        <motion.div
          initial={{ scaleX: 0, opacity: 0 }}
          animate={{ scaleX: 1, opacity: 1 }}
          transition={{ delay: 1.7, duration: 0.8 }}
          className="
            mx-auto mt-8 mb-6
            h-[2px] w-44
            bg-gradient-to-r from-transparent via-emerald-400 to-transparent
          "
        />

        {/* subtitle */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.85 }}
          transition={{ delay: 2.2, duration: 0.8 }}
          className="text-white/70 text-sm md:text-lg tracking-wide"
        >
          Designing the Future of your Digital Presence
        </motion.p>
      </div>
    </motion.div>
  );
}
