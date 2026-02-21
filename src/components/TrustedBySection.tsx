import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const logos = [
  "Anexaa"
];

export default function TrustedBySection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <section className="section-padding py-16 border-y border-border/30">
      <motion.div
        ref={ref}
        initial={{ opacity: 0 }}
        animate={isInView ? { opacity: 1 } : {}}
        transition={{ duration: 0.6 }}
        className="max-w-7xl mx-auto text-center"
      >
        <p className="text-sm text-muted-foreground uppercase tracking-widest mb-10">
          Trusted by Industry Leaders
        </p>
        <div className="flex flex-wrap justify-center items-center gap-x-12 gap-y-6">
          {logos.map((name, i) => (
            <motion.div
              key={name}
              initial={{ opacity: 0, scale: 0.5 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ delay: i * 0.1, duration: 0.5, type: "spring", stiffness: 200 }}
              whileHover={{ scale: 1.15, color: "hsl(var(--primary))" }}
              className="text-xl font-display font-bold text-muted-foreground/40 hover:text-muted-foreground/70 transition-colors cursor-default"
            >
              {name}
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
