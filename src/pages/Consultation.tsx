import { useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { z } from "zod";
import { format } from "date-fns";
import { ArrowLeft, CheckCircle2, Calendar as CalendarIcon, Clock, Send, Phone, Mail, ShieldCheck, ExternalLink, CalendarDays } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Calendar } from "@/components/ui/calendar";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { toast } from "@/hooks/use-toast";
import { cn } from "@/lib/utils";
import { supabase } from "@/integrations/supabase/client";
import { services } from "@/data/services";

const SCHEDULER_URL = "https://calendly.com/apexsalus/consultation";

const timeSlots = [
  "9:00 AM", "9:30 AM", "10:00 AM", "10:30 AM", "11:00 AM", "11:30 AM",
  "1:00 PM", "1:30 PM", "2:00 PM", "2:30 PM", "3:00 PM", "3:30 PM",
  "4:00 PM", "4:30 PM", "5:00 PM",
];

const schema = z.object({
  company: z.string().trim().min(1, "Company is required").max(200),
  role: z.string().trim().min(1, "Role is required").max(150),
  email: z.string().trim().email("Enter a valid email").max(255),
  message: z.string().trim().min(1, "Please share a bit about your goals").max(2000),
});

const focusAreas = [
  ...services.map((s) => ({ value: s.slug, label: s.shortTitle, title: s.title })),
  { value: "general", label: "Not sure yet / General inquiry", title: "General Consultation" },
];

const highlights = [
  { icon: Clock, title: "30-minute call", desc: "Focused conversation with a senior consultant." },
  { icon: ShieldCheck, title: "No obligation", desc: "Confidential discovery, no sales pressure." },
  { icon: CalendarIcon, title: "Response within 1 business day", desc: "We confirm a time that works for your team." },
];

