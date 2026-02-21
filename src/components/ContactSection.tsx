import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Send, Mail, Phone, MapPin } from "lucide-react";

export default function ContactSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="contact" className="section-padding relative">
      <div className="absolute top-0 left-0 w-[400px] h-[400px] rounded-full bg-primary/5 blur-[120px]" />

      <div className="max-w-7xl mx-auto relative">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-primary text-sm font-semibold uppercase tracking-widest">Get In Touch</span>
          <h2 className="font-display text-4xl sm:text-5xl font-bold mt-3 mb-4">
            Let's Build Something <span className="text-gradient">Amazing</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            Ready to transform your digital presence? Let's discuss your project.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-5 gap-8">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="lg:col-span-2 space-y-6"
          >
            {[
              { icon: Mail, label: "Email Us", value: "Asrajaaz4@gmail.com" },
              { icon: Phone, label: "Call Us", value: "+9710504041325" },
              { icon: MapPin, label: "Visit Us", value: "Rashideya 3, Ajman, UAE" },
            ].map((item) => (
              <div key={item.label} className="glass-card p-6 flex items-start gap-4 glow-border">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
                  <item.icon className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <div className="text-sm text-muted-foreground">{item.label}</div>
                  <div className="font-medium text-foreground">{item.value}</div>
                </div>
              </div>
            ))}
          </motion.div>

          {/* Form */}
          <motion.form
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="lg:col-span-3 glass-card p-8 space-y-5"
            onSubmit={(e) => e.preventDefault()}
          >
            <div className="grid sm:grid-cols-2 gap-5">
              <div>
                <label className="text-sm font-medium text-muted-foreground mb-2 block">Full Name</label>
                <input
                  type="text"
                  placeholder="John Doe"
                  className="w-full px-4 py-3 rounded-xl bg-secondary border border-border text-foreground placeholder:text-muted-foreground/50 focus:outline-none focus:border-primary/50 transition-colors"
                />
              </div>
              <div>
                <label className="text-sm font-medium text-muted-foreground mb-2 block">Email</label>
                <input
                  type="email"
                  placeholder="john@example.com"
                  className="w-full px-4 py-3 rounded-xl bg-secondary border border-border text-foreground placeholder:text-muted-foreground/50 focus:outline-none focus:border-primary/50 transition-colors"
                />
              </div>
            </div>
            <div>
              <label className="text-sm font-medium text-muted-foreground mb-2 block">Service Interested In</label>
              <select className="w-full px-4 py-3 rounded-xl bg-secondary border border-border text-foreground focus:outline-none focus:border-primary/50 transition-colors">
                <option value="">Select a service</option>
                <option>Web Development</option>
                <option>App Development</option>
                <option>Digital Marketing</option>
                <option>Business IT Solutions</option>
                <option>Design & Branding</option>
                <option>Tech & Support</option>
              </select>
            </div>
            <div>
              <label className="text-sm font-medium text-muted-foreground mb-2 block">Message</label>
              <textarea
                rows={4}
                placeholder="Tell us about your project..."
                className="w-full px-4 py-3 rounded-xl bg-secondary border border-border text-foreground placeholder:text-muted-foreground/50 focus:outline-none focus:border-primary/50 transition-colors resize-none"
              />
            </div>
            <button
              type="submit"
              className="w-full py-4 rounded-xl bg-gradient-primary text-primary-foreground font-semibold text-base flex items-center justify-center gap-2 hover:opacity-90 transition-opacity glow-shadow"
            >
              <Send size={18} />
              Send Message
            </button>
          </motion.form>
        </div>
      </div>
    </section>
  );
}
