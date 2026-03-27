import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight, MapPin, Phone, Mail } from "lucide-react";

const CTASection = () => (
  <section id="contact" className="py-20">
    <div className="container mx-auto px-4">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="bg-primary rounded-2xl p-10 md:p-16 text-center text-primary-foreground"
      >
        <h2 className="font-display text-3xl md:text-4xl mb-4">Ready to Take the Next Step?</h2>
        <p className="opacity-90 max-w-lg mx-auto mb-8">
          Schedule your appointment today and experience healthcare the way it should be — personal, proactive, and always in your corner.
        </p>
        <div className="flex flex-wrap justify-center gap-4 mb-10">
          <Button size="lg" variant="secondary" className="gap-2">
            Book Appointment <ArrowRight size={16} />
          </Button>
        </div>
        <div className="flex flex-wrap justify-center gap-8 text-sm opacity-80">
          <span className="flex items-center gap-2"><MapPin size={14} /> 123 Health Ave, Suite 100</span>
          <span className="flex items-center gap-2"><Phone size={14} /> (555) 123-4567</span>
          <span className="flex items-center gap-2"><Mail size={14} /> info@carewell.com</span>
        </div>
      </motion.div>
    </div>
  </section>
);

export default CTASection;
