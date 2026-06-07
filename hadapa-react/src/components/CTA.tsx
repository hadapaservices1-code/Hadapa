import { Link } from 'react-router-dom'

export default function CTA() {
  return (
    <section className="py-24 bg-bg-surface relative overflow-hidden">
      {/* Blurred blue orb */}
      <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-brand/20 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute left-1/4 top-1/4 w-64 h-64 bg-brand-cyan/10 rounded-full blur-3xl pointer-events-none" />

      <div className="relative max-w-4xl mx-auto px-6 text-center">
        <span className="inline-block px-3 py-1.5 text-xs font-bold uppercase tracking-widest text-brand-bright bg-brand/10 border border-brand/20 rounded-full mb-6">
          Get Started
        </span>
        <h2 className="text-4xl md:text-6xl font-black text-white mb-5 tracking-tight leading-[1.05]">
          Ready to Unlock the Full{' '}
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-brand-bright to-brand-cyan">
            Power of Salesforce?
          </span>
        </h2>
        <p className="text-white/50 text-lg max-w-xl mx-auto mb-10 leading-relaxed">
          Schedule a free, no-obligation consultation with our experts. We'll analyze your current setup and outline a clear path forward.
        </p>

        <div className="flex flex-wrap gap-4 justify-center">
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-gradient-brand text-white font-semibold shadow-glow-blue hover:shadow-glow-blue-lg hover:-translate-y-1 transition-all duration-300"
          >
            Book a Free Consultation
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
          </Link>
          <Link
            to="/services"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-xl border border-white/10 text-white/70 hover:text-white hover:border-white/20 font-semibold transition-all duration-300"
          >
            Browse Services
          </Link>
        </div>

        {/* Trust signals */}
        <div className="flex flex-wrap gap-6 justify-center mt-12 text-sm text-white/30">
          <span className="flex items-center gap-2">
            <svg className="w-4 h-4 text-brand-cyan" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2"><path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7"/></svg>
            No commitment required
          </span>
          <span className="flex items-center gap-2">
            <svg className="w-4 h-4 text-brand-cyan" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2"><path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7"/></svg>
            Response within 1 business day
          </span>
          <span className="flex items-center gap-2">
            <svg className="w-4 h-4 text-brand-cyan" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2"><path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7"/></svg>
            10+ years of expertise
          </span>
        </div>
      </div>
    </section>
  )
}
