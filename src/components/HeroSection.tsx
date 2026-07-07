import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight, Phone } from "lucide-react";
import heroImage from "@/assets/hero-apexsalus.jpg";

const HeroSection = () => (
  <section className="relative pt-16 overflow-hidden">
    <div className="container mx-auto px-4 py-20 md:py-28">
      <div className="grid lg:grid-cols-2 gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          <span className="inline-block bg-sage-light text-sage text-xs font-semibold px-3 py-1.5 rounded-full mb-6 uppercase tracking-wider">
            Healthcare Administration Consulting
          </span>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-display text-foreground leading-tight mb-6">
            Elevating <span className="text-sage">Healthcare</span>{" "}
            <span className="text-navy-light">Operations</span>
          </h1>
          <p className="text-muted-foreground text-lg leading-relaxed mb-8 max-w-lg">
            ApexSalus partners with healthcare organizations to streamline operations,
            strengthen compliance, and drive sustainable growth — so your teams can
            focus on delivering exceptional care.
          </p>
          <div className="flex flex-wrap gap-4">
            <Button size="lg" className="gap-2">
              Schedule Consultation <ArrowRight size={16} />
            </Button>
            <Button variant="outline" size="lg" className="gap-2">
              <Phone size={16} /> Call Us Today
            </Button>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="relative"
        >
          <div className="rounded-2xl overflow-hidden shadow-[var(--hero-glow)]">
            <img
              src={heroImage}
              alt="ApexSalus professional consulting environment"
              className="w-full h-auto object-cover"
              loading="eager"
            />
          </div>
          <div className="absolute -bottom-4 -left-4 bg-card rounded-xl p-4 shadow-[var(--card-shadow)] border border-border">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-sage-light flex items-center justify-center">
                <span className="text-sage font-bold text-sm">98%</span>
              </div>
              <div>
                <p className="text-xs font-semibold text-foreground">Client Satisfaction</p>
                <p className="text-xs text-muted-foreground">Across all engagements</p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  </section>
);

export default HeroSection;
