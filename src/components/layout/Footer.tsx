import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Mail, MapPin, Phone, ArrowUpRight } from "lucide-react";

const footerLinks = {
  navigation: [
    { name: "Home", path: "/" },
    { name: "Services", path: "/services" },
    { name: "Work", path: "/work" },
    { name: "Connect", path: "/contact" },
  ],
  company: [
    { name: "About Us", path: "/about" },
    { name: "Contact", path: "/contact" },
    { name: "Privacy Policy", path: "/privacy" },
    { name: "Terms of Service", path: "/terms" },
  ],
};

const socialLinks = [
  { name: "Twitter", url: "#" },
  { name: "LinkedIn", url: "#" },
  { name: "Instagram", url: "#" },
  { name: "Dribbble", url: "#" },
];

export const Footer = () => {
  return (
    <footer className="relative border-t border-border/50 bg-background">
      {/* Glow effect at top */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-1/2 h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent" />

      <div className="container mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand Column */}
          <div className="lg:col-span-1">
            <Link to="/" className="flex items-center gap-2 mb-6 group">
              <div className="relative w-8 h-8 flex items-center justify-center">
                <div className="absolute inset-0 bg-primary/20 rounded-full blur-md" />
                <svg
                  viewBox="0 0 40 40"
                  className="w-8 h-8 relative z-10"
                  fill="none"
                >
                  <circle cx="20" cy="28" r="6" className="fill-primary" />
                  <path
                    d="M20 22V8"
                    className="stroke-primary"
                    strokeWidth="3"
                    strokeLinecap="round"
                  />
                  <path
                    d="M14 14C14 14 17 11 20 8C23 11 26 14 26 14"
                    className="stroke-primary"
                    strokeWidth="3"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
              <span className="font-display text-xl font-bold">Weblume</span>
            </Link>
            <p className="text-muted-foreground text-sm mb-6 max-w-xs">
              Helping professionals and small businesses bloom online with
              beautiful, affordable websites.
            </p>
            <div className="flex flex-col gap-3 text-sm text-muted-foreground">
              <a
                href="mailto:hello@weblume.com"
                className="flex items-center gap-2 hover:text-primary transition-colors"
              >
                <Mail size={16} />
                weblumeofficial@gmail.com
              </a>
              <a
                href="tel:+1234567890"
                className="flex items-center gap-2 hover:text-primary transition-colors"
              >
                <Phone size={16} />
                +91 7208317436 / +91 8779663354
              </a>
              <span className="flex items-center gap-2">
                <MapPin size={16} />
                Worldwide (Remote)
              </span>
            </div>
          </div>

          {/* Navigation Links */}
          <div>
            <h4 className="font-display font-semibold mb-6">Navigation</h4>
            <ul className="space-y-3">
              {footerLinks.navigation.map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    className="text-muted-foreground hover:text-foreground transition-colors text-sm link-underline inline-block"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company Links */}
          <div>
            <h4 className="font-display font-semibold mb-6">Company</h4>
            <ul className="space-y-3">
              {footerLinks.company.map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    className="text-muted-foreground hover:text-foreground transition-colors text-sm link-underline inline-block"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Social Links */}
          <div>
            <h4 className="font-display font-semibold mb-6">Connect</h4>
            <ul className="space-y-3">
              {socialLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-muted-foreground hover:text-primary transition-colors text-sm inline-flex items-center gap-1 group"
                  >
                    {link.name}
                    <ArrowUpRight
                      size={14}
                      className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform"
                    />
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-16 pt-8 border-t border-border/50 flex justify-center items-center">
          <p className="text-muted-foreground text-sm text-center">
            © {new Date().getFullYear()} Weblume. All rights reserved.
          </p>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-muted-foreground text-sm flex items-center gap-1"
          >
            
            <span className="text-primary animate-glow-pulse"></span>
            
          </motion.p>
        </div>
      </div>
    </footer>
  );
};
