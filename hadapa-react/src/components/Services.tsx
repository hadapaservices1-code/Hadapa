import { useRef, useEffect } from 'react'
import { Link } from 'react-router-dom'

// ── Types ─────────────────────────────────────────────────
interface Service {
  icon:    string
  title:   string
  desc:    string
  tag:     string
  pillar?: 'salesforce' | 'servicenow' | 'migration'
}

// ── Service catalogue ──────────────────────────────────────
export const services: Service[] = [
  // ── Salesforce ──────────────────────────────────────────
  {
    icon: '🛒', tag: 'AppExchange', pillar: 'salesforce',
    title: 'AppExchange Integration',
    desc:  'We carefully select and seamlessly integrate the most suitable AppExchange tools aligned with your business needs, ensuring maximum efficiency and performance.',
  },
  {
    icon: '🔗', tag: 'MuleSoft', pillar: 'salesforce',
    title: 'MuleSoft Integration',
    desc:  'Our experienced MuleSoft consultants simplify complex ERP integrations, ensuring a smooth and efficient transition that enhances your overall system performance.',
  },
  {
    icon: '🔌', tag: 'API', pillar: 'salesforce',
    title: 'Salesforce API Integration',
    desc:  'Purpose-driven API-based integrations ensuring seamless two-way communication between Salesforce and all your business applications.',
  },
  {
    icon: '🎯', tag: 'Custom', pillar: 'salesforce',
    title: 'Custom Salesforce Integration',
    desc:  'Tailored integration solutions with a wide range of customizable options, designed to align perfectly with your specific goals and workflows.',
  },
  // ── ServiceNow ──────────────────────────────────────────
  {
    icon: '⚙️', tag: 'ServiceNow', pillar: 'servicenow',
    title: 'ServiceNow Implementation',
    desc:  'End-to-end ServiceNow platform implementation — from ITSM and ITOM to HR Service Delivery and Customer Service Management, configured for your organization.',
  },
  {
    icon: '🔧', tag: 'ServiceNow', pillar: 'servicenow',
    title: 'ServiceNow Development & Customization',
    desc:  'Custom workflows, service catalog items, integrations, and UI enhancements built by certified ServiceNow developers to fit your unique operational needs.',
  },
  {
    icon: '🔁', tag: 'ServiceNow', pillar: 'servicenow',
    title: 'ServiceNow Integration Hub',
    desc:  'Connect ServiceNow with Salesforce, ERP systems, monitoring tools, and third-party platforms using Integration Hub spokes for real-time, bi-directional data flow.',
  },
  // ── Migration ───────────────────────────────────────────
  {
    icon: '🚚', tag: 'Migration', pillar: 'migration',
    title: 'CRM & Platform Migration',
    desc:  'Seamlessly migrate from legacy CRMs (Dynamics, HubSpot, Siebel) to Salesforce or ServiceNow with zero data loss, full audit trails, and minimal business disruption.',
  },
  {
    icon: '🗄️', tag: 'Migration', pillar: 'migration',
    title: 'Data Migration & Cleansing',
    desc:  'ETL pipeline design, data profiling, deduplication, and cleansing to ensure your migrated data is accurate, consistent, and ready for business use from day one.',
  },
  {
    icon: '☁️', tag: 'Cloud Migration', pillar: 'migration',
    title: 'On-Premise to Cloud Migration',
    desc:  'Lift-and-shift or re-architect on-premise Salesforce and ServiceNow environments to the cloud — with phased cutover plans, rollback strategies, and user training.',
  },
]

function ServiceCard({ svc, index }: { svc: Service; index: number }) {
  const ref = useRef(null)

  useEffect(() => {
    const el = ref.current
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) el.classList.add('is-visible') },
      { threshold: 0.15 }
    )
    observer.observe(el)
    return () => observer.disconnect()
  }, [])

  return (
    <div
      ref={ref}
      className="reveal-card group relative p-6 rounded-2xl border border-white/[0.06] bg-white/[0.03] hover:bg-white/[0.06] hover:border-brand/30 transition-all duration-400 cursor-default"
      style={{ transitionDelay: `${index * 60}ms` }}
    >
      {/* Glow on hover */}
      <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-brand/0 to-brand-cyan/0 group-hover:from-brand/5 group-hover:to-brand-cyan/5 transition-all duration-400" />

      <div className="relative">
        <div className="inline-flex items-center justify-center w-11 h-11 rounded-xl bg-brand/10 text-xl mb-4 group-hover:scale-110 transition-transform duration-300">
          {svc.icon}
        </div>
        <span className="block text-xs font-semibold text-brand-cyan/70 uppercase tracking-widest mb-2">
          {svc.tag}
        </span>
        <h3 className="text-base font-semibold text-white mb-3 leading-snug">{svc.title}</h3>
        <p className="text-sm text-white/45 leading-relaxed">{svc.desc}</p>
      </div>
    </div>
  )
}

// Preview: one card per pillar
const PREVIEW_TITLES = [
  'AppExchange Integration',
  'ServiceNow Implementation',
  'CRM & Platform Migration',
]

export default function ServicesSection({ preview = false }: { preview?: boolean }) {
  const displayed = preview
    ? services.filter(s => PREVIEW_TITLES.includes(s.title))
    : services

  return (
    <section className="py-24 bg-bg relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_70%_50%_at_50%_100%,rgba(59,130,246,0.06),transparent)]" />

      <div className="relative max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <span className="inline-block px-3 py-1.5 text-xs font-bold uppercase tracking-widest text-brand-bright bg-brand/10 border border-brand/20 rounded-full mb-4">
            What We Offer
          </span>
          <h2 className="text-4xl md:text-5xl font-black text-white mb-4 tracking-tight">
            Salesforce · ServiceNow ·{' '}
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-brand-bright to-brand-cyan">
              Migration
            </span>
          </h2>
          <p className="text-white/45 max-w-2xl mx-auto text-base">
            Three practice areas. One trusted partner. End-to-end solutions that unlock the full value of your enterprise technology investments.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {displayed.map((svc, i) => (
            <ServiceCard key={svc.title} svc={svc} index={i} />
          ))}
        </div>

        {preview && (
          <div className="text-center mt-12">
            <Link
              to="/services"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl border border-white/10 text-white/70 hover:text-white hover:border-white/20 text-sm font-medium transition-all duration-300"
            >
              View All 10 Services
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
            </Link>
          </div>
        )}
      </div>
    </section>
  )
}
