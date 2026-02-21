import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { CheckCircle, Zap, Shield, Users } from "lucide-react";

const values = [
  { icon: Zap, title: "Innovation First", desc: "We leverage the latest technologies to deliver future-proof solutions." },
  { icon: Shield, title: "Reliability", desc: "Rock-solid infrastructure and code quality you can depend on." },
  { icon: Users, title: "Client Focused", desc: "Your success is our success — we treat every project as our own." },
  { icon: CheckCircle, title: "Quality Driven", desc: "Every pixel and line of code is crafted with precision and care." },
];

export default function AboutSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" className="section-padding relative overflow-hidden">
      <div className="absolute top-0 right-0 w-[500px] h-[500px] rounded-full bg-primary/5 blur-[150px]" />

      <div className="max-w-7xl mx-auto relative">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left */}
          <motion.div
            ref={ref}
            initial={{ opacity: 0, x: -40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            <span className="text-primary text-sm font-semibold uppercase tracking-widest">About Us</span>
            <h2 className="font-display text-4xl sm:text-5xl font-bold mt-3 mb-6">
              Crafting Digital <span className="text-gradient">Excellence</span> Since 2024
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed mb-6">
              ANRI Solution is a full-service digital agency committed to transforming businesses through innovative technology solutions. With a team of 50+ experts spanning development, design, marketing, and IT, we deliver results that exceed expectations.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-8">
              From startups to enterprises, we've partnered with 50+ clients across industries to build digital products that drive real impact. Our approach combines technical expertise with creative thinking to deliver solutions that are both beautiful and powerful.
            </p>

            <div className="flex flex-wrap gap-4">
              {["Agile Methodology", "24/7 Support", "Global Delivery"].map((badge) => (
                <span key={badge} className="px-4 py-2 rounded-full border border-primary/20 text-sm text-primary font-medium bg-primary/5">
                  {badge}
                </span>
              ))}
            </div>
          </motion.div>

          {/* Right - Values */}
          <div className="grid sm:grid-cols-2 gap-5">
            {values.map((item, i) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.2 + i * 0.1 }}
                className="glass-card p-6 glow-border"
              >
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
                  <item.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="font-display font-bold text-foreground mb-2">{item.title}</h3>
                <p className="text-muted-foreground text-sm">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
