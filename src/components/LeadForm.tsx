import { useState } from "react";
import { z } from "zod";
import { motion } from "framer-motion";
import { Send, CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { toast } from "@/hooks/use-toast";
import { supabase } from "@/integrations/supabase/client";

const leadSchema = z.object({
  company: z.string().trim().min(1, "Company is required").max(200),
  role: z.string().trim().min(1, "Role is required").max(150),
  email: z.string().trim().email("Enter a valid email").max(255),
  message: z.string().trim().min(1, "Message is required").max(2000),
});

interface LeadFormProps {
  serviceSlug: string;
  serviceTitle: string;
}

const LeadForm = ({ serviceSlug, serviceTitle }: LeadFormProps) => {
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
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

    const parsed = leadSchema.safeParse(data);
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
    const { error } = await supabase.from("leads").insert({
      service_slug: serviceSlug,
      service_title: serviceTitle,
      company: parsed.data.company,
      role: parsed.data.role,
      email: parsed.data.email,
      message: parsed.data.message,
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
      title: "Inquiry received",
      description: `Thanks — our team will reach out about ${serviceTitle} within one business day.`,
    });
  };

  return (
    <section id="contact-form" className="py-20 bg-sage-light/40">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-10"
          >
            <span className="text-sage text-sm font-semibold uppercase tracking-wider">Start the conversation</span>
            <h2 className="text-3xl md:text-4xl font-display text-foreground mt-2 mb-3">
              Talk to us about {serviceTitle}
            </h2>
            <p className="text-muted-foreground">
              Tell us a bit about your organization and what you're working on. We respond within one business day.
            </p>
          </motion.div>

          {submitted ? (
            <div className="bg-card border border-border rounded-2xl p-10 text-center">
              <div className="w-14 h-14 rounded-full bg-sage-light flex items-center justify-center mx-auto mb-4">
                <CheckCircle2 size={28} className="text-sage" />
              </div>
              <h3 className="font-display text-2xl text-foreground mb-2">Thanks for reaching out</h3>
              <p className="text-muted-foreground mb-6">
                We received your inquiry about {serviceTitle} and will be in touch shortly.
              </p>
              <Button variant="outline" onClick={() => setSubmitted(false)}>
                Send another message
              </Button>
            </div>
          ) : (
            <form
              onSubmit={handleSubmit}
              className="bg-card border border-border rounded-2xl p-6 md:p-10 space-y-5 shadow-[var(--card-shadow)]"
              noValidate
            >
              <div className="grid sm:grid-cols-2 gap-5">
                <div className="space-y-2">
                  <Label htmlFor={`company-${serviceSlug}`}>Company</Label>
                  <Input
                    id={`company-${serviceSlug}`}
                    name="company"
                    placeholder="Acme Health Group"
                    maxLength={200}
                    required
                    aria-invalid={!!errors.company}
                  />
                  {errors.company && <p className="text-xs text-destructive">{errors.company}</p>}
                </div>
                <div className="space-y-2">
                  <Label htmlFor={`role-${serviceSlug}`}>Your role</Label>
                  <Input
                    id={`role-${serviceSlug}`}
                    name="role"
                    placeholder="COO, Practice Administrator…"
                    maxLength={150}
                    required
                    aria-invalid={!!errors.role}
                  />
                  {errors.role && <p className="text-xs text-destructive">{errors.role}</p>}
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor={`email-${serviceSlug}`}>Work email</Label>
                <Input
                  id={`email-${serviceSlug}`}
                  name="email"
                  type="email"
                  placeholder="you@yourorganization.com"
                  maxLength={255}
                  required
                  aria-invalid={!!errors.email}
                />
                {errors.email && <p className="text-xs text-destructive">{errors.email}</p>}
              </div>

              <div className="space-y-2">
                <Label htmlFor={`message-${serviceSlug}`}>What are you trying to solve?</Label>
                <Textarea
                  id={`message-${serviceSlug}`}
                  name="message"
                  placeholder={`A few sentences about your situation and how ${serviceTitle} might help.`}
                  rows={5}
                  maxLength={2000}
                  required
                  aria-invalid={!!errors.message}
                />
                {errors.message && <p className="text-xs text-destructive">{errors.message}</p>}
              </div>

              <div className="flex items-center justify-between gap-4 pt-2">
                <p className="text-xs text-muted-foreground">
                  Your information is kept confidential and used only to follow up on this inquiry.
                </p>
                <Button type="submit" size="lg" className="gap-2" disabled={submitting}>
                  {submitting ? "Sending…" : (<>Send inquiry <Send size={16} /></>)}
                </Button>
              </div>
            </form>
          )}
        </div>
      </div>
    </section>
  );
};

export default LeadForm;
