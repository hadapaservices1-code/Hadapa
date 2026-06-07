import SEO from '@/components/SEO'
import CTA from '@/components/CTA'

const values = [
  { num: '01', title: 'Customer-Centricity',       desc: 'We put our clients at the heart of everything we do, delivering solutions tailored to their unique needs and business goals.' },
  { num: '02', title: 'Integrity & Transparency',  desc: 'We operate with honesty, clarity, and accountability, building trust through open communication and ethical practices.' },
  { num: '03', title: 'Innovation & Excellence',   desc: 'We embrace emerging technologies and continuously refine our approach to deliver cutting-edge Salesforce and IT consulting solutions.' },
  { num: '04', title: 'Collaboration & Teamwork',  desc: 'We believe that success is built through strong partnerships—with our clients and within our teams.' },
  { num: '05', title: 'Agility & Adaptability',    desc: 'In a fast-changing digital world, we stay flexible, responsive, and ready to evolve with our clients\' needs.' },
  { num: '06', title: 'Commitment to Quality',     desc: 'We are dedicated to delivering high-performance solutions with precision, care, and a focus on long-term success.' },
  { num: '07', title: 'Continuous Learning',       desc: 'We foster a culture of growth, encouraging our team to learn, innovate, and lead with knowledge.' },
]

const stats = [
  { val: '10+',  label: 'Years of Experience' },
  { val: '8+',   label: 'Industry Verticals' },
  { val: '6',    label: 'Core Services' },
  { val: '100%', label: 'Client Focused' },
]

export default function About() {
  return (
    <>
      <SEO
        title="About Us"
        description="Learn about Hadapa Services' vision, mission, and the 7 core values that guide every client engagement and technology solution we deliver."
        path="/about"
      />
      {/* Page Hero */}
      <section className="pt-36 pb-20 bg-bg relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_70%_60%_at_50%_0%,rgba(59,130,246,0.1),transparent)]" />
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.015)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.015)_1px,transparent_1px)] bg-[size:60px_60px]" />
        <div className="relative max-w-7xl mx-auto px-6 text-center">
          <span className="inline-block px-3 py-1.5 text-xs font-bold uppercase tracking-widest text-brand-bright bg-brand/10 border border-brand/20 rounded-full mb-4">
            About Us
          </span>
          <h1 className="text-5xl md:text-7xl font-black text-white tracking-tight mb-5 leading-[1.05]">
            Who We{' '}
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-brand-bright to-brand-cyan">
              Are
            </span>
          </h1>
          <p className="text-white/45 max-w-2xl mx-auto text-lg">
            A forward-thinking technology partner dedicated to helping organizations unlock their full potential through tailored Salesforce solutions and expert IT consulting.
          </p>
        </div>
      </section>

      {/* Vision */}
      <section className="py-20 bg-bg-surface">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <span className="inline-block px-3 py-1.5 text-xs font-bold uppercase tracking-widest text-brand-bright bg-brand/10 border border-brand/20 rounded-full mb-5">
                Our Vision
              </span>
              <h2 className="text-4xl font-black text-white tracking-tight mb-5">
                Unlocking Your{' '}
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-brand-bright to-brand-cyan">
                  Full Potential
                </span>
              </h2>
              <p className="text-white/50 text-base leading-relaxed mb-5">
                To help organizations unlock their full potential through tailored solutions and expert IT consulting, fostering long-term success and meaningful client relationships.
              </p>
              <p className="text-white/40 text-sm leading-relaxed">
                With over a decade of experience supporting clients in manufacturing, healthcare, finance, eCommerce, and beyond, we bring deep expertise and a genuinely client-first approach to every engagement.
              </p>
            </div>

            {/* Stats grid */}
            <div className="grid grid-cols-2 gap-4">
              {stats.map(s => (
                <div key={s.label} className="p-6 rounded-2xl border border-white/[0.07] bg-white/[0.025] text-center">
                  <div className="text-4xl font-black bg-clip-text text-transparent bg-gradient-to-r from-brand-bright to-brand-cyan mb-1">
                    {s.val}
                  </div>
                  <div className="text-xs text-white/35 font-medium">{s.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-24 bg-bg">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-14">
            <span className="inline-block px-3 py-1.5 text-xs font-bold uppercase tracking-widest text-brand-bright bg-brand/10 border border-brand/20 rounded-full mb-4">
              Our Values
            </span>
            <h2 className="text-4xl font-black text-white tracking-tight">
              Core Values of{' '}
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-brand-bright to-brand-cyan">
                Hadapa Services
              </span>
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
            {values.map(v => (
              <div key={v.num} className="p-5 rounded-2xl border border-white/[0.06] bg-white/[0.02] hover:border-brand/25 hover:bg-white/[0.04] transition-all duration-300">
                <span className="text-xs font-black text-brand-bright/50 tabular-nums mb-3 block">{v.num}</span>
                <h3 className="text-sm font-bold text-white mb-2">{v.title}</h3>
                <p className="text-xs text-white/40 leading-relaxed">{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What sets us apart */}
      <section className="py-20 bg-bg-surface">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <span className="inline-block px-3 py-1.5 text-xs font-bold uppercase tracking-widest text-brand-bright bg-brand/10 border border-brand/20 rounded-full mb-4">
              Our Approach
            </span>
            <h2 className="text-4xl font-black text-white tracking-tight">
              What Sets Us{' '}
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-brand-bright to-brand-cyan">Apart</span>
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {[
              { icon: '🤝', title: 'Long-Term Partnership',   desc: 'We don\'t just deploy and leave. Our managed services and ongoing support ensure your platform continuously evolves with your business.' },
              { icon: '📐', title: 'Tailored Solutions',      desc: 'No two businesses are alike. We take the time to understand your unique requirements and craft solutions that truly fit.' },
              { icon: '🔍', title: 'Proven Methodology',      desc: 'From planning and design to deployment and optimization, our structured approach minimizes risk and maximizes quality.' },
            ].map(i => (
              <div key={i.title} className="p-6 rounded-2xl border border-white/[0.06] bg-white/[0.02] hover:border-brand/20 transition-all duration-300">
                <div className="text-2xl mb-4">{i.icon}</div>
                <h3 className="text-base font-bold text-white mb-2">{i.title}</h3>
                <p className="text-sm text-white/40 leading-relaxed">{i.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTA />
    </>
  )
}
