import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight, Sprout, Target, Heart, Users } from "lucide-react";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";

const values = [
  {
    icon: Sprout,
    title: "Growth Mindset",
    description:
      "We believe every business, no matter how small, deserves the chance to bloom. Your growth is our mission.",
  },
  {
    icon: Target,
    title: "Quality Focus",
    description:
      "We don't cut corners. Every pixel, every line of code is crafted with care and attention to detail.",
  },
  {
    icon: Heart,
    title: "Personal Touch",
    description:
      "We're not a faceless agency. We build relationships and treat every project like it's our own.",
  },
  {
    icon: Users,
    title: "Client Success",
    description:
      "Your success is our success. We measure our work by the results we help you achieve.",
  },
];

const About = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="min-h-screen bg-background"
    >
      <Navbar />
      <main className="pt-32 pb-20">
        {/* Hero Section */}
        <section className="container mx-auto px-6 mb-24">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl mx-auto text-center"
          >
            <span className="text-primary font-display font-medium text-sm uppercase tracking-wider mb-4 block">
              About Us
            </span>
            <h1 className="font-display text-5xl md:text-6xl lg:text-7xl font-bold mb-6">
              The Story Behind{" "}
              <span className="weblume-brand">Weblume</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              We're on a mission to help professionals and small businesses
              establish their digital presence without breaking the bank.
            </p>
          </motion.div>
        </section>

        {/* Story Section */}
        <section className="container mx-auto px-6 mb-24">
          <div className="grid lg:grid-cols-2 gap-16 items-center max-w-6xl mx-auto">
            {/* Content */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="font-display text-3xl md:text-4xl font-bold mb-6">
                From Seed to <span className="gradient-text">Bloom</span>
              </h2>
              <div className="space-y-4 text-muted-foreground">
                <p>
                  Weblume was founded with a clear purpose: to help ambitious individuals, startups, and growing businesses establish a strong and credible presence on the web.
                </p>

                <p>
                  We observed a common challenge — great ideas and capable teams often struggle to reach their audience due to poorly designed, slow, or outdated websites. 
                </p>

                <p>
                  Weblume exists to bridge that gap by delivering modern, performance-driven digital experiences that look refined and work flawlessly.
                </p>

                <p>
                  We specialize in crafting clean, functional, and conversion-focused websites built with modern technologies and thoughtful design.
                </p>

                <p>
                  Our approach balances quality, speed, and affordability — enabling businesses to scale confidently without unnecessary complexity or enterprise-level costs.
                </p>
                
              </div>
            </motion.div>

            {/* Visual */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="relative"
            >
              <div className="aspect-square rounded-2xl card-glow glow-border overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-bloom-teal/10 to-bloom-blue/10" />
                {/* Decorative bloom animation */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <motion.div
                    animate={{
                      scale: [1, 1.1, 1],
                      opacity: [0.5, 0.8, 0.5],
                    }}
                    transition={{
                      duration: 4,
                      repeat: Infinity,
                      ease: "easeInOut",
                    }}
                    className="w-64 h-64 rounded-full bg-primary/20 blur-3xl"
                  />
                </div>
                <div className="relative z-10 flex items-center justify-center h-full">
                  <svg
                    viewBox="0 0 120 120"
                    className="w-48 h-48"
                    fill="none"
                  >
                    <motion.circle
                      cx="60"
                      cy="85"
                      r="18"
                      className="fill-primary"
                      initial={{ scale: 0 }}
                      whileInView={{ scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.8, delay: 0.2 }}
                    />
                    <motion.path
                      d="M60 67V25"
                      className="stroke-primary"
                      strokeWidth="8"
                      strokeLinecap="round"
                      initial={{ pathLength: 0 }}
                      whileInView={{ pathLength: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.8, delay: 0.4 }}
                    />
                    <motion.path
                      d="M40 45C40 45 50 32 60 20C70 32 80 45 80 45"
                      className="stroke-primary"
                      strokeWidth="8"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      initial={{ pathLength: 0 }}
                      whileInView={{ pathLength: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.8, delay: 0.6 }}
                    />
                  </svg>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        
        {/* Values Section */}
        <section className="container mx-auto px-6 mb-32">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-20"
          >
          <h2 className="font-display text-4xl md:text-5xl font-bold mb-4">
            Our <span className="gradient-text">Values</span>

          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            The principles that shape how we think, design, and build.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
          {values.map((value, index) => (
          <motion.div
            key={value.title}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            whileHover={{ y: -10, scale: 1.02 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="
              relative rounded-3xl p-8
             bg-[#020617]/90
              border border-white/10
             hover:border-emerald-400/40
              transition-all
              group
            "
          >
          {/* Glow layer */}
          <div className="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition duration-500 bg-gradient-to-br from-emerald-400/10 via-cyan-400/10 to-blue-400/10 blur-xl" />

          {/* Icon */}
          <div className="relative z-10 mb-6 w-14 h-14 rounded-xl bg-gradient-to-br from-emerald-400/20 to-cyan-400/20 flex items-center justify-center">
            <value.icon className="w-7 h-7 text-emerald-400" />
          </div>

          {/* Content */}
          <div className="relative z-10">
            <h3 className="font-display text-lg font-semibold mb-3">
              {value.title}
            </h3>
            <p className="text-sm text-muted-foreground leading-relaxed">
              {value.description}
            </p>
          </div>
        </motion.div>
      ))}
    </div>
  </section>


        {/* CTA Section */}
        <section className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-3xl mx-auto"
          >
            <h2 className="font-founder text-4xl md:text-5xl font-bold mb-6">
              Ready to Grow Together?
            </h2>

            <p className="text-muted-foreground text-lg mb-8">
              We'd love to hear about your project and explore how we can help
              your business bloom online.
            </p>
            <Link to="/contact">
              <Button variant="hero" size="xl" className="group">
                Let's Connect
                <ArrowRight
                  size={20}
                  className="group-hover:translate-x-1 transition-transform"
                />
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
