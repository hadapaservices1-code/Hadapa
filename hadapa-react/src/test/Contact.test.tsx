import { describe, it, expect, vi, beforeEach } from 'vitest'
import { render, screen, waitFor }               from '@testing-library/react'
import userEvent                                  from '@testing-library/user-event'
import { MemoryRouter }                           from 'react-router-dom'
import { HelmetProvider }                         from 'react-helmet-async'
import Contact                                    from '@/pages/Contact'

// Mock fetch globally
const mockFetch = vi.fn()
vi.stubGlobal('fetch', mockFetch)

const renderContact = () =>
  render(
    <HelmetProvider>
      <MemoryRouter>
        <Contact />
      </MemoryRouter>
    </HelmetProvider>
  )

describe('Contact page', () => {
  beforeEach(() => {
    vi.clearAllMocks()
  })

  it('renders the page heading', () => {
    renderContact()
    expect(screen.getByRole('heading', { name: /let/i })).toBeInTheDocument()
  })

  it('renders all required form fields', () => {
    renderContact()
    expect(screen.getByPlaceholderText('Jane')).toBeInTheDocument()
    expect(screen.getByPlaceholderText('Smith')).toBeInTheDocument()
    expect(screen.getByPlaceholderText('jane@company.com')).toBeInTheDocument()
  })

  it('shows a loading state while submitting (dev mode)', async () => {
    const user = userEvent.setup()
    renderContact()

    await user.type(screen.getByPlaceholderText('Jane'),             'Test')
    await user.type(screen.getByPlaceholderText('Smith'),            'User')
    await user.type(screen.getByPlaceholderText('jane@company.com'), 'test@example.com')

    await user.click(screen.getByRole('button', { name: /send request/i }))

    // Spinner should appear
    expect(screen.getByText(/sending/i)).toBeInTheDocument()
  })

  it('shows success state after dev-mode submission', async () => {
    const user = userEvent.setup()
    renderContact()

    await user.type(screen.getByPlaceholderText('Jane'),             'Test')
    await user.type(screen.getByPlaceholderText('Smith'),            'User')
    await user.type(screen.getByPlaceholderText('jane@company.com'), 'test@example.com')
    await user.click(screen.getByRole('button', { name: /send request/i }))

    await waitFor(() => {
      expect(screen.getByText(/request received/i)).toBeInTheDocument()
    }, { timeout: 2000 })
  })

  it('shows error state and allows retry when fetch fails', async () => {
    // Only test fetch error path when FORMSPREE env is set
    vi.stubEnv('VITE_FORMSPREE_ID', 'test_id')
    mockFetch.mockRejectedValueOnce(new Error('Network error'))

    const user = userEvent.setup()
    renderContact()

    await user.type(screen.getByPlaceholderText('Jane'),             'Test')
    await user.type(screen.getByPlaceholderText('Smith'),            'User')
    await user.type(screen.getByPlaceholderText('jane@company.com'), 'fail@example.com')
    await user.click(screen.getByRole('button', { name: /send request/i }))

    await waitFor(() => {
      expect(screen.getByText(/submission failed/i)).toBeInTheDocument()
    })

    // Retry resets the form
    await user.click(screen.getByRole('button', { name: /try again/i }))
    expect(screen.getByRole('button', { name: /send request/i })).toBeInTheDocument()

    vi.unstubAllEnvs()
  })
})
