import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Instagram, ArrowUp } from "lucide-react";
import { Link } from "react-router-dom";
import anriLogo from "@/assets/logo.png";

export default function Footer() {
  const scrollTop = () => window.scrollTo({ top: 0, behavior: "smooth" });
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  const footerLinks = [
    {
      title: "Services",
      links: [
        { label: "Web Development", href: "/services" },
        { label: "App Development", href: "/services" },
        { label: "Digital Marketing", href: "/services" },
        { label: "IT Solutions", href: "/services" },
      ],
    },
    {
      title: "Company",
      links: [
        { label: "About Us", href: "/about" },
        { label: "Portfolio", href: "/portfolio" },
        { label: "Testimonials", href: "/testimonials" },
        { label: "Contact", href: "/contact" },
      ],
    },
    {
      title: "Support",
      links: [
        { label: "Help Center", href: "/contact" },
        { label: "Privacy Policy", href: "#" },
        { label: "Terms of Service", href: "#" },
      ],
    },
  ];

  return (
    <footer className="border-t border-border/50 bg-card/30" ref={ref}>
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-16">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
            className="sm:col-span-2 lg:col-span-1"
          >
            <Link to="/" className="flex items-center gap-2 mb-4">
              <img src={anriLogo} alt="ANRI Solution" className="h-10 w-auto object-contain" />
            </Link>
            <p className="text-muted-foreground text-sm leading-relaxed mb-6">
              Transforming businesses through innovative digital solutions. Your trusted technology partner.
            </p>
            <div className="flex gap-3">
              <motion.a
                href="https://www.instagram.com/anrisolution.com1?igsh=bTUybGV6dTJxOG9t"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.15, y: -2 }}
                whileTap={{ scale: 0.95 }}
                className="w-10 h-10 rounded-full border border-border hover:border-primary/50 flex items-center justify-center text-muted-foreground hover:text-primary transition-colors"
                aria-label="Follow us on Instagram"
              >
                <Instagram size={18} />
              </motion.a>
            </div>
          </motion.div>

          {/* Links */}
          {footerLinks.map((col, i) => (
            <motion.div
              key={col.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.1 * (i + 1) }}
            >
              <h4 className="font-display font-bold text-foreground mb-4">{col.title}</h4>
              <ul className="space-y-3">
                {col.links.map((link) => (
                  <li key={link.label}>
                    <Link to={link.href} className="text-sm text-muted-foreground hover:text-primary hover:translate-x-1 transition-all inline-block">
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="border-t border-border/50 mt-12 pt-8 flex flex-col items-center gap-4"
        >
          <div className="w-full flex flex-col sm:flex-row items-center justify-between gap-4">
            <p className="text-sm text-muted-foreground">
              © 2025 ANRI Solution. All rights reserved.
            </p>
            <motion.button
              onClick={scrollTop}
              whileHover={{ scale: 1.1, y: -3 }}
              whileTap={{ scale: 0.9 }}
              className="p-3 rounded-full border border-border hover:border-primary/50 text-muted-foreground hover:text-primary transition-colors"
            >
              <ArrowUp size={18} />
            </motion.button>
          </div>
          <p className="text-xs text-muted-foreground/60">
            Website crafted by{" "}
            <a href="https://anexaa.com" target="_blank" rel="noopener noreferrer" className="text-primary/70 hover:text-primary hover:underline font-medium transition-colors">
              Anexaa IT Company
            </a>
          </p>
        </motion.div>
      </div>
    </footer>
  );
}