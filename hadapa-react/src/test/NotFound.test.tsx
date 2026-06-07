import { describe, it, expect } from 'vitest'
import { render, screen }       from '@testing-library/react'
import { MemoryRouter }         from 'react-router-dom'
import { HelmetProvider }       from 'react-helmet-async'
import NotFound                 from '@/pages/NotFound'

const renderNotFound = () =>
  render(
    <HelmetProvider>
      <MemoryRouter>
        <NotFound />
      </MemoryRouter>
    </HelmetProvider>
  )

describe('NotFound page', () => {
  it('renders the 404 status', () => {
    renderNotFound()
    expect(screen.getByText('404')).toBeInTheDocument()
  })

  it('renders a link back to home', () => {
    renderNotFound()
    expect(screen.getByRole('link', { name: /go home/i })).toHaveAttribute('href', '/')
  })

  it('renders a link to contact', () => {
    renderNotFound()
    expect(screen.getByRole('link', { name: /contact us/i })).toHaveAttribute('href', '/contact')
  })
})
