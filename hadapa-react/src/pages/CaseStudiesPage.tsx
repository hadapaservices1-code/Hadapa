import SEO from '@/components/SEO'
import { Link } from 'react-router-dom'

// ── Types ──────────────────────────────────────────────────────────────────
interface ChallengeItem { text: string }
interface SolutionItem  { title: string; points: string[] }
interface CaseStudy {
  id:           string
  pillar:       'salesforce' | 'servicenow' | 'migration'
  industry:     string
  engagement:   string
  headline:     string
  subheadline:  string
  challenge:    string
  challengePoints: ChallengeItem[]
  solution:     SolutionItem[]
  capabilities: string[]
  results:      { metric: string; label: string; detail: string }[]
  whyMatters:   string
  techStack:    string[]
  duration:     string
  accentFrom:   string
  accentTo:     string
}

// ── Data ───────────────────────────────────────────────────────────────────
const caseStudies: CaseStudy[] = [
  {
    id:         'manufacturing-sfmc',
    pillar:     'salesforce',
    industry:   'Manufacturing',
    engagement: 'North America · B2B & B2C',
    headline:   'Transforming Marketing & Sales Operations for a Multi-Brand Manufacturing Enterprise',
    subheadline:'End-to-end Salesforce implementation integrating CRM, Marketing Cloud, and ERP to streamline lead generation, customer engagement, and order workflows.',
    challenge:  'The client was operating with fragmented systems and highly manual processes across their multi-brand portfolio. Marketing, sales, and operations each ran in silos — creating friction at every customer touchpoint.',
    challengePoints: [
      { text: 'Email marketing limited to basic broadcasts with high spam rates and low engagement' },
      { text: 'No unified customer view across brands or the distributor network' },
      { text: 'Manual quote-to-order workflows consuming significant staff hours' },
      { text: 'Disconnected ERP and CRM with no real-time data exchange' },
      { text: 'Zero lead attribution — high customer acquisition cost, unknown ROI' },
      { text: 'No structured customer lifecycle or retention marketing strategy' },
    ],
    solution: [
      {
        title: 'Marketing Cloud Transformation',
        points: [
          'Designed multi-brand Business Unit architecture in Marketing Cloud',
          'Built lifecycle journeys: lead → nurture → conversion → retention',
          'Implemented behavioral segmentation using engagement and purchase data',
          'Enabled dynamic email personalization using AMPscript across brands',
          'Deployed deliverability strategy (IP warming, domain auth, suppression lists)',
        ],
      },
      {
        title: 'CRM Optimization',
        points: [
          'Redesigned the data model for contacts, accounts, and opportunities',
          'Implemented lead-to-opportunity pipeline automation using Flow',
          'Streamlined quote management with approval workflows',
        ],
      },
      {
        title: 'ERP Integration',
        points: [
          'Built bi-directional API integration between Salesforce and ERP',
          'Automated quote creation, order sync, and customer data updates in real time',
          'Implemented robust error handling and retry mechanisms',
        ],
      },
      {
        title: 'Unified Reporting',
        points: [
          'Cross-platform reporting dashboard spanning campaign performance, lead sources, and revenue attribution',
          'Closed-loop reporting connecting marketing spend to closed-won revenue',
        ],
      },
    ],
    capabilities: [
      'Multi-BU Marketing Cloud architecture',
      'CRM + ERP integration design',
      'Customer journey orchestration',
      'Data model optimization',
      'Deliverability improvement strategy',
      'Automation at scale',
    ],
    results: [
      { metric: '↑ 3×',  label: 'Email Engagement',    detail: 'Significant uplift in open & click rates through journey personalization' },
      { metric: '↓ 80%', label: 'Manual Order Effort',  detail: 'Quote-to-order automation eliminated the majority of manual data entry' },
      { metric: '100%',  label: 'Lead Attribution',     detail: 'Full-funnel campaign attribution from first touch to closed revenue' },
      { metric: '1 View', label: 'Unified Customer',    detail: 'Single customer record spanning all brands, channels, and touchpoints' },
    ],
    whyMatters:  'This transformation enabled the client to evolve from basic batch-and-blast email to a fully data-driven revenue engine — with marketing, sales, and operations aligned around a single customer view.',
    techStack:   ['Salesforce Sales Cloud', 'Salesforce Marketing Cloud', 'Journey Builder', 'Automation Studio', 'AMPscript / SSJS', 'REST API Integration', 'ERP Middleware'],
    duration:    '6 months',
    accentFrom:  'from-blue-500',
    accentTo:    'to-cyan-500',
  },
  {
    id:         'org-migration',
    pillar:     'salesforce',
    industry:   'Technology / Media',
    engagement: 'Enterprise · Multi-org environment',
    headline:   'Large-Scale Salesforce Org Consolidation for Enterprise Transformation',
    subheadline:'Seamless migration and consolidation of multiple legacy Salesforce environments into a single, optimized, future-ready architecture.',
    challenge:  'The client had grown through acquisitions, resulting in multiple disconnected Salesforce orgs with divergent configurations, duplicated logic, and no central governance. Operational overhead was high and the platform was slowing innovation rather than enabling it.',
    challengePoints: [
      { text: 'Multiple Salesforce orgs with inconsistent data models and configurations' },
      { text: 'High volume of technical debt: redundant flows, outdated Apex, conflicting rules' },
      { text: 'Complex cross-org integrations adding fragility to every deployment' },
      { text: 'Users operating differently in each org — training and change management burden' },
      { text: 'Maintenance costs escalating with each new product addition' },
    ],
    solution: [
      {
        title: 'Target Architecture & Migration Roadmap',
        points: [
          'Assessed all org configurations: objects, fields, flows, Apex, integrations, profiles',
          'Designed unified target architecture with clear data model standards',
          'Defined phased migration roadmap with milestone checkpoints and rollback gates',
        ],
      },
      {
        title: 'Data Migration & Integrity',
        points: [
          'Migrated Accounts, Contacts, Opportunities, and all custom objects',
          'Full deduplication, transformation, and validation before load',
          'Reconciliation reports verified record counts and field mappings post-migration',
        ],
      },
      {
        title: 'Metadata Migration & Rebuild',
        points: [
          'Rebuilt and rationalized Flows, Apex triggers, validation rules, and page layouts',
          'Consolidated permission sets and profiles into a clean security model',
          'Established Dev → QA → Prod environment strategy with CI/CD alignment',
        ],
      },
      {
        title: 'Governance Framework',
        points: [
          'Defined naming conventions, change management processes, and release protocols',
          'Deployed platform governance documentation for ongoing admin team',
        ],
      },
    ],
    capabilities: [
      'Large-scale Salesforce migration strategy',
      'Data transformation & field mapping',
      'Metadata rebuild and rationalization',
      'Environment management (Dev / QA / Prod)',
      'Governance framework design',
      'DevOps process alignment',
    ],
    results: [
      { metric: '1',     label: 'Unified Org',          detail: 'Consolidated multiple orgs into a single, governed platform' },
      { metric: '↓ 60%', label: 'Technical Debt',       detail: 'Redundant logic, outdated flows, and dead code removed' },
      { metric: '↑ 2×',  label: 'Deployment Speed',     detail: 'Faster release cycles with standardized DevOps process' },
      { metric: '↓ 40%', label: 'Maintenance Cost',     detail: 'Reduced ongoing admin overhead with simplified architecture' },
    ],
    whyMatters:  'The consolidation eliminated compounding complexity and positioned the client for accelerated innovation. Their platform team went from reactive firefighting to proactive roadmap delivery.',
    techStack:   ['Salesforce Core Platform', 'Apex / LWC', 'Declarative Flows', 'Data Loader / ETL', 'DevOps Tooling', 'CI/CD Pipeline'],
    duration:    '5 months',
    accentFrom:  'from-violet-500',
    accentTo:    'to-blue-500',
  },
  {
    id:         'experience-cloud-portal',
    pillar:     'salesforce',
    industry:   'Licensing / Technology',
    engagement: 'External partner ecosystem',
    headline:   'Digitizing Partner Operations with a Scalable Royalty Self-Service Portal',
    subheadline:'Built a Salesforce Experience Cloud portal to replace a fully manual, Excel-based royalty reporting process — delivering accuracy, visibility, and scale for the partner ecosystem.',
    challenge:  'Partners submitted royalty reports via email-attached Excel files. The process was opaque, error-prone, and consumed substantial internal operational bandwidth every reporting cycle.',
    challengePoints: [
      { text: 'Royalty reports submitted as unvalidated Excel attachments via email' },
      { text: 'High error rates in submissions: wrong formats, missing data, miscalculations' },
      { text: 'No real-time validation — errors discovered only after manual review' },
      { text: 'Partners had zero visibility into submission status or historical reports' },
      { text: 'Internal team spent days each cycle validating, correcting, and chasing partners' },
    ],
    solution: [
      {
        title: 'Experience Cloud Portal (LWR)',
        points: [
          'Built a branded self-service portal on Experience Cloud using the LWR runtime',
          'Secure partner login with role-based access controls per account and deal type',
          'Dashboard showing submission history, status, and outstanding obligations',
        ],
      },
      {
        title: 'Dynamic Template Generation',
        points: [
          'Portal generates custom Excel templates per partner — based on active contracts, product lines, and deal structures',
          'Eliminates version mismatch by ensuring partners always download the correct template',
        ],
      },
      {
        title: 'Validation Engine',
        points: [
          'Front-end validation via LWC: field types, required values, calculated totals',
          'Backend Apex validation on upload: business rules, contract limits, anomaly detection',
          'Inline error messages guide partners to correct submissions without IT involvement',
        ],
      },
      {
        title: 'Automation & Operations',
        points: [
          'Automatic case creation on valid submission — routed to review queue',
          'Email notifications on submission received, accepted, or rejected with reasons',
          'Partner-facing dashboards and internal reporting on submission rates and accuracy',
        ],
      },
    ],
    capabilities: [
      'Experience Cloud (LWR) implementation',
      'Lightning Web Component development',
      'Complex data validation logic',
      'Dynamic file generation',
      'Partner ecosystem enablement',
      'Case management automation',
    ],
    results: [
      { metric: '↓ 85%', label: 'Operational Effort',  detail: 'Manual review and correction work reduced by ~85% per reporting cycle' },
      { metric: '↑ 95%', label: 'Submission Accuracy', detail: 'Real-time validation virtually eliminated submission errors' },
      { metric: '↓ 70%', label: 'Cycle Time',          detail: 'Reporting cycles completed faster with automated routing and review' },
      { metric: '100%',  label: 'Partner Visibility',  detail: 'Every partner now has real-time access to submission history and status' },
    ],
    whyMatters:  'What started as an operational burden became a competitive differentiator — partners cite the portal as evidence of a mature, professional licensing operation that values their time.',
    techStack:   ['Salesforce Experience Cloud', 'Lightning Web Components', 'Apex', 'Dynamic File Generation', 'Salesforce Flows', 'Email Alerts'],
    duration:    '4 months',
    accentFrom:  'from-cyan-500',
    accentTo:    'to-teal-500',
  },
  {
    id:         'servicenow-migration',
    pillar:     'servicenow',
    industry:   'Enterprise IT',
    engagement: 'Multi-instance environment',
    headline:   'Enterprise ServiceNow Consolidation for Unified IT Operations',
    subheadline:'Migrated and consolidated multiple ServiceNow instances into a single optimized platform — delivering operational efficiency, governance, and scalability across the enterprise.',
    challenge:  'The organization had accumulated multiple ServiceNow instances through mergers and organic growth. Each instance had divergent configurations, duplicated ITSM processes, and no shared governance — creating risk and inefficiency at the IT operations layer.',
    challengePoints: [
      { text: 'Multiple isolated ServiceNow instances with no shared configuration standards' },
      { text: 'Duplicate ITSM and CSM workflows across teams, creating inconsistent experiences' },
      { text: 'Migration risk from divergent patch levels, custom scripts, and integrations' },
      { text: 'High operational overhead maintaining separate environments and teams' },
      { text: 'Reporting and SLA tracking fragmented — no enterprise-wide visibility' },
    ],
    solution: [
      {
        title: 'Migration & Consolidation Strategy',
        points: [
          'Audited all existing instances: ITSM modules, CSM configurations, integrations, and custom scripts',
          'Designed target-state architecture for a single, unified ServiceNow platform',
          'Defined migration roadmap with phased cutover and rollback plan per business unit',
        ],
      },
      {
        title: 'Environment Alignment',
        points: [
          'Aligned all instances to a consistent patch and version baseline before migration',
          'Managed Dev → Test → Prod environment parity throughout the program',
          'Coordinated testing windows across business units to avoid operational impact',
        ],
      },
      {
        title: 'Workflow Standardization',
        points: [
          'Merged and rationalized ITSM (Incident, Change, Problem) and CSM workflows',
          'Standardized catalog items, SLA definitions, and escalation policies',
          'Rebuilt integrations to third-party tools against the unified platform',
        ],
      },
      {
        title: 'Governance & Stakeholder Coordination',
        points: [
          'Established a center of excellence model for ongoing governance',
          'Delivered admin and developer documentation for the consolidated platform',
          'Trained platform owners across all business units on unified processes',
        ],
      },
    ],
    capabilities: [
      'ServiceNow migration strategy & execution',
      'Multi-instance environment management',
      'ITSM & CSM configuration',
      'Workflow rationalization',
      'Platform governance design',
      'Stakeholder coordination across BUs',
    ],
    results: [
      { metric: '1',     label: 'Unified Platform',    detail: 'All business units operating on a single ServiceNow instance' },
      { metric: '↓ 50%', label: 'Maintenance Overhead', detail: 'Eliminated duplicated admin work across separate instances' },
      { metric: '↑ 30%', label: 'ITSM Resolution Speed', detail: 'Standardized workflows and routing improved mean-time-to-resolve' },
      { metric: '360°',  label: 'IT Visibility',       detail: 'Enterprise-wide reporting on incidents, changes, and SLA performance' },
    ],
    whyMatters:  'A single ServiceNow platform gives the organization a true system of record for IT operations — enabling faster decisions, cleaner data, and a scalable foundation for future automation and AI-assisted workflows.',
    techStack:   ['ServiceNow ITSM', 'ServiceNow CSM', 'Flow Designer', 'Integration Hub', 'Service Catalog', 'DevOps / Update Sets'],
    duration:    '7 months',
    accentFrom:  'from-emerald-500',
    accentTo:    'to-cyan-500',
  },
]

