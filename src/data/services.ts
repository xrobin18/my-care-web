import { ShieldCheck, BarChart3, FileText, Award, LucideIcon } from "lucide-react";

export interface ServiceDetail {
  slug: string;
  title: string;
  shortTitle: string;
  icon: LucideIcon;
  tagline: string;
  summary: string;
  intro: string;
  whatWeDo: { title: string; desc: string }[];
  outcomes: string[];
  approach: { step: string; title: string; desc: string }[];
  idealFor: string[];
}

export const services: ServiceDetail[] = [
  {
    slug: "healthcare-operations",
    shortTitle: "Healthcare Operations",
    title: "Healthcare Operations Consulting",
    icon: BarChart3,
    tagline: "Run a tighter, more profitable practice without burning out your team.",
    summary:
      "Streamline workflows, optimize revenue cycles, and implement best practices that drive measurable operational improvements across your organization.",
    intro:
      "Healthcare organizations lose millions every year to friction — duplicated work, broken handoffs, slow billing cycles, and underused technology. ApexSalus partners with leadership teams to surface those inefficiencies, redesign the way work flows, and put metrics in place so improvements actually stick.",
    whatWeDo: [
      { title: "Workflow & Process Redesign", desc: "Map current-state operations, eliminate redundant steps, and rebuild workflows around patient outcomes and staff capacity." },
      { title: "Revenue Cycle Optimization", desc: "Tighten coding, billing, collections, and denial management to recover revenue you are already entitled to." },
      { title: "Staffing & Productivity Models", desc: "Right-size teams against demand, build sustainable schedules, and reduce reliance on costly contract labor." },
      { title: "Technology & EHR Optimization", desc: "Get more value from the systems you already own — templates, automations, dashboards, and integrations that save clinician time." },
    ],
    outcomes: [
      "Reduced operating cost per visit or per case",
      "Faster patient throughput and shorter wait times",
      "Lower denial rates and improved days-in-AR",
      "Higher staff retention and engagement scores",
    ],
    approach: [
      { step: "01", title: "Operational Diagnostic", desc: "On-site and data review to identify the highest-leverage opportunities in 2–4 weeks." },
      { step: "02", title: "Roadmap & Prioritization", desc: "A sequenced plan tied to dollars, hours, and patient impact — not a 200-page binder." },
      { step: "03", title: "Hands-On Implementation", desc: "We work alongside your team to redesign workflows, train staff, and rebuild SOPs." },
      { step: "04", title: "Measure & Sustain", desc: "Dashboards and cadenced reviews so wins compound instead of fading." },
    ],
    idealFor: [
      "Multi-site primary care and specialty groups",
      "Ambulatory surgery centers and clinics",
      "Behavioral health and substance use organizations",
      "Hospital service lines and outpatient departments",
    ],
  },
  {
    slug: "strategic-planning",
    shortTitle: "Strategic Planning",
    title: "Strategic Planning & Growth",
    icon: FileText,
    tagline: "Grow with intent — not by accident.",
    summary:
      "Data-driven strategic planning, market analysis, and growth roadmaps tailored to healthcare organizations of all sizes.",
    intro:
      "Healthcare is changing faster than most strategic plans can keep up with. We help executive teams cut through the noise, pressure-test assumptions, and commit to a focused set of moves that actually move the business — whether that is opening a new location, launching a service line, or repositioning for value-based care.",
    whatWeDo: [
      { title: "Market & Competitive Analysis", desc: "Service-area demographics, payer mix, referral patterns, and competitor positioning translated into concrete opportunities." },
      { title: "Service Line Strategy", desc: "Evaluate, launch, expand, or sunset service lines based on demand, margin, and mission fit." },
      { title: "Growth & Expansion Planning", desc: "De-novo sites, partnerships, affiliations, and acquisitions modeled with realistic ramp curves." },
      { title: "Executive Strategic Offsites", desc: "Facilitated leadership sessions that produce a written plan, owners, and a 12-month cadence." },
    ],
    outcomes: [
      "A focused 3-year plan with clear priorities and owners",
      "Defensible business cases for major investments",
      "Aligned executive and board leadership",
      "Measurable progress reviewed quarterly, not annually",
    ],
    approach: [
      { step: "01", title: "Listen & Diagnose", desc: "Interviews with leaders, clinicians, and board members to understand the real strategic questions." },
      { step: "02", title: "Analyze the Market", desc: "Quantitative analysis of demand, payers, competitors, and capacity." },
      { step: "03", title: "Co-Create the Plan", desc: "Facilitated working sessions where the leadership team builds the plan — we do not hand them one." },
      { step: "04", title: "Operationalize", desc: "Translate strategy into initiatives, owners, metrics, and a meeting cadence." },
    ],
    idealFor: [
      "Executive and board leadership of healthcare organizations",
      "Independent practices considering growth or affiliation",
      "Health systems repositioning service lines",
      "Investor-backed platforms needing a credible roadmap",
    ],
  },
  {
    slug: "compliance",
    shortTitle: "Compliance",
    title: "Healthcare Compliance",
    icon: ShieldCheck,
    tagline: "Stay ahead of regulators — not chased by them.",
    summary:
      "Build and maintain a compliance program that protects your organization from HIPAA, OIG, CMS, and state regulatory risk.",
    intro:
      "A reactive compliance program is the most expensive kind. ApexSalus helps healthcare organizations stand up — or modernize — compliance programs that catch issues early, document the right things, and free leadership from constant firefighting.",
    whatWeDo: [
      { title: "HIPAA Privacy & Security", desc: "Risk analyses, policies, workforce training, and breach response readiness aligned to the HIPAA Security Rule." },
      { title: "Compliance Program Design", desc: "The seven elements of an effective compliance program — built right-sized for your organization." },
      { title: "Audits & Mock Investigations", desc: "Internal audits, billing and coding reviews, and mock OIG/CMS investigations to surface gaps before regulators do." },
      { title: "Policies, Training & Documentation", desc: "Practical policies people will actually follow, plus training that proves due diligence." },
    ],
    outcomes: [
      "Reduced risk of fines, penalties, and corporate integrity agreements",
      "A documented, defensible compliance program",
      "Leadership confidence in audit and survey readiness",
      "Faster, calmer response when incidents do occur",
    ],
    approach: [
      { step: "01", title: "Risk Assessment", desc: "Identify the highest-likelihood, highest-impact compliance risks specific to your organization." },
      { step: "02", title: "Gap Analysis", desc: "Benchmark current policies, training, and controls against regulatory expectations." },
      { step: "03", title: "Remediation", desc: "Close gaps with policies, training, monitoring, and the right governance structure." },
      { step: "04", title: "Ongoing Oversight", desc: "Quarterly reviews, fractional compliance officer support, and incident response on call." },
    ],
    idealFor: [
      "Growing practices without a dedicated compliance officer",
      "Organizations preparing for an audit or after an adverse event",
      "Private equity–backed platforms standardizing across sites",
      "Behavioral health, telehealth, and digital health companies",
    ],
  },
  {
    slug: "accreditation",
    shortTitle: "Accreditation",
    title: "Accreditation Readiness",
    icon: Award,
    tagline: "Walk into your survey ready — not hoping.",
    summary:
      "Expert guidance for Joint Commission, AAAHC, CARF, URAC, and state licensure surveys, from initial accreditation through triennial renewal.",
    intro:
      "Accreditation surveys reward organizations that have operationalized the standards, not the ones that scramble in the final 90 days. We help you build durable evidence, prepare your teams, and walk surveyors through a clean, well-run organization.",
    whatWeDo: [
      { title: "Mock Surveys", desc: "Full tracer methodology mock surveys that mirror what surveyors actually look for and ask." },
      { title: "Standards Gap Analysis", desc: "Detailed mapping of current practice against the relevant chapters and elements of performance." },
      { title: "Document & Evidence Preparation", desc: "Policies, plans, logs, minutes, and competencies organized into a survey-ready evidence binder." },
      { title: "Survey-Day Support", desc: "On-site or virtual coaching the week of the survey, including leadership prep and tracer rehearsals." },
    ],
    outcomes: [
      "Full accreditation with minimal findings",
      "A confident, prepared staff at every level",
      "Standards embedded in day-to-day operations, not just binders",
      "A clear plan to maintain readiness between surveys",
    ],
    approach: [
      { step: "01", title: "Scope & Standards Review", desc: "Confirm the accrediting body, scope of services, and applicable standards." },
      { step: "02", title: "Mock Survey & Gap Report", desc: "Identify findings before the surveyor does, prioritized by likelihood and impact." },
      { step: "03", title: "Remediation Sprint", desc: "Fix gaps, build evidence, and rehearse tracers with frontline teams." },
      { step: "04", title: "Survey Support", desc: "Be in your corner before, during, and after the survey." },
    ],
    idealFor: [
      "Organizations seeking initial accreditation",
      "Triennial reaccreditation preparation",
      "Post-survey corrective action plans",
      "New service lines or sites being added to existing accreditation",
    ],
  },
];

export const getService = (slug: string) => services.find((s) => s.slug === slug);
