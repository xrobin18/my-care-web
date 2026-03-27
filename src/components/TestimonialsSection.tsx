import { motion } from "framer-motion";
import { Star } from "lucide-react";

const testimonials = [
  { name: "Sarah M.", role: "Patient since 2021", text: "CareWell changed the way I think about healthcare. The doctors take time to listen and explain everything clearly. I've never felt more cared for.", rating: 5 },
  { name: "James T.", role: "Patient since 2019", text: "After years of impersonal clinics, finding CareWell was a breath of fresh air. The staff is warm, professional, and genuinely invested in my wellbeing.", rating: 5 },
  { name: "Maria L.", role: "Patient since 2022", text: "Booking is easy, wait times are minimal, and the facilities are beautiful. My whole family sees their doctors here now.", rating: 5 },
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
        <span className="text-primary text-sm font-semibold uppercase tracking-wider">Testimonials</span>
        <h2 className="text-3xl md:text-4xl font-display text-foreground mt-2">What Our Patients Say</h2>
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
                <Star key={j} size={14} className="fill-primary text-primary" />
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
