import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import {  Mail } from "lucide-react";
import asrajImage from "../assets/asraj.jpeg"; // Import the image

const founders = [
  {
    name: "MKM Asraj",
    role: "Founder & CEO",
    image: asrajImage, // Use the imported image instead of placeholder
    bio: "Visionary leader with 2+ years in digital transformation, driving innovation and strategic growth across global markets.",
    email: "Asrajaaz4@gmail.com",
  },
  // You can add more founders here if needed
];

export default function FoundersSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="section-padding relative overflow-hidden">
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] rounded-full bg-accent/5 blur-[150px]" />

      <div className="max-w-7xl mx-auto relative" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-primary text-sm font-semibold uppercase tracking-widest">
            Leadership
          </span>
          <h2 className="font-display text-4xl sm:text-5xl font-bold mt-3 mb-4">
            Meet Our <span className="text-gradient">Founder</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            The visionaries behind ANRI Solution, committed to delivering digital excellence.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-10 max-w-4xl mx-auto">
          {founders.map((founder, i) => (
            <motion.div
              key={founder.name}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 + i * 0.15 }}
              className="glass-card glow-border rounded-2xl overflow-hidden group"
            >
              {/* Image */}
              <div className="relative h-72 overflow-hidden bg-secondary">
                <img
                  src={founder.image}
                  alt={founder.name}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-card via-card/40 to-transparent" />
              </div>

              {/* Details */}
              <div className="p-6 -mt-12 relative">
                <span className="inline-block px-3 py-1 rounded-full text-xs font-semibold bg-primary/10 text-primary border border-primary/20 mb-3">
                  {founder.role}
                </span>
                <h3 className="font-display text-2xl font-bold text-foreground mb-2">
                  {founder.name}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed mb-5">
                  {founder.bio}
                </p>

                {/* Socials */}
                <div className="flex gap-3">
                  {[
                    { icon: Mail, href: `mailto:${founder.email}`, label: "Email" },
                  ].map((social) => (
                    <a
                      key={social.label}
                      href={social.href}
                      aria-label={social.label}
                      className="w-10 h-10 rounded-xl bg-secondary flex items-center justify-center text-muted-foreground hover:text-primary hover:bg-primary/10 transition-all duration-300"
                    >
                      <social.icon className="w-4 h-4" />
                    </a>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}