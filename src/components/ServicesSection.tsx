import { motion } from "framer-motion";
import { Heart, Baby, Brain, Stethoscope, Eye, Bone } from "lucide-react";

const services = [
  { icon: Stethoscope, title: "Primary Care", desc: "Comprehensive health checkups, preventive screenings, and ongoing wellness management." },
  { icon: Heart, title: "Cardiology", desc: "Advanced cardiac diagnostics, treatment plans, and heart health monitoring." },
  { icon: Baby, title: "Pediatrics", desc: "Gentle, expert care for infants, children, and adolescents at every stage." },
  { icon: Brain, title: "Neurology", desc: "Specialized diagnosis and treatment of neurological conditions." },
  { icon: Eye, title: "Ophthalmology", desc: "Complete eye exams, vision correction, and surgical eye care." },
  { icon: Bone, title: "Orthopedics", desc: "Joint, bone, and muscle care from diagnosis through recovery." },
];

const ServicesSection = () => (
  <section id="services" className="py-20 bg-card">
    <div className="container mx-auto px-4">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-14"
      >
        <span className="text-primary text-sm font-semibold uppercase tracking-wider">What We Offer</span>
        <h2 className="text-3xl md:text-4xl font-display text-foreground mt-2">Our Medical Services</h2>
        <p className="text-muted-foreground mt-3 max-w-xl mx-auto">
          A wide range of specialties under one roof, delivered by board-certified physicians.
        </p>
      </motion.div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {services.map((s, i) => (
          <motion.div
            key={s.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.08 }}
            className="group bg-background rounded-xl p-6 border border-border hover:shadow-[var(--card-shadow-hover)] transition-shadow cursor-pointer"
          >
            <div className="w-12 h-12 rounded-lg bg-accent flex items-center justify-center mb-4 group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
              <s.icon size={22} className="text-accent-foreground group-hover:text-primary-foreground transition-colors" />
            </div>
            <h3 className="font-display text-lg text-foreground mb-2">{s.title}</h3>
            <p className="text-sm text-muted-foreground leading-relaxed">{s.desc}</p>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default ServicesSection;
