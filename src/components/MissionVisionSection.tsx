import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Target, Eye, Compass } from "lucide-react";

const items = [
  {
    icon: Target,
    title: "Our Mission",
    description:
      "To empower businesses worldwide with innovative digital solutions that drive growth, efficiency, and lasting impact in an ever-evolving technological landscape.",
    gradient: "from-primary to-accent",
  },
  {
    icon: Eye,
    title: "Our Vision",
    description:
      "To be the world's most trusted digital transformation partner, setting new standards of excellence in technology, creativity, and client success.",
    gradient: "from-accent to-primary",
  },
  {
    icon: Compass,
    title: "Our Approach",
    description:
      "We combine agile methodology with deep technical expertise, ensuring every project is delivered on time, within budget, and beyond expectations.",
    gradient: "from-primary via-accent to-primary",
  },
];

export default function MissionVisionSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="section-padding relative overflow-hidden">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-accent/5 blur-[200px]" />
      <div className="max-w-7xl mx-auto relative" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-primary text-sm font-semibold uppercase tracking-widest">
            Who We Are
          </span>
          <h2 className="font-display text-4xl sm:text-5xl font-bold mt-3 mb-4">
            Driven by <span className="text-gradient">Purpose</span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {items.map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.15 * i }}
              className="glass-card glow-border p-8 rounded-2xl text-center group hover-lift relative overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-radial opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="relative z-10">
                <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${item.gradient} bg-opacity-10 flex items-center justify-center mx-auto mb-6`}>
                  <item.icon className="w-8 h-8 text-primary-foreground" />
                </div>
                <h3 className="font-display text-xl font-bold text-foreground mb-4">
                  {item.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {item.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
