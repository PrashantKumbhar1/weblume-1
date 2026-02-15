import { motion } from "framer-motion";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { ProjectRail } from "@/components/work/ProjectRail";
import { projects } from "@/data/projects";

const Work = () => {
  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
      <Navbar />

      <main className="pt-28 pb-24">

        {/* HERO SECTION */}
        <section className="relative container mx-auto px-6 text-center mb-24">

          {/* Subtle background glow */}
          <div className="absolute inset-0 flex justify-center pointer-events-none">
            <div className="w-[600px] h-[400px] bg-emerald-500/10 blur-[120px] rounded-full" />
          </div>

          <div className="relative z-10 max-w-4xl mx-auto">

            {/* Small Top Label */}
            <motion.span
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="inline-block mb-6 px-4 py-2 text-xs tracking-widest uppercase
              rounded-full border border-emerald-400/30
              bg-emerald-500/10 text-emerald-300"
            >
              Selected Projects 🎯
            </motion.span>

            {/* Headline */}
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="font-display text-4xl sm:text-5xl md:text-6xl font-bold leading-tight"
            >
              Our Work Speaks.
              <br />
              <span className="text-emerald-400 drop-shadow-[0_0_20px_rgba(16,185,129,0.25)]">
                So We Don’t Have To.
              </span>
            </motion.h1>

            {/* Divider */}
            <motion.div
              initial={{ opacity: 0, scaleX: 0 }}
              animate={{ opacity: 1, scaleX: 1 }}
              transition={{ delay: 0.4, duration: 0.6 }}
              className="mt-8 w-24 h-[2px] mx-auto bg-emerald-400/40 rounded-full"
            />

            {/* Subtitle */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="text-lg md:text-xl text-white/75 mt-8 max-w-2xl mx-auto"
            >
              High-performance websites and Android applications built to perform,
              scale, and deliver measurable business results.
            </motion.p>

          </div>
        </section>

        {/* PROJECT RAIL */}
        <section className="container mx-auto px-6">
          <ProjectRail projects={projects} />
        </section>

      </main>

      <Footer />
    </motion.div>
  );
};

export default Work;
