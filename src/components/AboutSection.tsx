import { motion } from "framer-motion";
import { Target, TrendingUp, Award, Users } from "lucide-react";

const stats = [
  { icon: Users, value: "500+", label: "Clients Served" },
  { icon: Award, value: "15+", label: "Years Experience" },
  { icon: TrendingUp, value: "40%", label: "Avg. Efficiency Gain" },
  { icon: Target, value: "100%", label: "HIPAA Compliance" },
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
          <span className="text-sage text-sm font-semibold uppercase tracking-wider">Why ApexSalus</span>
          <h2 className="text-3xl md:text-4xl font-display text-foreground mt-2 mb-6">
            Where Compassion Meets Strategy
          </h2>
          <p className="text-muted-foreground leading-relaxed mb-4">
            ApexSalus was founded on a simple belief: strong healthcare administration is the foundation of exceptional care. When operational systems are sound, providers are empowered to deliver their best work — and patients experience better outcomes.
          </p>
          <p className="text-muted-foreground leading-relaxed mb-4">
            We bring a structural view of healthcare: efficient workflows, sound leadership, compliant processes, and organizations built to function with excellence. We help providers stay focused on their patients while we strengthen the systems that support them.
          </p>
          <p className="text-muted-foreground leading-relaxed mb-4">
            We partner with healthcare and behavioral health organizations to bring clarity, structure, and strategy to the administrative side of care — improving operations, reducing inefficiencies, supporting sustainable growth, and building systems that allow teams to work with greater confidence and purpose.
          </p>
          <p className="text-muted-foreground leading-relaxed mb-8">
            Because when care systems work better, everyone benefits — providers, organizations, and most importantly, patients.
          </p>
          <div className="grid grid-cols-2 gap-4">
            {stats.map((stat) => (
              <div key={stat.label} className="bg-card rounded-xl p-4 border border-border">
                <stat.icon size={20} className="text-sage mb-2" />
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
            <h3 className="font-display text-2xl mb-4">Our Approach</h3>
            <p className="opacity-90 leading-relaxed mb-6">
              We don't believe in one-size-fits-all. Every engagement begins with deep 
              listening, followed by tailored strategies grounded in evidence and empathy.
            </p>
            <ul className="space-y-3">
              {[
                "Evidence-based mental health interventions",
                "Data-driven administrative optimization",
                "Culturally responsive care frameworks",
                "Sustainable, scalable solutions",
              ].map((item) => (
                <li key={item} className="flex items-center gap-3 text-sm">
                  <div className="w-5 h-5 rounded-full bg-primary-foreground/20 flex items-center justify-center flex-shrink-0">
                    <div className="w-2 h-2 rounded-full bg-primary-foreground" />
                  </div>
                  {item}
                </li>
              ))}
            </ul>
          </div>
          <div className="absolute -top-3 -right-3 w-24 h-24 bg-sage/10 rounded-full blur-2xl" />
        </motion.div>
      </div>
    </div>
  </section>
);

export default AboutSection;
