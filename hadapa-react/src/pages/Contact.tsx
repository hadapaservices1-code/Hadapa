import { useState, FormEvent, ChangeEvent } from 'react'
import SEO from '@/components/SEO'

// ── Types ───────────────────────────────────────────────────────────────────
interface FormFields {
  firstName: string
  lastName:  string
  email:     string
  company:   string
  service:   string
  industry:  string
  message:   string
}

type FormStatus = 'idle' | 'submitting' | 'success' | 'error'

// ── Constants ───────────────────────────────────────────────────────────────
const SERVICE_OPTIONS = [
  'AppExchange Integration',
  'MuleSoft Integration',
  'Custom Salesforce Integration',
  'Cloud-Based Integration',
  'API Integration',
  'Middleware Integration',
  'Managed Services',
  'Staff Augmentation',
  'Not Sure Yet',
] as const

const INDUSTRY_OPTIONS = [
  'Retail / CPG', 'Financial Services', 'Manufacturing', 'Insurance',
  'Health Care', 'High-Tech', 'Payment Processing', 'Oil & Gas', 'ISVs', 'Other',
] as const

const INITIAL_FORM: FormFields = {
  firstName: '', lastName: '', email: '',
  company: '', service: '', industry: '', message: '',
}

// ── Formspree endpoint ───────────────────────────────────────────────────────
// 1. Create a free form at https://formspree.io
// 2. Set VITE_FORMSPREE_ID=your_form_id in .env
const FORMSPREE_ENDPOINT = import.meta.env.VITE_FORMSPREE_ID
  ? `https://formspree.io/f/${import.meta.env.VITE_FORMSPREE_ID as string}`
  : null

// ── Shared input style ───────────────────────────────────────────────────────
const inputCls =
  'w-full px-4 py-3 rounded-xl border border-white/10 bg-white/[0.04] text-white ' +
  'text-sm placeholder-white/25 focus:outline-none focus:border-brand/50 ' +
  'focus:bg-white/[0.06] transition-all duration-200'

function Label({ children }: { children: React.ReactNode }) {
  return (
    <label className="block text-xs font-bold uppercase tracking-widest text-white/30 mb-2">
      {children}
    </label>
  )
}

function SuccessState() {
  return (
    <div className="text-center py-12">
      <div className="w-16 h-16 rounded-full bg-brand/10 border border-brand/20 flex items-center justify-center mx-auto mb-5 text-3xl">
        ✅
      </div>
      <h3 className="text-xl font-bold text-white mb-3">Request Received!</h3>
      <p className="text-sm text-white/45 max-w-xs mx-auto">
        Thank you for reaching out. A member of our team will be in touch within one business day.
      </p>
    </div>
  )
}

function ErrorState({ onRetry }: { onRetry: () => void }) {
  return (
    <div className="text-center py-12">
      <div className="w-16 h-16 rounded-full bg-red-500/10 border border-red-500/20 flex items-center justify-center mx-auto mb-5 text-3xl">
        ⚠️
      </div>
      <h3 className="text-xl font-bold text-white mb-3">Submission Failed</h3>
      <p className="text-sm text-white/45 max-w-xs mx-auto mb-5">
        Something went wrong. Please try again or email us at{' '}
        <a href="mailto:info@hadapaservices.com" className="text-brand-bright underline">
          info@hadapaservices.com
        </a>
      </p>
      <button
        onClick={onRetry}
        className="px-5 py-2.5 rounded-xl bg-gradient-to-r from-brand to-brand-cyan text-white text-sm font-semibold"
      >
        Try again
      </button>
    </div>
  )
}

