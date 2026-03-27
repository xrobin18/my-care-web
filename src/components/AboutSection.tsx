import { motion } from "framer-motion";
import { Shield, Clock, Users, Award } from "lucide-react";

const stats = [
  { icon: Users, value: "15,000+", label: "Patients Served" },
  { icon: Award, value: "25+", label: "Years Experience" },
  { icon: Shield, value: "50+", label: "Specialists" },
  { icon: Clock, value: "24/7", label: "Emergency Care" },
];

const AboutSection = () => (
  <section id="about" className="py-20">
    <div className="container mx-auto px-4">
      <div className="grid lg:grid-cols-2 gap-16 items-center">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
        >
          <span className="text-primary text-sm font-semibold uppercase tracking-wider">Why Choose Us</span>
          <h2 className="text-3xl md:text-4xl font-display text-foreground mt-2 mb-6">
            Healthcare That Puts You First
          </h2>
          <p className="text-muted-foreground leading-relaxed mb-4">
            At CareWell, we believe everyone deserves access to exceptional medical care. Our team of 
            board-certified physicians combines cutting-edge technology with genuine compassion.
          </p>
          <p className="text-muted-foreground leading-relaxed mb-8">
            From your first visit, you'll experience shorter wait times, longer appointments, 
            and a care team that truly listens. We're not just treating symptoms — we're building 
            lasting relationships focused on your long-term wellness.
          </p>
          <div className="grid grid-cols-2 gap-4">
            {stats.map((stat) => (
              <div key={stat.label} className="bg-card rounded-xl p-4 border border-border">
                <stat.icon size={20} className="text-primary mb-2" />
                <p className="text-2xl font-bold text-foreground font-display">{stat.value}</p>
                <p className="text-xs text-muted-foreground mt-1">{stat.label}</p>
              </div>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="relative"
        >
          <div className="bg-primary rounded-2xl p-10 text-primary-foreground">
            <h3 className="font-display text-2xl mb-4">Our Mission</h3>
            <p className="opacity-90 leading-relaxed mb-6">
              To deliver accessible, compassionate, and innovative healthcare that empowers 
              every patient to live their healthiest life.
            </p>
            <ul className="space-y-3">
              {["Patient-centered approach", "Evidence-based medicine", "Transparent pricing", "Same-day appointments"].map((item) => (
                <li key={item} className="flex items-center gap-3 text-sm">
                  <div className="w-5 h-5 rounded-full bg-primary-foreground/20 flex items-center justify-center flex-shrink-0">
                    <div className="w-2 h-2 rounded-full bg-primary-foreground" />
                  </div>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </motion.div>
      </div>
    </div>
  </section>
);

export default AboutSection;
