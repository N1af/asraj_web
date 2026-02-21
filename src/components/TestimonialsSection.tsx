import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { Star, ChevronLeft, ChevronRight, Quote } from "lucide-react";

const testimonials = [
  {
    name: "Sarah Mitchell",
    role: "CEO, TechVentures Inc.",
    text: "ANRI Solution transformed our entire digital presence. Their team delivered a stunning website and mobile app that increased our conversions by 180%. Truly world-class work.",
    rating: 5,
  },
  {
    name: "David Chen",
    role: "Founder, CloudSync",
    text: "Working with ANRI was a game-changer. Their technical expertise and creative approach helped us launch our SaaS platform 3 months ahead of schedule. Highly recommended!",
    rating: 5,
  },
  {
    name: "Priya Sharma",
    role: "Marketing Director, GreenLeaf",
    text: "The digital marketing strategy ANRI crafted for us delivered a 300% ROI within the first quarter. Their data-driven approach and creative campaigns are unmatched.",
    rating: 5,
  },
  {
    name: "James Wilson",
    role: "CTO, FinVault",
    text: "ANRI's development team built a complex fintech dashboard that handles millions of transactions daily. Their code quality and attention to security is exceptional.",
    rating: 5,
  },
];

export default function TestimonialsSection() {
  const [current, setCurrent] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const next = () => setCurrent((c) => (c + 1) % testimonials.length);
  const prev = () => setCurrent((c) => (c - 1 + testimonials.length) % testimonials.length);
  const t = testimonials[current];

  return (
    <section id="testimonials" className="section-padding relative overflow-hidden">
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[600px] rounded-full bg-accent/5 blur-[150px]" />

      <div className="max-w-7xl mx-auto relative">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-primary text-sm font-semibold uppercase tracking-widest">Testimonials</span>
          <h2 className="font-display text-4xl sm:text-5xl font-bold mt-3 mb-4">
            What Our <span className="text-gradient">Clients</span> Say
          </h2>
        </motion.div>

        <div className="max-w-3xl mx-auto">
          <motion.div
            key={current}
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -30 }}
            transition={{ duration: 0.4 }}
            className="glass-card p-8 sm:p-12 text-center relative"
          >
            <Quote className="w-10 h-10 text-primary/30 mx-auto mb-6" />
            <p className="text-lg sm:text-xl text-foreground leading-relaxed mb-8 italic">
              "{t.text}"
            </p>
            <div className="flex justify-center gap-1 mb-4">
              {Array.from({ length: t.rating }).map((_, i) => (
                <Star key={i} className="w-5 h-5 fill-primary text-primary" />
              ))}
            </div>
            <div className="font-display font-bold text-foreground text-lg">{t.name}</div>
            <div className="text-muted-foreground text-sm">{t.role}</div>
          </motion.div>

          {/* Navigation */}
          <div className="flex items-center justify-center gap-4 mt-8">
            <button onClick={prev} className="p-3 rounded-full border border-border hover:border-primary/50 text-muted-foreground hover:text-foreground transition-colors">
              <ChevronLeft size={20} />
            </button>
            <div className="flex gap-2">
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setCurrent(i)}
                  className={`w-2.5 h-2.5 rounded-full transition-all ${
                    i === current ? "bg-primary w-8" : "bg-muted-foreground/30"
                  }`}
                />
              ))}
            </div>
            <button onClick={next} className="p-3 rounded-full border border-border hover:border-primary/50 text-muted-foreground hover:text-foreground transition-colors">
              <ChevronRight size={20} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
