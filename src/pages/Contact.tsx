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

const Contact = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [service, setService] = useState("");
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitted(true);
    toast({
      title: "Message sent!",
      description: "We'll get back to you within 24 hours.",
    });
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="min-h-screen bg-background"
    >
      <Navbar />

      <main className="pt-28 pb-28">
        {/* Hero */}
        <section className="container mx-auto px-6 mb-20">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl mx-auto text-center"
          >
            <span className="text-primary font-display font-medium text-sm uppercase tracking-wider mb-4 block">
              Contact Us
            </span>
            <h1 className="font-display text-5xl md:text-6xl lg:text-7xl font-bold mb-6">
              Let’s Start Your{" "}
              <span className="gradient-text">Digital Journey</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Have a project in mind? We’d love to hear about it.
            </p>
          </motion.div>
        </section>

        {/* Content */}
        <section className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 max-w-6xl mx-auto">
            {/* FORM */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="p-8 rounded-2xl card-glow glow-border">
                {isSubmitted ? (
                  <div className="text-center py-12">
                    <div className="w-20 h-20 mx-auto rounded-full bg-primary/20 flex items-center justify-center mb-6">
                      <CheckCircle className="w-10 h-10 text-primary" />
                    </div>
                    <h3 className="font-display text-2xl font-bold mb-3">
                      Message Sent!
                    </h3>
                    <p className="text-muted-foreground">
                      Thank you for reaching out. We’ll be in touch soon.
                    </p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    {/* Name */}
                    <div className="space-y-2">
                      <Label>Name *</Label>
                      <Input
                        required
                        placeholder="Your full name"
                        className="bg-white text-gray-900 placeholder:text-gray-400"
                      />
                    </div>

                    {/* Email */}
                    <div className="space-y-2">
                      <Label>Email *</Label>
                      <Input
                        type="email"
                        required
                        placeholder="you@example.com"
                        className="bg-white text-gray-900 placeholder:text-gray-400"
                      />
                    </div>

                    {/* Service */}
                    <div className="space-y-2">
                      <Label>What do you need? *</Label>
                      <select
                        required
                        value={service}
                        onChange={(e) => setService(e.target.value)}
                        className="w-full h-10 px-3 rounded-lg bg-white text-gray-900 border border-border/50 focus:ring-1 focus:ring-primary"
                      >
                        <option value="">Select a service</option>
                        <option value="portfolio">Portfolio Website</option>
                        <option value="business">Business Website</option>
                        <option value="website">Website Revamp</option>
                        <option value="management-system">Management System</option>
                        <option value="other">Other</option>
                      </select>
                    </div>

                    {/* Conditional */}
                    {service === "other" && (
                      <div className="space-y-2">
                        <Label>What do you need exactly?</Label>
                        <Input
                          placeholder="Briefly describe your requirement"
                          className="bg-white text-gray-900 placeholder:text-gray-400"
                        />
                      </div>
                    )}

                    <Button type="submit" variant="hero" className="w-full group">
                      Send Message
                      <Send className="ml-2 group-hover:translate-x-1 transition" />
                    </Button>
                  </form>
                )}
              </div>
            </motion.div>

            {/* INFO */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="space-y-10"
            >
              <div>
                <h2 className="font-display text-2xl font-bold mb-2">
                  Get in Touch
                </h2>
                <p className="text-muted-foreground">
                  Reach out through any of the channels below.
                </p>
              </div>

              <div className="space-y-6">
                <div className="flex gap-4 items-center">
                  <Mail className="text-primary" />
                  <span>hello@weblume.com</span>
                </div>
                <div className="flex gap-4 items-center">
                  <Phone className="text-primary" />
                  <span>+1 (234) 567-890</span>
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
                  <a href="#" className="hover:text-primary transition">
                    <Instagram />
                  </a>
                  <a href="#" className="hover:text-primary transition">
                    <Linkedin />
                  </a>
                  <a href="#" className="hover:text-primary transition">
                    <Twitter />
                  </a>
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
