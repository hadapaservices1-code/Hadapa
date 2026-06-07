import { lazy, Suspense, useEffect } from 'react'
import { Routes, Route, useLocation } from 'react-router-dom'
import { HelmetProvider } from 'react-helmet-async'
import Nav           from '@/components/Nav'
import Footer        from '@/components/Footer'
import ErrorBoundary from '@/components/ErrorBoundary'

// ── Route-level code splitting ─────────────────────────────────────────────
const Home             = lazy(() => import('@/pages/Home'))
const ServicesPage     = lazy(() => import('@/pages/ServicesPage'))
const About            = lazy(() => import('@/pages/About'))
const Contact          = lazy(() => import('@/pages/Contact'))
const CaseStudiesPage  = lazy(() => import('@/pages/CaseStudiesPage'))
const NotFound         = lazy(() => import('@/pages/NotFound'))

// ── Scroll-to-top on every navigation ─────────────────────────────────────
function ScrollToTop() {
  const { pathname } = useLocation()
  useEffect(() => { window.scrollTo({ top: 0, behavior: 'instant' as ScrollBehavior }) }, [pathname])
  return null
}

// ── Route loading skeleton ─────────────────────────────────────────────────
function PageLoader() {
  return (
    <div className="min-h-screen bg-bg flex items-center justify-center">
      <div className="flex gap-1.5">
        {[0, 1, 2].map(i => (
          <span
            key={i}
            className="w-2 h-2 rounded-full bg-brand-bright animate-bounce"
            style={{ animationDelay: `${i * 0.15}s` }}
          />
        ))}
      </div>
    </div>
  )
}

export default function App() {
  return (
    <HelmetProvider>
      <ErrorBoundary>
        <div className="min-h-screen bg-bg text-white font-sans">
          <Nav />
          <ScrollToTop />
          <main>
            <Suspense fallback={<PageLoader />}>
              <Routes>
                <Route path="/"              element={<Home />} />
                <Route path="/services"      element={<ServicesPage />} />
                <Route path="/case-studies"  element={<CaseStudiesPage />} />
                <Route path="/about"         element={<About />} />
                <Route path="/contact"       element={<Contact />} />
                <Route path="*"              element={<NotFound />} />
              </Routes>
            </Suspense>
          </main>
          <Footer />
        </div>
      </ErrorBoundary>
    </HelmetProvider>
  )
}
