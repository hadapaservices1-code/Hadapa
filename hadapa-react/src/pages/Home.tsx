import SEO            from '@/components/SEO'
import Hero           from '@/components/Hero'
import ServicesSection from '@/components/Services'
import CaseStudies     from '@/components/CaseStudies'
import Testimonials    from '@/components/Testimonials'
import CTA             from '@/components/CTA'

/* Industries strip */
const industries = [
  'Retail & CPG', 'Financial Services', 'Manufacturing',
  'Insurance', 'ISVs', 'Payment Processing', 'Health Care',
  'High-Tech', 'Oil & Gas',
]

function IndustriesStrip() {
  return (
    <section className="py-16 bg-bg-surface border-y border-white/[0.05]">
      <div className="max-w-7xl mx-auto px-6">
        <p className="text-center text-xs font-semibold uppercase tracking-widest text-white/25 mb-8">
          Industries We Serve
        </p>
        <div className="flex flex-wrap gap-3 justify-center">
          {industries.map(ind => (
            <span
              key={ind}
              className="px-4 py-2 text-sm text-white/50 border border-white/[0.08] rounded-full hover:border-brand/30 hover:text-brand-bright transition-all duration-300 cursor-default"
            >
              {ind}
            </span>
          ))}
        </div>
      </div>
    </section>
  )
}

/* Why Choose Us strip */
const reasons = [
  { icon: '🏭', title: 'Industry Expertise',        desc: 'A decade of experience across manufacturing, healthcare, finance, eCommerce, and more.' },
  { icon: '🌐', title: 'Multi-Platform Coverage',   desc: 'Deep expertise across Salesforce, ServiceNow, and seamless cloud migration strategies.' },
  { icon: '🚀', title: 'End-to-End Delivery',       desc: 'Planning, design, development, testing, training, support, and ongoing optimization.' },
  { icon: '🔄', title: 'Migration Without Risk',    desc: 'Structured, zero-downtime migration frameworks that protect your data and business continuity.' },
]

function WhyUs() {
  return (
    <section className="py-24 bg-bg">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-12">
          <span className="inline-block px-3 py-1.5 text-xs font-bold uppercase tracking-widest text-brand-bright bg-brand/10 border border-brand/20 rounded-full mb-4">
            Why Hadapa
          </span>
          <h2 className="text-4xl font-black text-white tracking-tight">
            Why Choose{' '}
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-brand-bright to-brand-cyan">
              Hadapa Services
            </span>
          </h2>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {reasons.map(r => (
            <div key={r.title} className="p-6 rounded-2xl border border-white/[0.06] bg-white/[0.02] hover:border-brand/20 transition-all duration-300">
              <div className="text-2xl mb-4">{r.icon}</div>
              <h3 className="text-sm font-bold text-white mb-2">{r.title}</h3>
              <p className="text-xs text-white/40 leading-relaxed">{r.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default function Home() {
  return (
    <>
      <SEO
        title="Salesforce, ServiceNow & Migration Consulting"
        description="Hadapa Services delivers expert Salesforce, ServiceNow, and cloud migration consulting — helping organizations modernize platforms, streamline operations, and drive revenue growth."
        path="/"
      />
      <Hero />
      <IndustriesStrip />
      <ServicesSection preview />
      <WhyUs />
      <CaseStudies />
      <Testimonials />
      <CTA />
    </>
  )
}
