import { describe, it, expect, vi, beforeEach, afterEach } from 'vitest'
import { render, screen }                                    from '@testing-library/react'
import userEvent                                             from '@testing-library/user-event'
import { MemoryRouter }                                      from 'react-router-dom'
import ErrorBoundary                                         from '@/components/ErrorBoundary'

// Component that throws on demand
function Bomb({ shouldThrow }: { shouldThrow: boolean }) {
  if (shouldThrow) throw new Error('Test explosion 💥')
  return <p>All good</p>
}

const renderWithBoundary = (shouldThrow: boolean) =>
  render(
    <MemoryRouter>
      <ErrorBoundary>
        <Bomb shouldThrow={shouldThrow} />
      </ErrorBoundary>
    </MemoryRouter>
  )

describe('ErrorBoundary', () => {
  // Suppress console.error noise from React's error boundary
  beforeEach(() => { vi.spyOn(console, 'error').mockImplementation(() => {}) })
  afterEach(()  => { vi.restoreAllMocks() })

  it('renders children when there is no error', () => {
    renderWithBoundary(false)
    expect(screen.getByText('All good')).toBeInTheDocument()
  })

  it('renders the fallback UI when a child throws', () => {
    renderWithBoundary(true)
    expect(screen.getByText(/something went wrong/i)).toBeInTheDocument()
  })

  it('shows a try again button', () => {
    renderWithBoundary(true)
    expect(screen.getByRole('button', { name: /try again/i })).toBeInTheDocument()
  })

  it('shows a go home link', () => {
    renderWithBoundary(true)
    expect(screen.getByRole('link', { name: /go home/i })).toBeInTheDocument()
  })
})
