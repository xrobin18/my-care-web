import { Link, useParams, Navigate } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight, ArrowLeft, Check } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import CTASection from "@/components/CTASection";
import LeadForm from "@/components/LeadForm";
import { Button } from "@/components/ui/button";
import { getService, services } from "@/data/services";

const ServicePage = () => {
  const { slug } = useParams<{ slug: string }>();
  const service = slug ? getService(slug) : undefined;

  if (!service) return <Navigate to="/" replace />;

  const Icon = service.icon;
  const others = services.filter((s) => s.slug !== service.slug);

  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* Hero */}
      <section className="pt-28 pb-16 bg-gradient-to-b from-sage-light/40 to-background">
        <div className="container mx-auto px-4">
          <Link
            to="/#services"
            className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors mb-6"
          >
            <ArrowLeft size={14} /> All Services
          </Link>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl"
          >
            <div className="inline-flex items-center gap-3 mb-6">
              <div className="w-12 h-12 rounded-lg bg-sage flex items-center justify-center">
                <Icon size={22} className="text-primary-foreground" />
              </div>
              <span className="text-sage text-xs font-semibold uppercase tracking-wider">
                ApexSalus Consulting
              </span>
            </div>
            <h1 className="text-4xl md:text-5xl font-display text-foreground leading-tight mb-4">
              {service.title}
            </h1>
            <p className="text-xl text-navy-light font-display italic mb-6">{service.tagline}</p>
            <p className="text-muted-foreground text-lg leading-relaxed">{service.intro}</p>
          </motion.div>
        </div>
      </section>

      {/* What We Do */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl font-display text-foreground mb-2">What we do</h2>
            <p className="text-muted-foreground mb-10">Core capabilities inside this practice area.</p>
            <div className="grid sm:grid-cols-2 gap-6">
              {service.whatWeDo.map((item) => (
                <div
                  key={item.title}
                  className="bg-card border border-border rounded-xl p-6 hover:shadow-[var(--card-shadow-hover)] transition-shadow"
                >
                  <h3 className="font-display text-lg text-foreground mb-2">{item.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Outcomes */}
      <section className="py-20 bg-card">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-12 items-start">
            <div>
              <span className="text-sage text-sm font-semibold uppercase tracking-wider">Outcomes</span>
              <h2 className="text-3xl font-display text-foreground mt-2 mb-4">
                What success looks like
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                Every engagement is tied to outcomes leadership can see in their dashboards and their day.
              </p>
            </div>
            <ul className="space-y-4">
              {service.outcomes.map((o) => (
                <li key={o} className="flex items-start gap-3">
                  <span className="mt-1 w-6 h-6 rounded-full bg-sage-light flex items-center justify-center flex-shrink-0">
                    <Check size={14} className="text-sage" />
                  </span>
                  <span className="text-foreground">{o}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Approach */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <span className="text-sage text-sm font-semibold uppercase tracking-wider">Our approach</span>
            <h2 className="text-3xl font-display text-foreground mt-2 mb-10">How we engage</h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {service.approach.map((step) => (
                <div key={step.step} className="relative">
                  <div className="text-sage font-display text-3xl mb-2">{step.step}</div>
                  <h3 className="font-display text-lg text-foreground mb-2">{step.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{step.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Ideal For */}
      <section className="py-20 bg-card">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <span className="text-sage text-sm font-semibold uppercase tracking-wider">Ideal for</span>
            <h2 className="text-3xl font-display text-foreground mt-2 mb-8">Who we work with</h2>
            <div className="flex flex-wrap justify-center gap-3">
              {service.idealFor.map((i) => (
                <span
                  key={i}
                  className="bg-background border border-border rounded-full px-4 py-2 text-sm text-foreground"
                >
                  {i}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      <LeadForm serviceSlug={service.slug} serviceTitle={service.title} />

      <CTASection />

      {/* Other services */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl font-display text-foreground mb-8">Explore other practice areas</h2>
          <div className="grid sm:grid-cols-3 gap-6">
            {others.map((s) => {
              const OIcon = s.icon;
              return (
                <Link
                  key={s.slug}
                  to={`/services/${s.slug}`}
                  className="group bg-card border border-border rounded-xl p-6 hover:shadow-[var(--card-shadow-hover)] transition-all"
                >
                  <div className="w-10 h-10 rounded-lg bg-accent flex items-center justify-center mb-4 group-hover:bg-primary transition-colors">
                    <OIcon size={18} className="text-accent-foreground group-hover:text-primary-foreground transition-colors" />
                  </div>
                  <h3 className="font-display text-lg text-foreground mb-1">{s.shortTitle}</h3>
                  <p className="text-sm text-muted-foreground mb-3">{s.summary}</p>
                  <span className="text-sm text-sage font-semibold inline-flex items-center gap-1">
                    Learn more <ArrowRight size={14} />
                  </span>
                </Link>
              );
            })}
          </div>
          <div className="mt-10">
            <Button asChild variant="outline">
              <Link to="/#services">Back to overview</Link>
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default ServicePage;
