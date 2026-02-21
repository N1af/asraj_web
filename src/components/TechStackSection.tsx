import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const techCategories = [
  {
    category: "Frontend",
    techs: ["React", "Next.js", "Vue.js", "TypeScript", "Tailwind CSS"],
  },
  {
    category: "Backend",
    techs: ["Node.js", "Python", "Go", "GraphQL", "REST APIs"],
  },
  {
    category: "Mobile",
    techs: ["React Native", "Flutter", "Swift", "Kotlin"],
  },
  {
    category: "Cloud & DevOps",
    techs: ["AWS", "GCP", "Docker", "Kubernetes", "CI/CD"],
  },
  {
    category: "Databases",
    techs: ["PostgreSQL", "MongoDB", "Redis", "Firebase"],
  },
  {
    category: "Tools",
    techs: ["Figma", "Git", "Jira", "Slack", "Notion"],
  },
];

export default function TechStackSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="section-padding relative overflow-hidden bg-card/30">
      <div className="max-w-7xl mx-auto relative" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-primary text-sm font-semibold uppercase tracking-widest">
            Technologies
          </span>
          <h2 className="font-display text-4xl sm:text-5xl font-bold mt-3 mb-4">
            Our <span className="text-gradient">Tech Stack</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            We use industry-leading technologies to build robust, scalable solutions.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {techCategories.map((cat, i) => (
            <motion.div
              key={cat.category}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.1 * i }}
              className="glass-card glow-border p-6 rounded-2xl"
            >
              <h3 className="font-display font-bold text-foreground text-lg mb-4 flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-primary" />
                {cat.category}
              </h3>
              <div className="flex flex-wrap gap-2">
                {cat.techs.map((tech) => (
                  <span
                    key={tech}
                    className="px-3 py-1.5 text-xs font-medium rounded-full bg-secondary text-secondary-foreground hover:bg-primary/10 hover:text-primary transition-colors cursor-default"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