// ── Pillar badge config ────────────────────────────────────────────────────
const pillarConfig = {
  salesforce:  { label: '☁️ Salesforce',  className: 'bg-brand/10 text-brand-bright border-brand/20' },
  servicenow:  { label: '⚙️ ServiceNow',  className: 'bg-cyan-500/10 text-cyan-300 border-cyan-500/20' },
  migration:   { label: '🚚 Migration',   className: 'bg-violet-500/10 text-violet-300 border-violet-500/20' },
}

// ── CaseStudyCard ──────────────────────────────────────────────────────────
function CaseStudyCard({ cs, index }: { cs: CaseStudy; index: number }) {
  const pillar = pillarConfig[cs.pillar]

  return (
    <article
      id={cs.id}
      className="rounded-3xl border border-white/[0.07] bg-white/[0.015] overflow-hidden"
    >
      {/* Accent bar */}
      <div className={`h-1.5 w-full bg-gradient-to-r ${cs.accentFrom} ${cs.accentTo}`} />

      {/* Header */}
      <div className="p-8 md:p-10 border-b border-white/[0.06]">
        <div className="flex flex-wrap items-start gap-3 mb-5">
          <span className="text-xs font-bold px-3 py-1.5 rounded-full border bg-brand/10 text-brand-bright border-brand/20">
            {String(index + 1).padStart(2, '0')}
          </span>
          <span className={`text-xs font-bold px-3 py-1.5 rounded-full border ${pillar.className}`}>
            {pillar.label}
          </span>
          <span className="text-xs font-medium px-3 py-1.5 rounded-full border border-white/10 text-white/50">
            {cs.industry}
          </span>
          <span className="text-xs text-white/30 px-3 py-1.5">{cs.engagement}</span>
        </div>

        <h2 className="text-2xl md:text-3xl font-black text-white leading-tight mb-3 tracking-tight">
          {cs.headline}
        </h2>
        <p className="text-white/50 text-base leading-relaxed max-w-3xl">{cs.subheadline}</p>

        {/* Duration badge */}
        <div className="mt-4 inline-flex items-center gap-2 text-xs text-white/40">
          <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <circle cx="12" cy="12" r="10"/><path d="M12 6v6l4 2"/>
          </svg>
          Engagement duration: <span className="text-white/60 font-semibold">{cs.duration}</span>
        </div>
      </div>

      {/* Results strip */}
      <div className="grid grid-cols-2 md:grid-cols-4 border-b border-white/[0.06]">
        {cs.results.map((r, i) => (
          <div
            key={r.label}
            className={`p-6 text-center ${i < cs.results.length - 1 ? 'border-r border-white/[0.06]' : ''}`}
          >
            <div className={`text-2xl md:text-3xl font-black mb-1 bg-gradient-to-r ${cs.accentFrom} ${cs.accentTo} bg-clip-text text-transparent`}>
              {r.metric}
            </div>
            <div className="text-xs font-bold text-white/70 mb-1">{r.label}</div>
            <div className="text-xs text-white/35 leading-snug hidden md:block">{r.detail}</div>
          </div>
        ))}
      </div>

      {/* Body: Challenge + Solution + Capabilities */}
      <div className="grid grid-cols-1 lg:grid-cols-5 divide-y lg:divide-y-0 lg:divide-x divide-white/[0.06]">

        {/* Challenge */}
        <div className="lg:col-span-2 p-8 md:p-10">
          <div className="flex items-center gap-2 mb-4">
            <span className="w-5 h-5 rounded-full bg-red-500/15 flex items-center justify-center text-red-400 text-xs">!</span>
            <h3 className="text-xs font-bold uppercase tracking-widest text-white/35">Business Challenge</h3>
          </div>
          <p className="text-sm text-white/55 leading-relaxed mb-5">{cs.challenge}</p>
          <ul className="space-y-2.5">
            {cs.challengePoints.map((cp, i) => (
              <li key={i} className="flex items-start gap-2.5 text-sm text-white/50 leading-relaxed">
                <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-red-400/50 flex-shrink-0" />
                {cp.text}
              </li>
            ))}
          </ul>
        </div>

        {/* Solution */}
        <div className="lg:col-span-3 p-8 md:p-10">
          <div className="flex items-center gap-2 mb-4">
            <span className="w-5 h-5 rounded-full bg-brand/15 flex items-center justify-center text-brand-bright text-xs">✓</span>
            <h3 className="text-xs font-bold uppercase tracking-widest text-white/35">Solution Delivered</h3>
          </div>
          <div className="space-y-6">
            {cs.solution.map((s, i) => (
              <div key={i}>
                <h4 className="text-sm font-bold text-white mb-2">{s.title}</h4>
                <ul className="space-y-1.5">
                  {s.points.map((pt, j) => (
                    <li key={j} className="flex items-start gap-2.5 text-sm text-white/50 leading-relaxed">
                      <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-brand-cyan/50 flex-shrink-0" />
                      {pt}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Footer: Capabilities + Tech stack + Why it matters */}
      <div className="p-8 md:p-10 border-t border-white/[0.06] bg-white/[0.01]">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">

          {/* Capabilities */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-widest text-white/30 mb-3">Key Capabilities</h4>
            <div className="flex flex-wrap gap-2">
              {cs.capabilities.map(cap => (
                <span key={cap} className="text-xs px-2.5 py-1 rounded-lg border border-white/[0.08] bg-white/[0.03] text-white/55">
                  {cap}
                </span>
              ))}
            </div>
          </div>

          {/* Tech stack */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-widest text-white/30 mb-3">Tech Stack</h4>
            <div className="flex flex-wrap gap-2">
              {cs.techStack.map(t => (
                <span key={t} className={`text-xs px-2.5 py-1 rounded-lg border bg-gradient-to-r ${cs.accentFrom}/[0.08] ${cs.accentTo}/[0.08] border-white/[0.1] text-white/60`}>
                  {t}
                </span>
              ))}
            </div>
          </div>

          {/* Why it matters */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-widest text-white/30 mb-3">Strategic Impact</h4>
            <p className="text-sm text-white/50 leading-relaxed">{cs.whyMatters}</p>
          </div>

        </div>
      </div>
    </article>
  )
}

// ── Page ───────────────────────────────────────────────────────────────────
export default function CaseStudiesPage() {
  return (
    <>
      <SEO
        title="Case Studies — Salesforce, ServiceNow & Migration"
        description="Explore Hadapa Services client case studies — real outcomes from Salesforce, ServiceNow, and migration engagements across manufacturing, technology, licensing, and enterprise IT."
        path="/case-studies"
      />

      {/* Hero */}
      <section className="relative pt-36 pb-20 bg-bg overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_70%_60%_at_50%_0%,rgba(59,130,246,0.1),transparent)]" />
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.015)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.015)_1px,transparent_1px)] bg-[size:60px_60px]" />

        <div className="relative max-w-7xl mx-auto px-6 text-center">
          <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-brand/30 bg-brand/10 text-xs font-bold uppercase tracking-widest text-brand-bright mb-6">
            <span className="w-1.5 h-1.5 rounded-full bg-brand-cyan animate-pulse" />
            Client Outcomes
          </span>

          <h1 className="text-5xl md:text-7xl font-black text-white leading-[1.05] tracking-tight mb-6">
            Real Results.{' '}
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-brand-bright to-brand-cyan">
              Proven Impact.
            </span>
          </h1>
          <p className="text-lg text-white/50 max-w-2xl mx-auto mb-10 leading-relaxed">
            We measure success by the outcomes we create — not just the projects we ship. These engagements represent the depth and breadth of our delivery across Salesforce, ServiceNow, and Migration.
          </p>

          {/* Aggregate stats */}
          <div className="flex flex-wrap gap-10 justify-center mb-12">
            {[
              { val: '4',    label: 'Case Studies' },
              { val: '3',    label: 'Practice Areas' },
              { val: '10+',  label: 'Years Delivering' },
              { val: '100%', label: 'Client Focused' },
            ].map(s => (
              <div key={s.label}>
                <div className="text-3xl font-black text-white">{s.val}</div>
                <div className="text-sm text-white/40 mt-1">{s.label}</div>
              </div>
            ))}
          </div>

          {/* Jump links */}
          <div className="flex flex-wrap gap-3 justify-center">
            {caseStudies.map((cs, i) => (
              <a
                key={cs.id}
                href={`#${cs.id}`}
                className="text-xs font-semibold px-4 py-2 rounded-full border border-white/10 text-white/55 hover:text-white hover:border-white/20 transition-all duration-200"
              >
                {String(i + 1).padStart(2, '0')} — {cs.industry}
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Case study cards */}
      <section className="pb-24 bg-bg">
        <div className="max-w-7xl mx-auto px-6 space-y-8">
          {caseStudies.map((cs, i) => (
            <CaseStudyCard key={cs.id} cs={cs} index={i} />
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-bg-surface relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_60%_at_50%_50%,rgba(59,130,246,0.12),transparent)]" />
        <div className="relative max-w-3xl mx-auto px-6 text-center">
          <span className="inline-block px-3 py-1.5 text-xs font-bold uppercase tracking-widest text-brand-bright bg-brand/10 border border-brand/20 rounded-full mb-5">
            Your Project
          </span>
          <h2 className="text-4xl md:text-5xl font-black text-white tracking-tight mb-4">
            Ready to Add Your{' '}
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-brand-bright to-brand-cyan">
              Success Story?
            </span>
          </h2>
          <p className="text-white/45 text-base mb-8 max-w-xl mx-auto leading-relaxed">
            Whether you're planning a Salesforce transformation, a ServiceNow rollout, or a complex migration — let's talk about what success looks like for your organization.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 px-7 py-4 rounded-xl bg-gradient-brand text-white font-semibold text-sm shadow-glow-blue hover:shadow-glow-blue-lg hover:-translate-y-1 transition-all duration-300"
            >
              Schedule a Free Consultation
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
            </Link>
            <Link
              to="/services"
              className="inline-flex items-center gap-2 px-7 py-4 rounded-xl border border-white/10 text-white/80 hover:text-white hover:border-white/20 font-semibold text-sm transition-all duration-300"
            >
              Explore Our Services
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
