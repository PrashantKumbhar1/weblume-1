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
import emailjs from "@emailjs/browser";

const Contact = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [service, setService] = useState("");
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;

    try {
      await emailjs.sendForm(
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
      transition={{ duration: 0.5 }}
      className="min-h-screen bg-background"
    >
      <Navbar />

      <main className="pt-32 pb-28">

        {/* HERO */}
        <section className="container mx-auto px-6 mb-24 text-center">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
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
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="p-8 rounded-2xl card-glow glow-border"
            >
              {isSubmitted ? (
                <div className="text-center py-12">
                  <CheckCircle className="w-10 h-10 mx-auto text-primary mb-4" />
                  <h3 className="text-2xl font-bold mb-2">
                    Message Sent!
                  </h3>
                  <p className="text-muted-foreground">
                    Thank you for reaching out.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">

                  {/* Name */}
                  <div className="space-y-2">
                    <Label>Name *</Label>
                    <Input
                      name="from_name"
                      required
                      placeholder="Your full name"
                      className="bg-white text-gray-900"
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
                      className="bg-white text-gray-900"
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
                      className="w-full h-10 px-3 rounded-lg bg-white text-gray-900 border"
                    >
                      <option value="">Select a service</option>
                      <option value="Portfolio Website">Portfolio Website</option>
                      <option value="Business Website">Business Website</option>
                      <option value="Website Revamp">Website Revamp</option>
                      <option value="Management System">Management System</option>
                      <option value="Other">Other</option>
                    </select>
                  </div>

                  {/* Conditional Field */}
                  {service === "Other" && (
                    <div className="space-y-2">
                      <Label>What do you need exactly? *</Label>
                      <Input
                        name="custom_requirement"
                        required
                        placeholder="Briefly describe your requirement"
                        className="bg-white text-gray-900"
                      />
                    </div>
                  )}

                  <Button type="submit" variant="hero" className="w-full group">
                    Send Message
                    <Send className="ml-2 group-hover:translate-x-1 transition" />
                  </Button>
                </form>
              )}
            </motion.div>

            {/* INFO */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="space-y-10"
            >
              {/* Heading Added */}
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
                  <a
                    href="mailto:weblumeofficial@gmail.com"
                    className="hover:text-primary transition"
                  >
                    weblumeofficial@gmail.com
                  </a>
                </div>

                <div className="flex flex-col gap-3">
                  <div className="flex items-center gap-4">
                    <Phone className="text-primary" />
                    <a
                      href="tel:+91 7208317436"
                      className="hover:text-primary transition"
                    >
                      +91 7208317436
                    </a>
                  </div>
                  <div className="flex items-center gap-4 ml-8">
                    <a
                      href="tel:+91 8779663354"
                      className="hover:text-primary transition"
                    >
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
