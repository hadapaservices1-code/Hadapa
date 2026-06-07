import { Link } from 'react-router-dom'
import SEO from '@/components/SEO'

export default function NotFound() {
  return (
    <>
      <SEO
        title="Page Not Found"
        description="The page you're looking for doesn't exist."
        path="/404"
      />
      <div className="min-h-screen bg-bg flex items-center justify-center px-6 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_50%_at_50%_50%,rgba(59,130,246,0.07),transparent)]" />

        <div className="relative text-center max-w-lg">
          <p className="text-8xl font-black bg-clip-text text-transparent bg-gradient-to-r from-brand-bright to-brand-cyan mb-4 leading-none">
            404
          </p>
          <h1 className="text-2xl font-black text-white mb-4">Page not found</h1>
          <p className="text-white/45 text-sm leading-relaxed mb-8">
            The page you're looking for doesn't exist or may have been moved. Head back home and keep exploring.
          </p>
          <div className="flex gap-3 justify-center">
            <Link
              to="/"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-gradient-to-r from-brand to-brand-cyan text-white text-sm font-semibold shadow-glow-blue hover:shadow-glow-blue-lg hover:-translate-y-0.5 transition-all duration-300"
            >
              Go home
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
            </Link>
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl border border-white/10 text-white/70 hover:text-white text-sm font-semibold transition-all duration-300"
            >
              Contact us
            </Link>
          </div>
        </div>
      </div>
    </>
  )
}
