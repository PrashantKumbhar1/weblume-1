import { motion } from "framer-motion";
import { DollarSign, Zap, Heart, Shield } from "lucide-react";

const features = [
  {
    icon: DollarSign,
    title: "Affordable Excellence",
    description:
      "Premium quality web & android apps at prices that won't break the bank. We believe great design should be accessible to everyone.",
  },
  {
    icon: Zap,
    title: "Lightning Fast",
    description:
      "Quick turnaround times without compromising quality. Get your website up and running in days, not months.",
  },
  {
    icon: Heart,
    title: "Personal Touch",
    description:
      "Every project gets our full attention. We treat your business like it's our own, because your success is our success.",
  },
  {
    icon: Shield,
    title: "Built to Last",
    description:
      "Modern, secure code that stands the test of time. Your website as well as App will be fast, reliable, and future-proof.",
  },
];

export const WhyChooseUs = () => {
  return (
    <section className="py-32 relative">
      <div className="container mx-auto px-6 relative z-10">

        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center text-4xl md:text-5xl font-bold mb-20"
        >
          Growing Together,{" "}
          <span className="gradient-animated">Blooming Better</span>
        </motion.h2>

        <div className="grid lg:grid-cols-2 gap-16 items-center">

          {/* BUSINESS TRAJECTORY */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="rounded-3xl bg-[#020617]/80 border border-white/10 p-10"
          >
            <p className="text-sm text-muted-foreground mb-6">
              Your business growth trajectory with Weblume
            </p>

            <div className="flex items-end gap-3 h-40">
              {[30, 50, 45, 70, 85, 100].map((h, i) => (
                <motion.div
                  key={i}
                  initial={{ height: 0 }}
                  whileInView={{ height: `${h}%` }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: i * 0.1 }}
                  className="flex-1 rounded-xl bg-gradient-to-t from-emerald-400 to-cyan-400"
                />
              ))}
            </div>
          </motion.div>

          {/* FEATURE CARDS */}
          <div className="grid sm:grid-cols-2 gap-6">
            {features.map((f, i) => (
              <motion.div
                key={f.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                whileHover={{ y: -6 }}
                transition={{ duration: 0.4, delay: i * 0.1 }}
                className="rounded-2xl bg-[#020617]/90 border border-white/10 p-6 hover:border-emerald-400/40 transition"
              >
                <f.icon className="w-7 h-7 text-emerald-400 mb-4" />
                <h3 className="font-semibold mb-2">{f.title}</h3>
                <p className="text-sm text-muted-foreground">{f.description}</p>
              </motion.div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
};