// ── Main page ────────────────────────────────────────────────────────────────
export default function Contact() {
  const [form,   setForm]   = useState<FormFields>(INITIAL_FORM)
  const [status, setStatus] = useState<FormStatus>('idle')

  const set = (field: keyof FormFields) =>
    (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) =>
      setForm(prev => ({ ...prev, [field]: e.target.value }))

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setStatus('submitting')

    try {
      if (!FORMSPREE_ENDPOINT) {
        // Dev mode: simulate success
        await new Promise(r => setTimeout(r, 800))
        setStatus('success')
        return
      }

      const res = await fetch(FORMSPREE_ENDPOINT, {
        method:  'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify({
          name:     `${form.firstName} ${form.lastName}`,
          email:    form.email,
          company:  form.company,
          service:  form.service,
          industry: form.industry,
          message:  form.message,
        }),
      })

      setStatus(res.ok ? 'success' : 'error')
    } catch {
      setStatus('error')
    }
  }

  return (
    <>
      <SEO
        title="Contact Us"
        description="Schedule a free Salesforce consultation with Hadapa Services. We respond within one business day — no commitment required."
        path="/contact"
      />

      {/* Page hero */}
      <section className="pt-36 pb-16 bg-bg relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_70%_60%_at_50%_0%,rgba(59,130,246,0.1),transparent)]" />
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.015)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.015)_1px,transparent_1px)] bg-[size:60px_60px]" />
        <div className="relative max-w-7xl mx-auto px-6 text-center">
          <span className="inline-block px-3 py-1.5 text-xs font-bold uppercase tracking-widest text-brand-bright bg-brand/10 border border-brand/20 rounded-full mb-4">
            Get in Touch
          </span>
          <h1 className="text-5xl md:text-7xl font-black text-white tracking-tight mb-4 leading-[1.05]">
            Let&apos;s{' '}
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-brand-bright to-brand-cyan">
              Talk
            </span>
          </h1>
          <p className="text-white/45 max-w-lg mx-auto text-lg">
            Schedule a free consultation and we&apos;ll respond within one business day.
          </p>
        </div>
      </section>

      {/* Layout */}
      <section className="py-16 pb-24 bg-bg">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">

            {/* Left — info */}
            <aside className="lg:col-span-2 space-y-8">
              <div>
                <h2 className="text-2xl font-black text-white mb-3 tracking-tight">Ready to get started?</h2>
                <p className="text-sm text-white/45 leading-relaxed">
                  Whether you&apos;re exploring Salesforce for the first time or optimizing an existing implementation,
                  our team is here to help — no commitment required.
                </p>
              </div>

              {[
                { icon: '✉️', label: 'Email',         value: 'info@hadapaservices.com', href: 'mailto:info@hadapaservices.com' },
                { icon: '⏱️', label: 'Response time', value: 'Within 1 business day' },
                { icon: '🌐', label: 'Serving',        value: 'Clients worldwide — remote & on-site' },
              ].map(d => (
                <div key={d.label} className="flex gap-4 items-start">
                  <div className="w-10 h-10 rounded-xl bg-brand/10 flex items-center justify-center flex-shrink-0 text-base">
                    {d.icon}
                  </div>
                  <div>
                    <div className="text-xs font-semibold text-white/30 uppercase tracking-wider mb-0.5">{d.label}</div>
                    {'href' in d
                      ? <a href={d.href} className="text-sm text-brand-bright hover:text-brand-cyan transition-colors">{d.value}</a>
                      : <div className="text-sm text-white/65">{d.value}</div>
                    }
                  </div>
                </div>
              ))}

              <div className="p-5 rounded-2xl border border-white/[0.07] bg-white/[0.02]">
                <h4 className="text-xs font-bold uppercase tracking-widest text-white/25 mb-4">Services we can help with</h4>
                <ul className="space-y-2">
                  {SERVICE_OPTIONS.slice(0, -1).map(s => (
                    <li key={s} className="flex items-center gap-2.5 text-xs text-white/45">
                      <svg className="w-3.5 h-3.5 text-brand-cyan flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2.5">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                      </svg>
                      {s}
                    </li>
                  ))}
                </ul>
              </div>
            </aside>

            {/* Right — form */}
            <div className="lg:col-span-3">
              <div className="p-8 rounded-2xl border border-white/[0.08] bg-white/[0.025] shadow-glass">

                {status === 'success' && <SuccessState />}
                {status === 'error'   && <ErrorState onRetry={() => setStatus('idle')} />}

                {(status === 'idle' || status === 'submitting') && (
                  <form onSubmit={handleSubmit} noValidate>
                    <h3 className="text-lg font-bold text-white mb-6">Request a Free Consultation</h3>

                    <div className="grid grid-cols-2 gap-4 mb-4">
                      <div>
                        <Label>First Name *</Label>
                        <input type="text" className={inputCls} placeholder="Jane"
                          value={form.firstName} onChange={set('firstName')} required />
                      </div>
                      <div>
                        <Label>Last Name *</Label>
                        <input type="text" className={inputCls} placeholder="Smith"
                          value={form.lastName} onChange={set('lastName')} required />
                      </div>
                    </div>

                    <div className="mb-4">
                      <Label>Business Email *</Label>
                      <input type="email" className={inputCls} placeholder="jane@company.com"
                        value={form.email} onChange={set('email')} required />
                    </div>

                    <div className="mb-4">
                      <Label>Company Name</Label>
                      <input type="text" className={inputCls} placeholder="Your Company"
                        value={form.company} onChange={set('company')} />
                    </div>

                    <div className="grid grid-cols-2 gap-4 mb-4">
                      <div>
                        <Label>Service</Label>
                        <select className={inputCls} value={form.service} onChange={set('service')}>
                          <option value="">Select service...</option>
                          {SERVICE_OPTIONS.map(s => <option key={s}>{s}</option>)}
                        </select>
                      </div>
                      <div>
                        <Label>Industry</Label>
                        <select className={inputCls} value={form.industry} onChange={set('industry')}>
                          <option value="">Select industry...</option>
                          {INDUSTRY_OPTIONS.map(i => <option key={i}>{i}</option>)}
                        </select>
                      </div>
                    </div>

                    <div className="mb-6">
                      <Label>Tell us about your project</Label>
                      <textarea
                        className={`${inputCls} min-h-[110px] resize-y`}
                        placeholder="Describe your current setup, goals, or pain points..."
                        value={form.message} onChange={set('message')}
                      />
                    </div>

                    <button
                      type="submit"
                      disabled={status === 'submitting'}
                      className="w-full py-3.5 rounded-xl bg-gradient-to-r from-brand to-brand-cyan text-white font-semibold text-sm
                        hover:shadow-glow-blue hover:-translate-y-0.5 transition-all duration-300
                        flex items-center justify-center gap-2
                        disabled:opacity-60 disabled:cursor-not-allowed disabled:transform-none disabled:hover:shadow-none"
                    >
                      {status === 'submitting' ? (
                        <>
                          <svg className="w-4 h-4 animate-spin" fill="none" viewBox="0 0 24 24">
                            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8z" />
                          </svg>
                          Sending…
                        </>
                      ) : (
                        <>
                          Send Request
                          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                            <path d="M5 12h14M12 5l7 7-7 7" />
                          </svg>
                        </>
                      )}
                    </button>

                    {!FORMSPREE_ENDPOINT && (
                      <p className="text-center text-xs text-white/20 mt-3">
                        Dev mode — set <code className="text-brand-bright/60">VITE_FORMSPREE_ID</code> in .env to enable real email delivery
                      </p>
                    )}
                  </form>
                )}

              </div>
            </div>

          </div>
        </div>
      </section>
    </>
  )
}
