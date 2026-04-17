import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
  PaginationPrevious,
  PaginationNext,
  PaginationEllipsis,
} from '../components/pagination'

const DefaultPagination = () => (
  <Pagination>
    <PaginationContent>
      <PaginationItem><PaginationPrevious href="#" /></PaginationItem>
      <PaginationItem><PaginationLink href="#" isActive>1</PaginationLink></PaginationItem>
      <PaginationItem><PaginationLink href="#">2</PaginationLink></PaginationItem>
      <PaginationItem><PaginationEllipsis /></PaginationItem>
      <PaginationItem><PaginationNext href="#" /></PaginationItem>
    </PaginationContent>
  </Pagination>
)

describe('Pagination', () => {
  it('renders navigation element', () => {
    render(<DefaultPagination />)
    expect(screen.getByRole('navigation', { name: /pagination/i })).toBeInTheDocument()
  })

  it('renders previous link', () => {
    render(<DefaultPagination />)
    expect(screen.getByRole('link', { name: /previous/i })).toBeInTheDocument()
  })

  it('renders next link', () => {
    render(<DefaultPagination />)
    expect(screen.getByRole('link', { name: /next/i })).toBeInTheDocument()
  })

  it('marks active page with aria-current', () => {
    render(<DefaultPagination />)
    expect(screen.getByRole('link', { name: '1' })).toHaveAttribute('aria-current', 'page')
  })

  it('renders ellipsis with sr-only text', () => {
    render(<DefaultPagination />)
    expect(screen.getByText('More pages')).toBeInTheDocument()
  })
})
