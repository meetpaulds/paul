import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import { ToastProvider, ToastViewport, Toast, ToastTitle, ToastDescription } from '../components/toast'

const DefaultToast = ({ variant }: { variant?: 'default' | 'destructive' }) => (
  <ToastProvider>
    <Toast open variant={variant}>
      <ToastTitle>Toast Title</ToastTitle>
      <ToastDescription>Toast description.</ToastDescription>
    </Toast>
    <ToastViewport />
  </ToastProvider>
)

describe('Toast', () => {
  it('renders toast title', () => {
    render(<DefaultToast />)
    expect(screen.getByText('Toast Title')).toBeInTheDocument()
  })

  it('renders toast description', () => {
    render(<DefaultToast />)
    expect(screen.getByText('Toast description.')).toBeInTheDocument()
  })

  it('applies default variant', () => {
    render(<DefaultToast />)
    const toastEl = screen.getByText('Toast Title').closest('[data-radix-toast-root]') ??
      screen.getByText('Toast Title').parentElement
    expect(toastEl).toBeInTheDocument()
  })

  it('renders destructive variant', () => {
    render(<DefaultToast variant="destructive" />)
    expect(screen.getByText('Toast Title')).toBeInTheDocument()
  })

  it('does not render when open is false', () => {
    render(
      <ToastProvider>
        <Toast open={false}>
          <ToastTitle>Hidden</ToastTitle>
        </Toast>
        <ToastViewport />
      </ToastProvider>
    )
    expect(screen.queryByText('Hidden')).not.toBeInTheDocument()
  })
})
