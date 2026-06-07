import { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'

/* Animated canvas — floating connected dots */
function ParticleCanvas() {
  const ref = useRef(null)

  useEffect(() => {
    const canvas = ref.current
    const ctx    = canvas.getContext('2d')
    let raf

    const resize = () => {
      canvas.width  = canvas.offsetWidth
      canvas.height = canvas.offsetHeight
    }
    resize()
    window.addEventListener('resize', resize)

    const PARTICLE_COUNT = 60
    const CONNECT_DIST   = 150
    const particles = Array.from({ length: PARTICLE_COUNT }, () => ({
      x:  Math.random() * canvas.width,
      y:  Math.random() * canvas.height,
      vx: (Math.random() - 0.5) * 0.4,
      vy: (Math.random() - 0.5) * 0.4,
      r:  Math.random() * 2 + 1,
    }))

    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)

      // Update + draw particles
      particles.forEach(p => {
        p.x += p.vx; p.y += p.vy
        if (p.x < 0 || p.x > canvas.width)  p.vx *= -1
        if (p.y < 0 || p.y > canvas.height) p.vy *= -1

        ctx.beginPath()
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2)
        ctx.fillStyle = 'rgba(96,165,250,0.5)'
        ctx.fill()
      })

      // Connect nearby particles
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x
          const dy = particles[i].y - particles[j].y
          const d  = Math.sqrt(dx * dx + dy * dy)
          if (d < CONNECT_DIST) {
            ctx.beginPath()
            ctx.moveTo(particles[i].x, particles[i].y)
            ctx.lineTo(particles[j].x, particles[j].y)
            ctx.strokeStyle = `rgba(59,130,246,${0.15 * (1 - d / CONNECT_DIST)})`
            ctx.lineWidth = 1
            ctx.stroke()
          }
        }
      }

      raf = requestAnimationFrame(draw)
    }
    draw()

    return () => {
      cancelAnimationFrame(raf)
      window.removeEventListener('resize', resize)
    }
  }, [])

  return <canvas ref={ref} className="absolute inset-0 w-full h-full opacity-60" />
}

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-bg">

      {/* Background layers */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_60%_at_50%_-10%,rgba(59,130,246,0.12),transparent)]" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_50%_50%_at_80%_50%,rgba(6,182,212,0.06),transparent)]" />
      <ParticleCanvas />

      {/* Grid overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:60px_60px]" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 pt-32 pb-20 w-full">
        <div className="max-w-4xl">

          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-brand/30 bg-brand/10 mb-8">
            <span className="w-2 h-2 rounded-full bg-brand-cyan animate-pulse" />
            <span className="text-xs font-semibold text-brand-bright tracking-widest uppercase">
              Salesforce · ServiceNow · Migration
            </span>
          </div>

          {/* Headline */}
          <h1 className="text-5xl md:text-7xl font-black text-white leading-[1.05] tracking-tight mb-6">
            Transform Your{' '}
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-brand-bright to-brand-cyan">
              Business
            </span>
            {' '}with Expert Cloud Solutions
          </h1>

          {/* Sub */}
          <p className="text-lg md:text-xl text-white/55 max-w-2xl mb-10 leading-relaxed">
            Hadapa Services delivers end-to-end Salesforce, ServiceNow, and Migration consulting — helping organizations modernize platforms, streamline operations, and drive sustainable revenue growth.
          </p>

          {/* CTAs */}
          <div className="flex flex-wrap gap-4 mb-20">
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 px-7 py-4 rounded-xl bg-gradient-brand text-white font-semibold text-sm shadow-glow-blue hover:shadow-glow-blue-lg hover:-translate-y-1 transition-all duration-300"
            >
              Get a Free Consultation
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
            </Link>
            <Link
              to="/services"
              className="inline-flex items-center gap-2 px-7 py-4 rounded-xl border border-white/10 text-white/80 hover:text-white hover:border-white/20 font-semibold text-sm transition-all duration-300"
            >
              Explore Services
            </Link>
          </div>

          {/* Stats row */}
          <div className="flex flex-wrap gap-12">
            {[
              { val: '10+',  label: 'Years of Experience' },
              { val: '8+',   label: 'Industry Verticals' },
              { val: '10+',  label: 'Services Offered' },
              { val: '100%', label: 'Client Focused' },
            ].map(s => (
              <div key={s.label}>
                <div className="text-3xl font-black text-white">{s.val}</div>
                <div className="text-sm text-white/45 mt-1">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-bg to-transparent" />
    </section>
  )
}