const Consultation = () => {
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [focus, setFocus] = useState<string>("general");
  const [preferredDate, setPreferredDate] = useState<Date | undefined>();
  const [preferredTime, setPreferredTime] = useState<string>("");
  const [errors, setErrors] = useState<Record<string, string>>({});

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const data = {
      company: (form.elements.namedItem("company") as HTMLInputElement).value,
      role: (form.elements.namedItem("role") as HTMLInputElement).value,
      email: (form.elements.namedItem("email") as HTMLInputElement).value,
      message: (form.elements.namedItem("message") as HTMLTextAreaElement).value,
    };

    const parsed = schema.safeParse(data);
    if (!parsed.success) {
      const fieldErrors: Record<string, string> = {};
      for (const issue of parsed.error.issues) {
        const key = issue.path[0]?.toString();
        if (key && !fieldErrors[key]) fieldErrors[key] = issue.message;
      }
      setErrors(fieldErrors);
      return;
    }

    setErrors({});
    setSubmitting(true);
    const selected = focusAreas.find((f) => f.value === focus)!;
    const preferenceLine =
      preferredDate || preferredTime
        ? `\n\nPreferred time: ${preferredDate ? format(preferredDate, "PPP") : "(no date)"}${preferredTime ? ` at ${preferredTime}` : ""}`
        : "";
    const { error } = await supabase.from("leads").insert({
      service_slug: selected.value,
      service_title: `Consultation — ${selected.title}`,
      company: parsed.data.company,
      role: parsed.data.role,
      email: parsed.data.email,
      message: `${parsed.data.message}${preferenceLine}`,
    });
    setSubmitting(false);

    if (error) {
      toast({
        title: "Something went wrong",
        description: "Please try again in a moment, or email hello@apexsalus.com directly.",
        variant: "destructive",
      });
      return;
    }

    setSubmitted(true);
    form.reset();
    toast({
      title: "Consultation requested",
      description: "We'll reach out within one business day to schedule your call.",
    });
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* Hero */}
      <section className="pt-28 pb-12 bg-gradient-to-b from-sage-light/40 to-background">
        <div className="container mx-auto px-4">
          <Link
            to="/"
            className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors mb-6"
          >
            <ArrowLeft size={14} /> Back to home
          </Link>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl"
          >
            <span className="text-sage text-xs font-semibold uppercase tracking-wider">
              Book a consultation
            </span>
            <h1 className="text-4xl md:text-5xl font-display text-foreground leading-tight mt-3 mb-4">
              Let's talk about what's next for your organization
            </h1>
            <p className="text-muted-foreground text-lg leading-relaxed">
              Tell us about your goals and challenges. We'll set up a free 30-minute call
              with a senior consultant to explore where ApexSalus can help.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Highlights */}
      <section className="py-8">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto grid sm:grid-cols-3 gap-4">
            {highlights.map((h) => {
              const Icon = h.icon;
              return (
                <div
                  key={h.title}
                  className="bg-card border border-border rounded-xl p-5 flex items-start gap-3"
                >
                  <div className="w-10 h-10 rounded-lg bg-sage-light flex items-center justify-center flex-shrink-0">
                    <Icon size={18} className="text-sage" />
                  </div>
                  <div>
                    <h3 className="font-display text-base text-foreground mb-1">{h.title}</h3>
                    <p className="text-sm text-muted-foreground leading-snug">{h.desc}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Form */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            {submitted ? (
              <div className="bg-card border border-border rounded-2xl p-10 text-center">
                <div className="w-14 h-14 rounded-full bg-sage-light flex items-center justify-center mx-auto mb-4">
                  <CheckCircle2 size={28} className="text-sage" />
                </div>
                <h3 className="font-display text-2xl text-foreground mb-2">
                  Your consultation request is in
                </h3>
                <p className="text-muted-foreground mb-6">
                  A member of our team will reach out within one business day to confirm a time.
                </p>
                <Button variant="outline" onClick={() => setSubmitted(false)}>
                  Submit another request
                </Button>
              </div>
            ) : (
              <form
                onSubmit={handleSubmit}
                className="bg-card border border-border rounded-2xl p-6 md:p-10 space-y-5 shadow-[var(--card-shadow)]"
                noValidate
              >
                <div className="space-y-2">
                  <Label>What would you like to focus on?</Label>
                  <Select value={focus} onValueChange={setFocus}>
                    <SelectTrigger>
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      {focusAreas.map((f) => (
                        <SelectItem key={f.value} value={f.value}>
                          {f.label}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>

                <div className="grid sm:grid-cols-2 gap-5">
                  <div className="space-y-2">
                    <Label htmlFor="company">Company</Label>
                    <Input id="company" name="company" placeholder="Acme Health Group" maxLength={200} required aria-invalid={!!errors.company} />
                    {errors.company && <p className="text-xs text-destructive">{errors.company}</p>}
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="role">Your role</Label>
                    <Input id="role" name="role" placeholder="COO, Practice Administrator…" maxLength={150} required aria-invalid={!!errors.role} />
                    {errors.role && <p className="text-xs text-destructive">{errors.role}</p>}
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="email">Work email</Label>
                  <Input id="email" name="email" type="email" placeholder="you@yourorganization.com" maxLength={255} required aria-invalid={!!errors.email} />
                  {errors.email && <p className="text-xs text-destructive">{errors.email}</p>}
                </div>

                <div className="space-y-2">
                  <Label htmlFor="message">Tell us about your goals</Label>
                  <Textarea
                    id="message"
                    name="message"
                    rows={5}
                    maxLength={2000}
                    placeholder="A few sentences about your organization, current challenges, and what you'd like to accomplish."
                    required
                    aria-invalid={!!errors.message}
                  />
                  {errors.message && <p className="text-xs text-destructive">{errors.message}</p>}
                </div>

                <div className="flex items-center justify-between gap-4 pt-2">
                  <p className="text-xs text-muted-foreground">
                    Your information is confidential and used only to follow up on this request.
                  </p>
                  <Button type="submit" size="lg" className="gap-2" disabled={submitting}>
                    {submitting ? "Sending…" : (<>Request consultation <Send size={16} /></>)}
                  </Button>
                </div>
              </form>
            )}

            <div className="mt-10 flex flex-wrap justify-center gap-8 text-sm text-muted-foreground">
              <span className="flex items-center gap-2"><Phone size={14} /> (555) 987-6543</span>
              <span className="flex items-center gap-2"><Mail size={14} /> hello@apexsalus.com</span>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Consultation;
