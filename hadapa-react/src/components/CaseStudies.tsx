const cases = [
  {
    industry: 'Financial Services',
    title: 'Streamlined CRM Integration for Regional Bank',
    result: '40% reduction in manual data entry',
    detail: 'Integrated Salesforce with legacy core banking systems via MuleSoft, enabling real-time customer data sync across 12 branches and eliminating duplicate records.',
    metric: '40%',
    metricLabel: 'Less Manual Work',
    tag: 'MuleSoft Integration',
    color: 'from-blue-500/20 to-cyan-500/20',
  },
  {
    industry: 'Manufacturing',
    title: 'ERP-Salesforce Bridge for Global Manufacturer',
    result: '3× faster order-to-cash cycle',
    detail: 'Built a custom bidirectional API integration between Salesforce and SAP, allowing sales teams to see live inventory and push orders directly from CRM.',
    metric: '3×',
    metricLabel: 'Faster Order Cycle',
    tag: 'Custom API Integration',
    color: 'from-violet-500/20 to-blue-500/20',
  },
  {
    industry: 'Health Care',
    title: 'Patient Engagement Platform Migration',
    result: '98% data accuracy post-migration',
    detail: 'Migrated a 500K-record patient database to Salesforce Health Cloud with custom middleware, maintaining compliance throughout and achieving near-perfect accuracy.',
    metric: '98%',
    metricLabel: 'Data Accuracy',
    tag: 'Cloud Migration',
    color: 'from-cyan-500/20 to-teal-500/20',
  },
]

export default function CaseStudies() {
  return (
    <section className="py-24 bg-bg-surface relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_40%_at_50%_0%,rgba(59,130,246,0.07),transparent)]" />

      <div className="relative max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <span className="inline-block px-3 py-1.5 text-xs font-bold uppercase tracking-widest text-brand-bright bg-brand/10 border border-brand/20 rounded-full mb-4">
            Case Studies
          </span>
          <h2 className="text-4xl md:text-5xl font-black text-white mb-4 tracking-tight">
            Real Results,{' '}
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-brand-bright to-brand-cyan">
              Real Impact
            </span>
          </h2>
          <p className="text-white/45 max-w-xl mx-auto text-base">
            We measure success by the outcomes we create for our clients—not just the projects we deliver.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {cases.map((c, i) => (
            <div
              key={c.title}
              className="group relative rounded-2xl border border-white/[0.07] bg-white/[0.02] hover:border-brand/25 transition-all duration-400 overflow-hidden"
            >
              {/* Top gradient bar */}
              <div className={`h-1 w-full bg-gradient-to-r ${c.color.replace('/20', '')}`} />

              <div className="p-6">
                {/* Tag + Industry */}
                <div className="flex items-center justify-between mb-4">
                  <span className="text-xs font-semibold px-2.5 py-1 rounded-full bg-brand/10 text-brand-bright">
                    {c.tag}
                  </span>
                  <span className="text-xs text-white/35 font-medium">{c.industry}</span>
                </div>

                {/* Big metric */}
                <div className={`inline-flex items-end gap-1 mb-4 p-4 rounded-xl bg-gradient-to-br ${c.color}`}>
                  <span className="text-4xl font-black text-white">{c.metric}</span>
                  <span className="text-sm text-white/60 mb-1 font-medium">{c.metricLabel}</span>
                </div>

                <h3 className="text-base font-bold text-white mb-3 leading-snug">{c.title}</h3>
                <p className="text-sm text-white/45 leading-relaxed">{c.detail}</p>

                <div className="mt-5 pt-5 border-t border-white/[0.06]">
                  <span className="text-xs font-semibold text-brand-cyan">✓ {c.result}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
