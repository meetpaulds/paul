import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Typography } from '../components/typography'

describe('Typography', () => {
  it('renders as p by default', () => {
    render(<Typography>Paragraph text</Typography>)
    expect(screen.getByText('Paragraph text').tagName).toBe('P')
  })

  it('renders as h1 when variant is h1', () => {
    render(<Typography variant="h1">Heading 1</Typography>)
    expect(screen.getByRole('heading', { level: 1, name: 'Heading 1' })).toBeInTheDocument()
  })

  it('renders as h2 when variant is h2', () => {
    render(<Typography variant="h2">Heading 2</Typography>)
    expect(screen.getByRole('heading', { level: 2 })).toBeInTheDocument()
  })

  it('applies muted variant class', () => {
    render(<Typography variant="muted">Muted text</Typography>)
    expect(screen.getByText('Muted text')).toHaveClass('text-muted-foreground')
  })

  it('renders child element when asChild', () => {
    render(
      <Typography asChild variant="p">
        <span>Text</span>
      </Typography>
    )
    expect(screen.getByText('Text').tagName).toBe('SPAN')
  })

  it('merges custom className', () => {
    render(<Typography className="custom-type">Text</Typography>)
    expect(screen.getByText('Text')).toHaveClass('custom-type')
  })
})
