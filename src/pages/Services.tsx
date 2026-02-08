import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import {
  Globe,
  Palette,
  Rocket,
  Settings,
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
      "Perfect for individuals, freelancers, and creators who want to showcase their work and personal brand online.",
    features: [
      "Clean and modern design",
      "Showcase your work & skills",
      "Simple contact options",
      "Mobile-friendly layout",
      "Personal branding focus",
    ],
  },
  {
    icon: Globe,
    title: "Business Website",
    bestFor: "Small Businesses",
    description:
      "Professional websites designed to build trust, attract customers, and grow your business online.",
    features: [
      "Professional brand presence",
      "Clear services & information",
      "Customer inquiry setup",
      "Optimized for all devices",
      "Conversion-focused layout",
    ],
  },
  {
    icon: Rocket,
    title: "Website Revamp",
    bestFor: "Existing Websites",
    description:
      "Redesign and upgrade your existing website to make it faster, modern, and more effective.",
    features: [
      "Modern refreshed UI",
      "Improved user experience",
      "Better speed & performance",
      "Updated content structure",
      "Mobile & browser ready",
    ],
  },
  {
    icon: Settings,
    title: "Management System",
    bestFor: "Gyms, Hotels, Libraries",
    description:
      "Custom-built systems to manage daily operations efficiently and reduce manual work.",
    features: [
      "Easy data management",
      "Admin dashboard access",
      "Role-based permissions",
      "Automated workflows",
      "Scalable for growth",
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
            Our Services 🌱
          </motion.span>

          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            className="font-display text-5xl md:text-7xl font-bold mb-6"
          >
            Everything You Need to{" "}
            <span className="gradient-animated">Bloom Online</span>
          </motion.h1>

          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Strategy, design, and development — perfectly aligned to grow your
            digital presence.
          </p>
        </section>

        {/* SERVICES GRID */}
        <section className="container mx-auto px-6">
          <div className="grid sm:grid-cols-2 gap-10">

            {services.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                whileHover={{ y: -10 }}
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
                {/* Hover glow */}
                <div className="
                  absolute inset-0 rounded-3xl
                  opacity-0 group-hover:opacity-100
                  transition duration-500
                  bg-gradient-to-br from-emerald-400/10 via-cyan-400/10 to-blue-400/10
                  blur-xl
                " />

                <div className="relative z-10">
                  {/* Icon */}
                  <div className="
                    mb-6 w-14 h-14 rounded-xl
                    bg-gradient-to-br from-emerald-400/20 to-cyan-400/20
                    flex items-center justify-center
                    group-hover:scale-110
                    transition-transform
                  ">
                    <service.icon className="w-7 h-7 text-emerald-400" />
                  </div>

                  {/* Title */}
                  <h3 className="text-xl font-semibold mb-1">
                    {service.title}
                  </h3>

                  {/* Best for badge */}
                  <span className="
                    inline-block mb-4 px-3 py-1
                    text-xs font-medium rounded-full
                    bg-emerald-400/10 text-emerald-400
                  ">
                    Best for: {service.bestFor}
                  </span>

                  {/* Description */}
                  <p className="text-muted-foreground mb-6">
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
                        transition={{ delay: i * 0.06 }}
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
              <span className="gradient-animated">Grows 🚀</span>
            </h2>

            <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-10">
              Clear strategy. Beautiful design. Powerful execution.
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
