import { motion } from "framer-motion";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { ProjectRail } from "@/components/work/ProjectRail";
import { projects } from "@/data/projects";

const Work = () => {
  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
      <Navbar />

      <main className="pt-32 pb-24">
        <section className="container mx-auto px-6 text-center mb-20">
          <h1 className="text-4xl sm:text-5xl md:text-7xl">
            Work That Speaks,{" "}
            <span className="gradient-text">Before We Do</span>
          </h1>
          <p className="text-base sm:text-lg text-white/80 mt-4">
            Handcrafted digital experiences designed to convert attention into growth.
          </p>
        </section>

        <ProjectRail projects={projects} />
      </main>

      <Footer />
    </motion.div>
  );
};

export default Work;
