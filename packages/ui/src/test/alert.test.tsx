import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Alert, AlertTitle, AlertDescription } from '../components/alert'

describe('Alert', () => {
  it('renders with role alert', () => {
    render(<Alert>Message</Alert>)
    expect(screen.getByRole('alert')).toBeInTheDocument()
  })

  it('renders default variant', () => {
    render(<Alert>Default</Alert>)
    expect(screen.getByRole('alert')).toHaveClass('bg-background')
  })

  it('renders destructive variant', () => {
    render(<Alert variant="destructive">Error</Alert>)
    expect(screen.getByRole('alert')).toHaveClass('text-destructive-text')
  })

  it('renders AlertTitle', () => {
    render(<Alert><AlertTitle>Title</AlertTitle></Alert>)
    expect(screen.getByText('Title')).toBeInTheDocument()
  })

  it('renders AlertDescription', () => {
    render(<Alert><AlertDescription>Description text</AlertDescription></Alert>)
    expect(screen.getByText('Description text')).toBeInTheDocument()
  })

  it('renders full alert composition', () => {
    render(
      <Alert>
        <AlertTitle>Heads up!</AlertTitle>
        <AlertDescription>Something happened.</AlertDescription>
      </Alert>
    )
    expect(screen.getByText('Heads up!')).toBeInTheDocument()
    expect(screen.getByText('Something happened.')).toBeInTheDocument()
  })
})
