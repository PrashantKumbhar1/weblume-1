import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";

export const CTASection = () => {
  return (
    <section className="py-32 relative overflow-hidden">
      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto text-center"
        >
          <Sparkles className="w-12 h-12 mx-auto text-emerald-400 mb-6" />

          <h2 className="font-founder text-4xl md:text-5xl font-bold mb-6">
            Ready to Grow Together?
          </h2>

          <p className="text-muted-foreground text-lg mb-10">
            Let’s build something meaningful that helps your business bloom 🌱
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link to="/contact">
              <Button variant="hero" size="xl" className="group">
                Start Your Project
                <ArrowRight className="ml-2 group-hover:translate-x-1 transition" />
              </Button>
            </Link>

            <Link to="/team">
              <Button variant="outline" size="xl">
                Meet the Team
              </Button>
            </Link>
          </div>

          {/* Trust indicators */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
            className="mt-12 flex flex-wrap items-center justify-center gap-8 text-sm text-muted-foreground"
          >
            <span className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-primary" />
              Free Consultation
            </span>
            <span className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-primary" />
              No Hidden Fees
            </span>
            <span className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-primary" />
              100% Satisfaction Guarantee
            </span>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};
