import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import {
  Breadcrumb,
  BreadcrumbList,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbPage,
  BreadcrumbSeparator,
  BreadcrumbEllipsis,
} from '../components/breadcrumb'

const DefaultBreadcrumb = () => (
  <Breadcrumb>
    <BreadcrumbList>
      <BreadcrumbItem>
        <BreadcrumbLink href="/">Home</BreadcrumbLink>
      </BreadcrumbItem>
      <BreadcrumbSeparator />
      <BreadcrumbItem>
        <BreadcrumbPage>Current</BreadcrumbPage>
      </BreadcrumbItem>
    </BreadcrumbList>
  </Breadcrumb>
)

describe('Breadcrumb', () => {
  it('renders nav with aria-label breadcrumb', () => {
    render(<DefaultBreadcrumb />)
    expect(screen.getByRole('navigation', { name: /breadcrumb/i })).toBeInTheDocument()
  })

  it('renders link items', () => {
    render(<DefaultBreadcrumb />)
    expect(screen.getByRole('link', { name: 'Home' })).toHaveAttribute('href', '/')
  })

  it('renders current page with aria-current', () => {
    render(<DefaultBreadcrumb />)
    expect(screen.getByText('Current')).toHaveAttribute('aria-current', 'page')
  })

  it('renders separator', () => {
    render(<DefaultBreadcrumb />)
    expect(document.querySelector('[aria-hidden="true"]')).toBeInTheDocument()
  })

  it('renders ellipsis', () => {
    render(
      <Breadcrumb>
        <BreadcrumbList>
          <BreadcrumbItem><BreadcrumbEllipsis /></BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>
    )
    expect(screen.getByText('More')).toBeInTheDocument()
  })
})
