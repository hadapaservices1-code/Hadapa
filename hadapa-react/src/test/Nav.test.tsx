import { describe, it, expect } from 'vitest'
import { render, screen }       from '@testing-library/react'
import userEvent                from '@testing-library/user-event'
import { MemoryRouter }         from 'react-router-dom'
import Nav                      from '@/components/Nav'

const renderNav = (initialPath = '/') =>
  render(
    <MemoryRouter initialEntries={[initialPath]}>
      <Nav />
    </MemoryRouter>
  )

describe('Nav', () => {
  it('renders the logo', () => {
    renderNav()
    expect(screen.getByText(/hadapa/i)).toBeInTheDocument()
  })

  it('renders all navigation links', () => {
    renderNav()
    expect(screen.getByRole('link', { name: /home/i })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: /services/i })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: /about/i })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: /contact/i })).toBeInTheDocument()
  })

  it('marks the active route', () => {
    renderNav('/services')
    const servicesLink = screen.getAllByRole('link', { name: /services/i })[0]
    expect(servicesLink).toHaveClass('text-brand-bright')
  })

  it('renders the CTA button', () => {
    renderNav()
    expect(screen.getByRole('link', { name: /free consultation/i })).toBeInTheDocument()
  })
})
