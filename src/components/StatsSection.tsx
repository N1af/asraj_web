import { motion, useInView } from "framer-motion";
import { useRef, useEffect, useState } from "react";
import { Users, Briefcase, Award, Globe2 } from "lucide-react";

const stats = [
  { icon: Briefcase, value: 50, suffix: "+", label: "Projects Delivered" },
  { icon: Users, value: 20, suffix: "+", label: "Team Members" },
  { icon: Award, value: 5, suffix: "+", label: "Industry Awards" },
  { icon: Globe2, value: 10, suffix: "+", label: "Countries Served" },
];

function AnimatedCounter({ target, suffix }: { target: number; suffix: string }) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (!isInView) return;
    let start = 0;
    const duration = 2000;
    const step = target / (duration / 16);
    const timer = setInterval(() => {
      start += step;
      if (start >= target) {
        setCount(target);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, 16);
    return () => clearInterval(timer);
  }, [isInView, target]);

  return (
    <span ref={ref} className="font-display text-5xl sm:text-6xl font-bold text-gradient">
      {count}{suffix}
    </span>
  );
}

export default function StatsSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="section-padding relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-radial opacity-30" />
      <div className="max-w-7xl mx-auto relative" ref={ref}>
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="text-center glass-card p-8 rounded-2xl glow-border"
            >
              <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center mx-auto mb-4">
                <stat.icon className="w-7 h-7 text-primary" />
              </div>
              <AnimatedCounter target={stat.value} suffix={stat.suffix} />
              <p className="text-muted-foreground text-sm mt-2 font-medium">{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
