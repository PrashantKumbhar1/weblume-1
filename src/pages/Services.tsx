import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import {
  Globe,
  Palette,
  Rocket,
  Settings,
  Smartphone,
  Layers,
  ArrowRight,
  Check,
} from "lucide-react";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";

const services = [
  {
    icon: Palette,
    title: "Portfolio Website",
    bestFor: "Individuals & Freelancers",
    description:
      "Premium personal websites designed to showcase your work, expertise, and unique identity with clarity and impact.",
    features: [
      "Modern & elegant UI design",
      "Project & skill showcase",
      "Integrated contact options",
      "Fully responsive layout",
      "Strong personal branding",
    ],
  },
  {
    icon: Globe,
    title: "Business Website",
    bestFor: "Startups & Small Businesses",
    description:
      "Professional websites built to establish credibility, attract customers, and convert visitors into real business growth.",
    features: [
      "Strong digital brand presence",
      "Service & product presentation",
      "Lead & inquiry integration",
      "Optimized for all devices",
      "Conversion-focused structure",
    ],
  },
  {
    icon: Rocket,
    title: "Website Revamp",
    bestFor: "Existing Businesses",
    description:
      "Transform outdated websites into fast, modern, high-performing digital experiences.",
    features: [
      "Complete UI redesign",
      "Improved user journey",
      "Performance optimization",
      "Modern content structure",
      "Mobile & browser optimized",
    ],
  },
  {
    icon: Settings,
    title: "Management System",
    bestFor: "Gyms, Hotels, Libraries & More",
    description:
      "Custom-built systems to streamline operations, automate tasks, and improve organizational efficiency.",
    features: [
      "Admin dashboard access",
      "Secure data management",
      "Role-based permissions",
      "Workflow automation",
      "Scalable architecture",
    ],
  },
  {
    icon: Smartphone,
    title: "Android App Development",
    bestFor: "Businesses & Startups",
    description:
      "Custom Android applications engineered for performance, intuitive user experience, and long-term scalability.",
    features: [
      "Custom UI/UX design",
      "High-performance architecture",
      "API & backend integration",
      "Play Store deployment support",
      "Ongoing maintenance & updates",
    ],
  },
  {
    icon: Layers,
    title: "Web + Android App Solution",
    bestFor: "Growing Brands",
    description:
      "A unified digital ecosystem combining powerful websites and mobile apps for seamless brand expansion.",
    features: [
      "Website + Mobile app sync",
      "Shared backend infrastructure",
      "Consistent branding",
      "Real-time data integration",
      "Future-ready scalable system",
    ],
  },
];

const Services = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="min-h-screen"
    >
      <Navbar />

      <main className="pt-32 pb-24">

        {/* HERO */}
        <section className="container mx-auto px-6 mb-32 text-center">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-block text-sm uppercase tracking-wider text-emerald-400 mb-4"
          >
            Our Expertise 🚀
          </motion.span>

          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            className="font-display text-5xl md:text-7xl font-bold mb-6"
          >
            Digital Products That{" "}
            <span className="gradient-animated">Drive Real Growth</span>
          </motion.h1>

          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            From high-converting websites to powerful Android applications —
            we design and build digital experiences that scale with your vision.
          </p>
        </section>

        {/* SERVICES GRID */}
        <section className="container mx-auto px-6">
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-10">

            {services.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                whileHover={{ y: -12, scale: 1.02 }}
                transition={{ duration: 0.5, delay: index * 0.08 }}
                className="
                  relative rounded-3xl p-8
                  bg-[#020617]/90
                  border border-white/10
                  hover:border-emerald-400/50
                  transition-all duration-500
                  group
                  overflow-hidden
                "
              >
                {/* Animated glow */}
                <div className="
                  absolute inset-0 rounded-3xl
                  opacity-0 group-hover:opacity-100
                  transition duration-700
                  bg-gradient-to-br from-emerald-400/10 via-cyan-400/10 to-blue-400/10
                  blur-2xl
                " />

                <div className="relative z-10">
                  {/* Icon */}
                  <div className="
                    mb-6 w-14 h-14 rounded-xl
                    bg-gradient-to-br from-emerald-400/20 to-cyan-400/20
                    flex items-center justify-center
                    group-hover:rotate-6 group-hover:scale-110
                    transition-all duration-500
                  ">
                    <service.icon className="w-7 h-7 text-emerald-400" />
                  </div>

                  {/* Title */}
                  <h3 className="text-xl font-semibold mb-1">
                    {service.title}
                  </h3>

                  {/* Best For Badge */}
                  <span className="
                    inline-block mb-4 px-3 py-1
                    text-xs font-medium rounded-full
                    bg-emerald-400/10 text-emerald-400
                  ">
                    Best for: {service.bestFor}
                  </span>

                  {/* Description */}
                  <p className="text-muted-foreground mb-6 leading-relaxed">
                    {service.description}
                  </p>

                  {/* Features */}
                  <ul className="space-y-2">
                    {service.features.map((feature, i) => (
                      <motion.li
                        key={feature}
                        initial={{ opacity: 0, x: -10 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: i * 0.05 }}
                        className="flex items-center gap-2 text-sm text-muted-foreground"
                      >
                        <Check className="w-4 h-4 text-emerald-400" />
                        {feature}
                      </motion.li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}

          </div>
        </section>

        {/* CTA */}
        <section className="container mx-auto px-6 mt-40">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="
              rounded-3xl p-16 text-center
              bg-gradient-to-br from-emerald-500/10 via-cyan-500/10 to-blue-500/10
              border border-white/10
            "
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Let’s Build Something That{" "}
              <span className="gradient-animated">Scales</span>
            </h2>

            <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-10">
              Strategy , Design & Development — all under one roof.
            </p>

            <Link to="/contact">
              <Button size="xl" className="magnetic">
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

export default Services;
