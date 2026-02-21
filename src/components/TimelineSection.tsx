import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const milestones = [
  { year: "2023", title: "Company Founded", description: "ANRI Solution launched with a vision to transform digital landscapes." },
  { year: "2023", title: "First Major Client", description: "Secured partnership with a Fortune 500 company for enterprise solutions." },
  { year: "2025", title: "Team Expansion", description: "Grew to 20+ professionals across development, design, and marketing." },
  { year: "2025", title: "Global Reach", description: "Expanded operations to serve clients across 15+ countries worldwide." },
  { year: "2026", title: "Industry Recognition", description: "Awarded 'Best Digital Agency' by TechWorld Innovation Awards." },
  { year: "2026", title: "50+ Projects", description: "Crossed the milestone of 50 successful project deliveries globally." },
];

export default function TimelineSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="section-padding relative overflow-hidden">
      <div className="absolute top-0 left-0 w-[400px] h-[400px] rounded-full bg-primary/5 blur-[150px]" />
      <div className="max-w-4xl mx-auto relative" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-primary text-sm font-semibold uppercase tracking-widest">
            Our Journey
          </span>
          <h2 className="font-display text-4xl sm:text-5xl font-bold mt-3 mb-4">
            The <span className="text-gradient">Timeline</span>
          </h2>
        </motion.div>

        <div className="relative">
          {/* Center line */}
          <div className="absolute left-1/2 -translate-x-1/2 top-0 bottom-0 w-px bg-border" />

          {milestones.map((item, i) => (
            <motion.div
              key={item.year}
              initial={{ opacity: 0, x: i % 2 === 0 ? -40 : 40 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.15 * i }}
              className={`relative flex items-center mb-12 last:mb-0 ${
                i % 2 === 0 ? "flex-row" : "flex-row-reverse"
              }`}
            >
              <div className={`w-1/2 ${i % 2 === 0 ? "pr-12 text-right" : "pl-12 text-left"}`}>
                <div className="glass-card glow-border p-6 rounded-2xl">
                  <span className="text-primary font-display font-bold text-lg">{item.year}</span>
                  <h3 className="font-display font-bold text-foreground mt-1 mb-2">{item.title}</h3>
                  <p className="text-muted-foreground text-sm">{item.description}</p>
                </div>
              </div>
              {/* Dot */}
              <div className="absolute left-1/2 -translate-x-1/2 w-4 h-4 rounded-full bg-primary glow-shadow z-10" />
              <div className="w-1/2" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
