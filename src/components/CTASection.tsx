import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { ArrowRight, Sparkles } from "lucide-react";
import { Link } from "react-router-dom";

export default function CTASection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="section-padding relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-radial" />
      <motion.div
        ref={ref}
        initial={{ opacity: 0, y: 40 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6 }}
        className="max-w-4xl mx-auto relative"
      >
        <div className="glass-card p-12 sm:p-16 text-center relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-accent/5" />
          <div className="relative z-10">
            <Sparkles className="w-10 h-10 text-primary mx-auto mb-6" />
            <h2 className="font-display text-3xl sm:text-5xl font-bold mb-4">
              Ready to <span className="text-gradient">Elevate</span> Your Business?
            </h2>
            <p className="text-muted-foreground text-lg max-w-xl mx-auto mb-8">
              Let's turn your vision into a powerful digital reality. Schedule a free consultation today.
            </p>
            <Link
              to="/contact"
              className="group inline-flex items-center gap-2 px-8 py-4 rounded-full bg-gradient-primary text-primary-foreground font-semibold text-base hover:opacity-90 transition-all glow-shadow"
            >
              Schedule Free Consultation
              <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
