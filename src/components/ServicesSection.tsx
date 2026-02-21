import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import {
  Globe,
  Smartphone,
  TrendingUp,
  Server,
  Palette,
  Headphones,
  ArrowUpRight,
} from "lucide-react";

const services = [
  {
    icon: Globe,
    title: "Web Development",
    description: "Custom websites, web apps, and e-commerce platforms built with cutting-edge technologies for performance and scalability.",
    features: ["React & Next.js", "E-Commerce", "CMS Solutions", "Progressive Web Apps"],
  },
  {
    icon: Smartphone,
    title: "App Development",
    description: "Native and cross-platform mobile applications designed for seamless user experiences across iOS and Android.",
    features: ["iOS & Android", "React Native", "Flutter", "App Store Optimization"],
  },
  {
    icon: TrendingUp,
    title: "Digital Marketing",
    description: "Data-driven marketing strategies that boost visibility, engage audiences, and convert leads into loyal customers.",
    features: ["SEO & SEM", "Social Media", "Content Strategy", "PPC Campaigns"],
  },
  {
    icon: Server,
    title: "Business IT Solutions",
    description: "Enterprise-grade IT infrastructure, cloud solutions, and automation tools to streamline your business operations.",
    features: ["Cloud Migration", "DevOps", "API Integration", "Automation"],
  },
  {
    icon: Palette,
    title: "Design & Branding",
    description: "Stunning visual identities and user-centric designs that capture your brand essence and leave lasting impressions.",
    features: ["UI/UX Design", "Brand Identity", "Motion Graphics", "Design Systems"],
  },
  {
    icon: Headphones,
    title: "Tech & Support",
    description: "Reliable technical support, maintenance, and managed services to keep your digital assets running smoothly 24/7.",
    features: ["24/7 Support", "Maintenance", "Security Audits", "Performance Monitoring"],
  },
];

function ServiceCard({ service, index }: { service: typeof services[0]; index: number }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="group glass-card glow-border p-8 hover-lift cursor-pointer relative overflow-hidden"
    >
      {/* Hover glow */}
      <div className="absolute inset-0 bg-gradient-radial opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

      <div className="relative z-10">
        <div className="flex items-start justify-between mb-6">
          <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
            <service.icon className="w-7 h-7 text-primary" />
          </div>
          <ArrowUpRight className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors" />
        </div>

        <h3 className="font-display text-xl font-bold text-foreground mb-3">{service.title}</h3>
        <p className="text-muted-foreground text-sm leading-relaxed mb-6">{service.description}</p>

        <div className="flex flex-wrap gap-2">
          {service.features.map((f) => (
            <span key={f} className="px-3 py-1 text-xs font-medium rounded-full bg-secondary text-secondary-foreground">
              {f}
            </span>
          ))}
        </div>
      </div>
    </motion.div>
  );
}

export default function ServicesSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="services" className="section-padding relative">
      <div className="max-w-7xl mx-auto">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-primary text-sm font-semibold uppercase tracking-widest">What We Do</span>
          <h2 className="font-display text-4xl sm:text-5xl font-bold mt-3 mb-4">
            Our <span className="text-gradient">Services</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            Comprehensive digital solutions tailored to accelerate your business growth and digital transformation.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, i) => (
            <ServiceCard key={service.title} service={service} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
