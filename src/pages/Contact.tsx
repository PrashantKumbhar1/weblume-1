import { useState } from "react";
import { motion } from "framer-motion";
import {
  Send,
  Mail,
  Phone,
  MapPin,
  CheckCircle,
  Instagram,
  Linkedin,
  Twitter,
} from "lucide-react";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";
import { sendForm } from "@emailjs/browser";

const Contact = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [service, setService] = useState("");
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;

    try {
      await sendForm(
        "service_5jdl0qe",
        "template_gslyubr",
        form,
        "yhUFhbLOb8iCR-s_9"
      );

      setIsSubmitted(true);

      toast({
        title: "Message sent!",
        description: "We'll get back to you within 24 hours.",
      });

      form.reset();
      setService("");
    } catch (error) {
      toast({
        title: "Something went wrong",
        description: "Please try again later.",
      });
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="min-h-screen bg-background"
    >
      <Navbar />

      <main className="pt-32 pb-28">

        {/* HERO */}
        <section className="container mx-auto px-6 mb-24 text-center">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="font-display text-5xl md:text-6xl lg:text-7xl font-bold mb-6"
          >
            Let’s Start Your{" "}
            <span className="gradient-text">Digital Journey</span>
          </motion.h1>

          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Have a project in mind? We’d love to hear about it.
          </p>
        </section>

        {/* CONTENT */}
        <section className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 max-w-6xl mx-auto">

            {/* FORM */}
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="relative p-8 rounded-2xl bg-[#020617]/90 border border-white/10 backdrop-blur-xl overflow-hidden"
            >
              {/* premium glow */}
              <div className="absolute -top-20 -left-20 w-72 h-72 bg-emerald-500/10 blur-[120px]" />
              <div className="absolute -bottom-20 -right-20 w-72 h-72 bg-cyan-500/10 blur-[120px]" />

              {isSubmitted ? (
                <motion.div
                  initial={{ scale: 0.8, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  className="text-center py-12"
                >
                  <CheckCircle className="w-12 h-12 mx-auto text-emerald-400 mb-4" />
                  <h3 className="text-2xl font-bold mb-2">
                    Message Sent Successfully 🚀
                  </h3>
                  <p className="text-muted-foreground">
                    We’ll contact you within 24 hours.
                  </p>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6 relative z-10">

                  {/* Name */}
                  <div className="space-y-2">
                    <Label>Name *</Label>
                    <Input
                      name="from_name"
                      required
                      placeholder="Your full name"
                      className="bg-white text-gray-900 focus:ring-2 focus:ring-emerald-400 transition"
                    />
                  </div>

                  {/* Email */}
                  <div className="space-y-2">
                    <Label>Email *</Label>
                    <Input
                      name="from_email"
                      type="email"
                      required
                      placeholder="you@example.com"
                      className="bg-white text-gray-900 focus:ring-2 focus:ring-emerald-400 transition"
                    />
                  </div>

                  {/* Service */}
                  <div className="space-y-2">
                    <Label>What do you need? *</Label>
                    <select
                      name="service"
                      required
                      value={service}
                      onChange={(e) => setService(e.target.value)}
                      className="w-full h-10 px-3 rounded-lg bg-white text-gray-900 border focus:ring-2 focus:ring-emerald-400 transition"
                    >
                      <option value="">Select a service</option>
                      <option value="Portfolio Website">Portfolio Website</option>
                      <option value="Business Website">Business Website</option>
                      <option value="Website Revamp">Website Revamp</option>
                      <option value="Management System">Management System</option>

                      {/* NEW SERVICES */}
                      <option value="Android App Development">Android App Development</option>
                      <option value="UI/UX Design">UI/UX Design</option>

                      <option value="Other">Other</option>
                    </select>
                  </div>

                  {/* Conditional */}
                  {service === "Other" && (
                    <div className="space-y-2">
                      <Label>What do you need exactly? *</Label>
                      <Input
                        name="custom_requirement"
                        required
                        placeholder="Briefly describe your requirement"
                        className="bg-white text-gray-900 focus:ring-2 focus:ring-emerald-400"
                      />
                    </div>
                  )}

                  {/* BUTTON */}
                  <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }}>
                    <Button type="submit" className="w-full text-lg py-6 group">
                      Send Message
                      <Send className="ml-2 group-hover:translate-x-1 transition" />
                    </Button>
                  </motion.div>
                </form>
              )}
            </motion.div>

            {/* INFO */}
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="space-y-10"
            >
              <div>
                <h2 className="font-display text-2xl font-bold mb-2">
                  Get in Touch
                </h2>
                <p className="text-muted-foreground">
                  Reach out through any channel below.
                </p>
              </div>

              <div className="space-y-6">

                <div className="flex gap-4 items-center hover:text-emerald-400 transition">
                  <Mail className="text-primary" />
                  <a href="mailto:weblumeofficial@gmail.com">
                    weblumeofficial@gmail.com
                  </a>
                </div>

                <div className="flex flex-col gap-3">
                  <div className="flex items-center gap-4 hover:text-emerald-400 transition">
                    <Phone className="text-primary" />
                    <a href="tel:+917208317436">
                      +91 7208317436
                    </a>
                  </div>
                  <div className="flex items-center gap-4 ml-8 hover:text-emerald-400 transition">
                    <a href="tel:+918779663354">
                      / +91 8779663354
                    </a>
                  </div>
                </div>

                <div className="flex gap-4 items-center">
                  <MapPin className="text-primary" />
                  <span>Remote — Worldwide</span>
                </div>
              </div>

              {/* SOCIAL */}
              <div>
                <h3 className="font-display font-semibold mb-4">
                  Connect with us
                </h3>

                <div className="flex gap-6">

                  {/* Instagram */}
                  <motion.a
                    whileHover={{ y: -4, scale: 1.15 }}
                    href="https://www.instagram.com/weblume2026?utm_source=qr&igsh=Z2d6dHJ3M2gzcjE3"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-emerald-400 transition"
                  >
                    <Instagram />
                  </motion.a>

                  {/* LinkedIn */}
                  <motion.a
                    whileHover={{ y: -4, scale: 1.15 }}
                    href="https://linkedin.com/in/YOUR_ID"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-emerald-400 transition"
                  >
                    <Linkedin />
                  </motion.a>

                  {/* Twitter */}
                  <motion.a
                    whileHover={{ y: -4, scale: 1.15 }}
                    href="https://twitter.com/YOUR_ID"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-emerald-400 transition"
                  >
                    <Twitter />
                  </motion.a>

                </div>
              </div>

            </motion.div>

          </div>
        </section>
      </main>

      <Footer />
    </motion.div>
  );
};

export default Contact;
