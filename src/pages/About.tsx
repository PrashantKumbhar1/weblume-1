import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight, Sprout, Target, Heart, Users } from "lucide-react";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";

const values = [
  {
    icon: Sprout,
    title: "Growth-Driven Thinking",
    description:
      "Every project is built with one objective — measurable growth. Design and development are always aligned with business outcomes.",
  },
  {
    icon: Target,
    title: "Precision & Quality",
    description:
      "We obsess over details. From user experience to performance optimization, every element is intentional.",
  },
  {
    icon: Heart,
    title: "Long-Term Partnership",
    description:
      "We don't just deliver projects — we build relationships that evolve as your business grows.",
  },
  {
    icon: Users,
    title: "Client-Centered Execution",
    description:
      "Your goals guide our process. Strategy, design, and development revolve around what moves your business forward.",
  },
];

const About = () => {
  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
      <Navbar />

      {/* ================= HERO (FULL SCREEN CENTERED) ================= */}
      <section className="min-h-[90vh] flex items-center justify-center pt-24 pb-10 text-center relative">
        <div className="container mx-auto px-6">

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="max-w-4xl mx-auto"
          >
            <span className="inline-block mb-6 px-5 py-2 text-xs tracking-widest uppercase
              rounded-full border border-emerald-400/30
              bg-emerald-500/10 text-emerald-300">
              About Weblume
            </span>

            <h1 className="font-display text-4xl md:text-6xl lg:text-7xl font-bold leading-tight mb-6">
              Building Digital Experiences
              <br />
              <span className="text-emerald-400">
                That Perform & Scale
              </span>
            </h1>

            <p className="text-lg md:text-xl text-white/70 max-w-2xl mx-auto">
              We design and develop high-performance websites and Android
              applications that transform ideas into scalable digital products.
            </p>
          </motion.div>

        </div>
      </section>

      <main className="pb-24">

        {/* ================= WHY WEBLUME ================= */}
        <section className="container mx-auto px-6 mb-32">
          <div className="grid lg:grid-cols-2 gap-16 items-center max-w-6xl mx-auto">

            {/* TEXT */}
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="font-display text-3xl md:text-4xl font-bold mb-8">
                Why <span className="text-emerald-400">Weblume</span> Exists
              </h2>

              <div className="space-y-5 text-white/70 leading-relaxed">
                <p>
                  Weblume was founded with a simple but powerful belief —
                  ambitious businesses deserve digital platforms that match
                  their vision.
                </p>

                <p>
                  Too often, promising startups and small businesses struggle
                  with outdated websites, poor performance, or generic designs
                  that fail to convert visitors into customers.
                </p>

                <p>
                  We solve that problem by building refined, modern,
                  performance-driven websites and Android applications
                  engineered for usability, scalability, and growth.
                </p>

                <p>
                  Our work combines strategy, design precision, and clean,
                  scalable code — delivering digital systems that not only look
                  exceptional but perform exceptionally.
                </p>
              </div>
            </motion.div>

            {/* VISUAL */}
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="relative"
            >
              <div className="relative aspect-square rounded-3xl border border-white/10 bg-[#020617]/80 overflow-hidden">

                {/* glow */}
                <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/10 via-cyan-500/10 to-blue-500/10" />

                <div className="absolute inset-0 flex items-center justify-center">
                  <motion.div
                    animate={{
                      scale: [1, 1.08, 1],
                      opacity: [0.4, 0.7, 0.4],
                    }}
                    transition={{
                      duration: 5,
                      repeat: Infinity,
                      ease: "easeInOut",
                    }}
                    className="w-72 h-72 rounded-full bg-emerald-400/20 blur-3xl"
                  />
                </div>

                <div className="relative z-10 flex items-center justify-center h-full text-center px-10">
                  <p className="text-2xl font-semibold text-emerald-300">
                    Strategy × Design × Engineering
                  </p>
                </div>
              </div>
            </motion.div>

          </div>
        </section>

        {/* ================= VALUES ================= */}
        <section className="container mx-auto px-6 mb-32">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-20"
          >
            <h2 className="font-display text-4xl md:text-5xl font-bold mb-4">
              Our <span className="text-emerald-400">Principles</span>
            </h2>

            <p className="text-white/70 max-w-2xl mx-auto">
              The foundation behind every website and application we build.
            </p>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                whileHover={{ y: -8 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="relative rounded-3xl p-8 bg-[#020617]/90 border border-white/10 hover:border-emerald-400/40 transition-all"
              >
                <div className="mb-6 w-14 h-14 rounded-xl bg-gradient-to-br from-emerald-400/20 to-cyan-400/20 flex items-center justify-center">
                  <value.icon className="w-7 h-7 text-emerald-400" />
                </div>

                <h3 className="font-semibold text-lg mb-3">
                  {value.title}
                </h3>

                <p className="text-sm text-white/70 leading-relaxed">
                  {value.description}
                </p>
              </motion.div>
            ))}
          </div>
        </section>

        {/* ================= CTA ================= */}
        <section className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-3xl mx-auto"
          >
            <h2 className="font-display text-4xl md:text-5xl font-bold mb-6">
              Let’s Build Something
              <span className="text-emerald-400"> Meaningful</span>
            </h2>

            <p className="text-white/70 text-lg mb-10">
              Whether it's a website or an Android application, we help transform
              your ideas into scalable digital products.
            </p>

            <Link to="/contact">
              <Button size="xl">
                Start Your Project
                <ArrowRight className="ml-2" />
              </Button>
            </Link>
          </motion.div>
        </section>

      </main>

      <Footer />
    </motion.div>
  );
};

export default About;
