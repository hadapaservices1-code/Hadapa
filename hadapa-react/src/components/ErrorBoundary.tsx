import { Component, ReactNode, ErrorInfo } from 'react'
import { Link } from 'react-router-dom'

interface Props   { children: ReactNode }
interface State   { hasError: boolean; error?: Error }

export default class ErrorBoundary extends Component<Props, State> {
  state: State = { hasError: false }

  static getDerivedStateFromError(error: Error): State {
    return { hasError: true, error }
  }

  componentDidCatch(error: Error, info: ErrorInfo) {
    // Send to your error-tracking service (Sentry, LogRocket, etc.)
    console.error('[ErrorBoundary]', error, info.componentStack)
  }

  render() {
    if (!this.state.hasError) return this.props.children

    return (
      <div className="min-h-screen bg-bg flex items-center justify-center px-6">
        <div className="text-center max-w-md">
          <div className="w-16 h-16 rounded-2xl bg-red-500/10 border border-red-500/20 flex items-center justify-center mx-auto mb-6 text-2xl">
            ⚠️
          </div>
          <h1 className="text-2xl font-black text-white mb-3">Something went wrong</h1>
          <p className="text-white/50 text-sm leading-relaxed mb-6">
            An unexpected error occurred. Our team has been notified. Try refreshing the page or going back home.
          </p>
          {import.meta.env.DEV && this.state.error && (
            <pre className="text-left text-xs text-red-400/80 bg-red-500/5 border border-red-500/10 rounded-xl p-4 mb-6 overflow-auto max-h-40">
              {this.state.error.message}
            </pre>
          )}
          <div className="flex gap-3 justify-center">
            <button
              onClick={() => this.setState({ hasError: false })}
              className="px-5 py-2.5 rounded-xl bg-gradient-to-r from-brand to-brand-cyan text-white text-sm font-semibold"
            >
              Try again
            </button>
            <Link
              to="/"
              className="px-5 py-2.5 rounded-xl border border-white/10 text-white/70 hover:text-white text-sm font-semibold transition-colors"
            >
              Go home
            </Link>
          </div>
        </div>
      </div>
    )
  }
}
