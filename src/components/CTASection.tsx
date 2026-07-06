import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight, MapPin, Phone, Mail } from "lucide-react";

const CTASection = () => (
  <section id="contact" className="py-20">
    <div className="container mx-auto px-4">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="bg-primary rounded-2xl p-10 md:p-16 text-center text-primary-foreground relative overflow-hidden"
      >
        <div className="absolute top-0 right-0 w-64 h-64 bg-sage/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
        <div className="relative z-10">
          <h2 className="font-display text-3xl md:text-4xl mb-4">Ready to Strengthen Your Operations?</h2>
          <p className="opacity-90 max-w-lg mx-auto mb-8">
            Whether you need operational consulting, compliance guidance, or strategic growth planning —
            let's start a conversation about what's possible.
          </p>
          <div className="flex flex-wrap justify-center gap-4 mb-10">
            <Button asChild size="lg" variant="secondary" className="gap-2">
              <Link to="/consultation">Book a Free Consultation <ArrowRight size={16} /></Link>
            </Button>
          </div>
          <div className="flex flex-wrap justify-center gap-8 text-sm opacity-80">
            <span className="flex items-center gap-2"><MapPin size={14} /> Available Nationwide</span>
            <span className="flex items-center gap-2"><Phone size={14} /> (555) 987-6543</span>
            <span className="flex items-center gap-2"><Mail size={14} /> hello@apexsalus.com</span>
          </div>
        </div>
      </motion.div>
    </div>
  </section>
);

export default CTASection;
