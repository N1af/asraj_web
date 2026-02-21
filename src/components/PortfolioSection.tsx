import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { ExternalLink } from "lucide-react";

const categories = ["All", "Web", "Mobile", "Branding", "Marketing"];

const projects = [
  { title: "FinVault Dashboard", category: "Web", desc: "Modern fintech dashboard with real-time analytics", color: "from-primary/20 to-accent/20" },
  { title: "FoodieGo App", category: "Mobile", desc: "Cross-platform food delivery application", color: "from-accent/20 to-primary/20" },
  { title: "NexGen Branding", category: "Branding", desc: "Complete brand identity for a tech startup", color: "from-primary/30 to-primary/5" },
  { title: "CloudSync Platform", category: "Web", desc: "Enterprise cloud management SaaS platform", color: "from-accent/30 to-accent/5" },
  { title: "GreenLeaf Campaign", category: "Marketing", desc: "Digital marketing campaign with 300% ROI", color: "from-primary/20 to-accent/10" },
  { title: "MediCare Mobile", category: "Mobile", desc: "Healthcare appointment booking application", color: "from-accent/10 to-primary/20" },
];

export default function PortfolioSection() {
  const [active, setActive] = useState("All");
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const filtered = active === "All" ? projects : projects.filter((p) => p.category === active);

  return (
    <section id="portfolio" className="section-padding relative">
      <div className="max-w-7xl mx-auto">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <span className="text-primary text-sm font-semibold uppercase tracking-widest">Our Work</span>
          <h2 className="font-display text-4xl sm:text-5xl font-bold mt-3 mb-4">
            Featured <span className="text-gradient">Projects</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            A showcase of our finest digital creations across web, mobile, branding, and marketing.
          </p>
        </motion.div>

        {/* Filters */}
        <div className="flex justify-center gap-2 mb-12 flex-wrap">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActive(cat)}
              className={`px-5 py-2 rounded-full text-sm font-medium transition-all ${
                active === cat
                  ? "bg-gradient-primary text-primary-foreground glow-shadow"
                  : "bg-secondary text-secondary-foreground hover:bg-secondary/80"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filtered.map((project, i) => (
            <motion.div
              key={project.title}
              layout
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.4, delay: i * 0.05 }}
              className="group glass-card glow-border overflow-hidden hover-lift cursor-pointer"
            >
              {/* Placeholder visual */}
              <div className={`h-52 bg-gradient-to-br ${project.color} flex items-center justify-center relative`}>
                <div className="text-5xl font-display font-bold text-foreground/10">{project.title.charAt(0)}</div>
                <div className="absolute inset-0 bg-background/0 group-hover:bg-background/20 transition-all flex items-center justify-center opacity-0 group-hover:opacity-100">
                  <ExternalLink className="w-8 h-8 text-primary" />
                </div>
              </div>
              <div className="p-6">
                <span className="text-xs font-semibold text-primary uppercase tracking-wider">{project.category}</span>
                <h3 className="font-display text-lg font-bold text-foreground mt-1 mb-2">{project.title}</h3>
                <p className="text-muted-foreground text-sm">{project.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
