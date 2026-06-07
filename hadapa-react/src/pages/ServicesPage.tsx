import SEO            from '@/components/SEO'
import CTA             from '@/components/CTA'
import { services }   from '@/components/Services'

// ── Data ─────────────────────────────────────────────────────────────────────
const pillars = [
  {
    id:    'salesforce',
    label: 'Salesforce',
    icon:  '☁️',
    color: 'from-blue-500 to-cyan-400',
    headline: 'Salesforce Consulting & Integration',
    sub:      'Maximize the value of your Salesforce investment with expert implementation, integration, and ongoing optimization across the full Salesforce ecosystem.',
  },
  {
    id:    'servicenow',
    label: 'ServiceNow',
    icon:  '⚙️',
    color: 'from-violet-500 to-blue-500',
    headline: 'ServiceNow Implementation & Development',
    sub:      'Transform IT, HR, and customer service operations with tailored ServiceNow solutions — from initial implementation through custom workflow development and integrations.',
  },
  {
    id:    'migration',
    label: 'Migration',
    icon:  '🚚',
    color: 'from-cyan-500 to-teal-400',
    headline: 'Platform & Data Migration',
    sub:      'Move to modern platforms with confidence. Our structured migration methodology ensures zero data loss, minimal disruption, and a clean, validated data state from day one.',
  },
] as const

type PillarId = typeof pillars[number]['id']

const whyItems = [
  { title: 'Multi-Platform Expertise',        desc: 'Certified across Salesforce, ServiceNow, and MuleSoft — a rare combination that eliminates the need for multiple vendors.' },
  { title: 'Industry-Specific Knowledge',     desc: 'A decade of experience in manufacturing, healthcare, finance, insurance, high-tech, and more.' },
  { title: 'True End-to-End Delivery',         desc: 'Planning, design, build, test, train, go-live, and ongoing support — we don\'t hand off halfway through.' },
  { title: 'Migration Without Risk',           desc: 'Proven ETL frameworks, rollback strategies, and UAT protocols keep every migration on time and on budget.' },
  { title: 'Accelerated Time-to-Value',        desc: 'Pre-built accelerators and reusable integration templates cut delivery timelines without compromising quality.' },
  { title: 'Flexible Engagement Models',       desc: 'Fixed price, T&M, managed services, or staff augmentation — match the model to your project, not the other way around.' },
]

const models = [
  { title: 'Fixed Price',        desc: 'Ideal for clearly defined project scopes. Deliverables, rates, and timelines agreed upfront — no surprises.' },
  { title: 'Time & Material',    desc: 'Built for dynamic projects. Scope and priorities flex as you learn, with billing based on actual hours and resources.' },
  { title: 'Managed Services',   desc: 'Ongoing platform management — peak performance, maximum uptime, and proactive system updates as your platform evolves.' },
  { title: 'Staff Augmentation', desc: 'Embed certified Salesforce and ServiceNow consultants directly into your team to scale capacity without long-term overhead.' },
]

