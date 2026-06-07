const testimonials = [
  {
    quote: "Hadapa Services transformed how we use Salesforce. Their MuleSoft integration eliminated weeks of manual data reconciliation every month. The team is knowledgeable, responsive, and genuinely cares about outcomes.",
    name: "Sarah Mitchell",
    title: "VP of Operations",
    company: "Meridian Financial Group",
    initials: "SM",
    color: "from-blue-500 to-cyan-500",
  },
  {
    quote: "We brought Hadapa in after two failed integration attempts with other vendors. Within 8 weeks they had our SAP-Salesforce bridge running perfectly. Their custom approach made all the difference.",
    name: "James Thornton",
    title: "Director of IT",
    company: "Apex Manufacturing Inc.",
    initials: "JT",
    color: "from-violet-500 to-blue-500",
  },
  {
    quote: "The staff augmentation model worked perfectly for our team. We got seasoned Salesforce architects who felt like true partners, not outsourced consultants. Delivered on time, on budget.",
    name: "Priya Nair",
    title: "Chief Digital Officer",
    company: "CareLink Health Systems",
    initials: "PN",
    color: "from-cyan-500 to-teal-500",
  },
]

function Stars() {
  return (
    <div className="flex gap-0.5 mb-4">
      {[...Array(5)].map((_, i) => (
        <svg key={i} className="w-4 h-4 text-amber-400 fill-current" viewBox="0 0 24 24">
          <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
        </svg>
      ))}
    </div>
  )
}

export default function Testimonials() {
  return (
    <section className="py-24 bg-bg relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_40%_at_50%_100%,rgba(6,182,212,0.05),transparent)]" />

      <div className="relative max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <span className="inline-block px-3 py-1.5 text-xs font-bold uppercase tracking-widest text-brand-bright bg-brand/10 border border-brand/20 rounded-full mb-4">
            Testimonials
          </span>
          <h2 className="text-4xl md:text-5xl font-black text-white mb-4 tracking-tight">
            Trusted by{' '}
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-brand-bright to-brand-cyan">
              Industry Leaders
            </span>
          </h2>
          <p className="text-white/45 max-w-xl mx-auto text-base">
            Don't take our word for it — here's what our clients say about working with Hadapa Services.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((t) => (
            <div
              key={t.name}
              className="relative p-6 rounded-2xl border border-white/[0.07] bg-white/[0.025] hover:border-brand/20 hover:bg-white/[0.04] transition-all duration-400 flex flex-col"
            >
              <Stars />
              <blockquote className="text-sm text-white/60 leading-relaxed mb-6 flex-1">
                "{t.quote}"
              </blockquote>
              <div className="flex items-center gap-3 pt-5 border-t border-white/[0.06]">
                <div className={`w-10 h-10 rounded-full bg-gradient-to-br ${t.color} flex items-center justify-center text-white text-xs font-bold flex-shrink-0`}>
                  {t.initials}
                </div>
                <div>
                  <div className="text-sm font-semibold text-white">{t.name}</div>
                  <div className="text-xs text-white/40">{t.title} · {t.company}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
