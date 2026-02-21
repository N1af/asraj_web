import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Linkedin, Twitter } from "lucide-react";

const team = [
  { name: "Alex Rivera", role: "Lead Developer", image: "/placeholder.svg" },
  { name: "Sarah Chen", role: "UI/UX Designer", image: "/placeholder.svg" },
  { name: "Marcus Johnson", role: "Marketing Head", image: "/placeholder.svg" },
  { name: "Emily Watson", role: "Project Manager", image: "/placeholder.svg" },
  { name: "David Kim", role: "DevOps Engineer", image: "/placeholder.svg" },
  { name: "Priya Sharma", role: "QA Lead", image: "/placeholder.svg" },
];

export default function TeamSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="section-padding relative overflow-hidden">
      <div className="absolute bottom-0 right-0 w-[400px] h-[400px] rounded-full bg-accent/5 blur-[150px]" />
      <div className="max-w-7xl mx-auto relative" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-primary text-sm font-semibold uppercase tracking-widest">
            Our People
          </span>
          <h2 className="font-display text-4xl sm:text-5xl font-bold mt-3 mb-4">
            Meet the <span className="text-gradient">Team</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Talented professionals passionate about creating exceptional digital experiences.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {team.map((member, i) => (
            <motion.div
              key={member.name}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.1 * i }}
              className="glass-card glow-border rounded-2xl overflow-hidden group hover-lift"
            >
              <div className="relative h-52 overflow-hidden bg-secondary">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-card via-card/30 to-transparent" />
                {/* Hover overlay with socials */}
                <div className="absolute inset-0 flex items-center justify-center gap-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-background/60 backdrop-blur-sm">
                  <a href="#" className="w-10 h-10 rounded-xl bg-primary/20 flex items-center justify-center text-primary hover:bg-primary/30 transition-colors">
                    <Linkedin className="w-4 h-4" />
                  </a>
                  <a href="#" className="w-10 h-10 rounded-xl bg-primary/20 flex items-center justify-center text-primary hover:bg-primary/30 transition-colors">
                    <Twitter className="w-4 h-4" />
                  </a>
                </div>
              </div>
              <div className="p-5 text-center">
                <h3 className="font-display font-bold text-foreground text-lg">{member.name}</h3>
                <p className="text-primary text-sm font-medium mt-1">{member.role}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