// ── Sub-components ────────────────────────────────────────────────────────────
function PillarSection({ pillar }: { pillar: typeof pillars[number] }) {
  const pillarServices = services.filter(s => s.pillar === pillar.id)

  return (
    <section id={pillar.id} className="py-20 scroll-mt-20 odd:bg-bg even:bg-bg-surface">
      <div className="max-w-7xl mx-auto px-6">
        {/* Pillar header */}
        <div className="flex items-start gap-5 mb-12">
          <div className={`w-12 h-12 rounded-2xl bg-gradient-to-br ${pillar.color} flex items-center justify-center text-xl flex-shrink-0 shadow-glow-blue`}>
            {pillar.icon}
          </div>
          <div>
            <span className="inline-block px-3 py-1 text-xs font-bold uppercase tracking-widest text-brand-bright bg-brand/10 border border-brand/20 rounded-full mb-3">
              {pillar.label}
            </span>
            <h2 className="text-3xl md:text-4xl font-black text-white tracking-tight mb-2">
              {pillar.headline}
            </h2>
            <p className="text-white/45 text-base max-w-2xl">{pillar.sub}</p>
          </div>
        </div>

        {/* Service cards for this pillar */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {pillarServices.map(svc => (
            <div
              key={svc.title}
              className="group p-6 rounded-2xl border border-white/[0.06] bg-white/[0.03] hover:bg-white/[0.06] hover:border-brand/25 transition-all duration-300"
            >
              <div className="inline-flex items-center justify-center w-10 h-10 rounded-xl bg-brand/10 text-xl mb-4 group-hover:scale-110 transition-transform duration-300">
                {svc.icon}
              </div>
              <span className="block text-xs font-semibold text-brand-cyan/70 uppercase tracking-widest mb-2">
                {svc.tag}
              </span>
              <h3 className="text-base font-bold text-white mb-2 leading-snug">{svc.title}</h3>
              <p className="text-sm text-white/45 leading-relaxed">{svc.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

// ── Page ──────────────────────────────────────────────────────────────────────
export default function ServicesPage() {
  return (
    <>
      <SEO
        title="Our Services — Salesforce, ServiceNow & Migration"
        description="Hadapa Services delivers Salesforce consulting, ServiceNow implementation, and platform migration — end-to-end across all three practice areas."
        path="/services"
      />

      {/* Hero */}
      <section className="pt-36 pb-20 bg-bg relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_70%_60%_at_50%_0%,rgba(59,130,246,0.1),transparent)]" />
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.015)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.015)_1px,transparent_1px)] bg-[size:60px_60px]" />
        <div className="relative max-w-7xl mx-auto px-6 text-center">
          <span className="inline-block px-3 py-1.5 text-xs font-bold uppercase tracking-widest text-brand-bright bg-brand/10 border border-brand/20 rounded-full mb-4">
            Our Services
          </span>
          <h1 className="text-5xl md:text-7xl font-black text-white tracking-tight mb-5 leading-[1.05]">
            Three Practices.{' '}
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-brand-bright to-brand-cyan">
              One Partner.
            </span>
          </h1>
          <p className="text-white/45 max-w-2xl mx-auto text-lg mb-10">
            Salesforce consulting, ServiceNow implementation, and platform migration — delivered end-to-end by a single, accountable team.
          </p>

          {/* Pillar jump-links */}
          <div className="flex flex-wrap gap-3 justify-center">
            {pillars.map(p => (
              <a
                key={p.id}
                href={`#${p.id}`}
                className={`inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-semibold border border-white/10 text-white/70 hover:text-white hover:border-white/20 transition-all duration-300`}
              >
                <span>{p.icon}</span> {p.label}
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Pillar sections */}
      {pillars.map(p => (
        <PillarSection key={p.id} pillar={p} />
      ))}

      {/* Why Choose Us */}
      <section className="py-24 bg-bg">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-14">
            <span className="inline-block px-3 py-1.5 text-xs font-bold uppercase tracking-widest text-brand-bright bg-brand/10 border border-brand/20 rounded-full mb-4">
              Why Hadapa Services
            </span>
            <h2 className="text-4xl font-black text-white tracking-tight">
              What Sets Us{' '}
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-brand-bright to-brand-cyan">Apart</span>
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {whyItems.map((w, i) => (
              <div key={w.title} className="flex gap-4 p-5 rounded-2xl border border-white/[0.06] bg-white/[0.02] hover:border-brand/20 transition-all duration-300">
                <div className="flex-shrink-0 w-7 h-7 rounded-full bg-brand/10 flex items-center justify-center text-xs font-bold text-brand-bright mt-0.5">
                  {i + 1}
                </div>
                <div>
                  <h3 className="text-sm font-bold text-white mb-1.5">{w.title}</h3>
                  <p className="text-xs text-white/40 leading-relaxed">{w.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Engagement Models */}
      <section className="py-24 bg-bg-surface">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-14">
            <span className="inline-block px-3 py-1.5 text-xs font-bold uppercase tracking-widest text-brand-bright bg-brand/10 border border-brand/20 rounded-full mb-4">
              Engagement Models
            </span>
            <h2 className="text-4xl font-black text-white tracking-tight">
              Your Model,{' '}
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-brand-bright to-brand-cyan">Your Way</span>
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {models.map(m => (
              <div key={m.title} className="relative p-6 rounded-2xl border border-white/[0.07] bg-white/[0.02] hover:border-brand/25 transition-all duration-300 overflow-hidden">
                <div className="absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r from-brand to-brand-cyan" />
                <h3 className="text-base font-bold text-white mb-3">{m.title}</h3>
                <p className="text-sm text-white/45 leading-relaxed">{m.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTA />
    </>
  )
}
