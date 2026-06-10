import { motion } from "framer-motion";
import { Star } from "lucide-react";

const testimonials = [
  { name: "Dr. Rachel Kim", role: "Operations Director, Metro Health", text: "ApexSalus transformed our department's workflow. Patient wait times dropped 60% and staff satisfaction soared. Their understanding of healthcare operations is unmatched.", rating: 5 },
  { name: "Marcus Johnson", role: "CEO, Horizon Behavioral Health", text: "Their consulting engagement helped us achieve Joint Commission accreditation on the first attempt. The strategic roadmap they built continues to guide our growth two years later.", rating: 5 },
  { name: "Dr. Anita Patel", role: "Practice Owner", text: "As a solo practitioner, I was drowning in admin. ApexSalus streamlined my operations so I could focus on my patients. They truly understand healthcare.", rating: 5 },
];

const TestimonialsSection = () => (
  <section id="testimonials" className="py-20 bg-card">
    <div className="container mx-auto px-4">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-14"
      >
        <span className="text-sage text-sm font-semibold uppercase tracking-wider">Client Stories</span>
        <h2 className="text-3xl md:text-4xl font-display text-foreground mt-2">Trusted by Healthcare Leaders</h2>
      </motion.div>

      <div className="grid md:grid-cols-3 gap-6">
        {testimonials.map((t, i) => (
          <motion.div
            key={t.name}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            className="bg-background rounded-xl p-6 border border-border"
          >
            <div className="flex gap-1 mb-4">
              {Array.from({ length: t.rating }).map((_, j) => (
                <Star key={j} size={14} className="fill-sage text-sage" />
              ))}
            </div>
            <p className="text-sm text-muted-foreground leading-relaxed mb-6 italic">"{t.text}"</p>
            <div>
              <p className="text-sm font-semibold text-foreground">{t.name}</p>
              <p className="text-xs text-muted-foreground">{t.role}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default TestimonialsSection;
