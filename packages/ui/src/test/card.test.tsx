import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from '../components/card'

describe('Card', () => {
  it('renders card with children', () => {
    render(<Card>Card content</Card>)
    expect(screen.getByText('Card content')).toBeInTheDocument()
  })

  it('applies custom className', () => {
    const { container } = render(<Card className="custom-card" />)
    expect(container.firstChild).toHaveClass('custom-card')
  })

  it('renders full card composition', () => {
    render(
      <Card>
        <CardHeader>
          <CardTitle>Title</CardTitle>
          <CardDescription>Description</CardDescription>
        </CardHeader>
        <CardContent>Content</CardContent>
        <CardFooter>Footer</CardFooter>
      </Card>
    )
    expect(screen.getByText('Title')).toBeInTheDocument()
    expect(screen.getByText('Description')).toBeInTheDocument()
    expect(screen.getByText('Content')).toBeInTheDocument()
    expect(screen.getByText('Footer')).toBeInTheDocument()
  })

  it('renders CardTitle as heading', () => {
    render(<Card><CardHeader><CardTitle>My Title</CardTitle></CardHeader></Card>)
    expect(screen.getByRole('heading', { name: 'My Title' })).toBeInTheDocument()
  })

  it('applies default border and shadow styles', () => {
    const { container } = render(<Card />)
    expect(container.firstChild).toHaveClass('rounded-xl', 'border', 'shadow')
  })
})
