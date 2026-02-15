import { motion } from "framer-motion";
import {
  Globe,
  Palette,
  Rocket,
  Code,
  Smartphone,
  Layers,
} from "lucide-react";

const services = [
  {
    icon: Code,
    title: "Web Development 💻",
    desc: "Modern, scalable, and secure web applications built with performance and long-term growth in mind.",
  },
  {
    icon: Smartphone,
    title: "Android App Development 📱",
    desc: "Custom Android applications designed for seamless user experience, performance, and business scalability.",
  },

  {
    icon: Palette,
    title: "Portfolio Sites 🖼️",
    desc: "Premium, custom-crafted portfolio websites that showcase your expertise with elegance and impact.",
  },
  
  {
    icon: Rocket,
    title: "Landing Pages ⚡",
    desc: "Conversion-focused landing pages strategically designed to drive action and maximize ROI.",
  },
  
  {
    icon: Layers,
    title: "Web + Android App Solutions 🚀",
    desc: "Integrated digital ecosystems combining powerful websites and mobile apps for unified brand growth.",
  },
  
  {
    icon: Globe,
    title: "Website Design 🎨",
    desc: "High-converting, responsive websites crafted to elevate your brand and turn visitors into customers.",
  },
  
];

export const ServicesPreview = () => {
  return (
    <section className="py-32 relative">
      <div className="container mx-auto px-6">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center text-4xl md:text-5xl font-bold mb-20"
        >
          Digital Solutions That{" "}
          <span className="text-emerald-400">Accelerate Growth</span>
        </motion.h2>

        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {services.map((s, i) => (
            <motion.div
              key={s.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              whileHover={{ y: -10 }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="
                relative rounded-2xl p-8
                bg-gradient-to-br from-white/10 to-white/5
                border border-white/15
                shadow-[0_20px_60px_-15px_rgba(0,0,0,0.6)]
                hover:border-emerald-400/50
                hover:-translate-y-2
                transition-all duration-500
              "
            >
              <s.icon className="w-8 h-8 text-emerald-400 mb-4" />
              <h3 className="text-xl font-semibold mb-3">
                {s.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {s.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
