import { motion } from "framer-motion";
import { ShieldCheck, BarChart3, FileText } from "lucide-react";

const services = [
  { icon: BarChart3, title: "Healthcare Operations Consulting", desc: "Streamline workflows, optimize revenue cycles, and implement best practices that drive measurable operational improvements.", category: "Consulting" },
  { icon: FileText, title: "Strategic Planning & Growth", desc: "Data-driven strategic planning, market analysis, and growth roadmaps tailored to healthcare organizations of all sizes.", category: "Consulting" },
  { icon: ShieldCheck, title: "Compliance & Accreditation", desc: "Navigate HIPAA, Joint Commission, and state regulations with expert guidance to maintain compliance and avoid costly penalties.", category: "Consulting" },
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
        <span className="text-sage text-sm font-semibold uppercase tracking-wider">Our Expertise</span>
        <h2 className="text-3xl md:text-4xl font-display text-foreground mt-2">Healthcare Consulting, Done Right</h2>
        <p className="text-muted-foreground mt-3 max-w-2xl mx-auto">
          We bring deep healthcare administration mastery to every engagement — helping organizations operate efficiently, grow strategically, and stay compliant.
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
            className="group bg-background rounded-xl p-6 border border-border hover:shadow-[var(--card-shadow-hover)] transition-all cursor-pointer"
          >
            <div className="flex items-center justify-between mb-4">
              <div className="w-12 h-12 rounded-lg bg-accent flex items-center justify-center group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                <s.icon size={22} className="text-accent-foreground group-hover:text-primary-foreground transition-colors" />
              </div>
              <span className="text-[10px] font-semibold uppercase tracking-wider text-sage bg-sage-light px-2 py-1 rounded-full">
                {s.category}
              </span>
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
