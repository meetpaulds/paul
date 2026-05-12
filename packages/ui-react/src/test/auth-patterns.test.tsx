import { describe, it, expect, vi } from 'vitest'
import { render, screen, waitFor } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { InputOTP, InputOTPGroup, InputOTPSlot } from '../components/input-otp'
import { MagicLink } from '../components/magic-link'
import { PasskeyButton } from '../components/passkey-button'
import { HoneypotField } from '../components/honeypot-field'

// ─── InputOTP ────────────────────────────────────────────────────────────────

describe('InputOTP — WCAG 3.3.8 accessibility', () => {
  function renderOTP() {
    return render(
      <InputOTP maxLength={6}>
        <InputOTPGroup>
          <InputOTPSlot index={0} />
          <InputOTPSlot index={1} />
          <InputOTPSlot index={2} />
          <InputOTPSlot index={3} />
          <InputOTPSlot index={4} />
          <InputOTPSlot index={5} />
        </InputOTPGroup>
      </InputOTP>
    )
  }

  it('has autocomplete="one-time-code" (WCAG 3.3.8)', () => {
    renderOTP()
    const input = screen.getByRole('textbox')
    expect(input).toHaveAttribute('autocomplete', 'one-time-code')
  })

  it('has aria-label (WCAG 1.3.5)', () => {
    renderOTP()
    const input = screen.getByRole('textbox')
    expect(input).toHaveAttribute('aria-label', 'One-time password')
  })

  it('has inputmode="numeric"', () => {
    renderOTP()
    const input = screen.getByRole('textbox')
    expect(input).toHaveAttribute('inputmode', 'numeric')
  })

  it('is keyboard accessible — accepts digit input', async () => {
    const user = userEvent.setup()
    renderOTP()
    const input = screen.getByRole('textbox')
    await user.click(input)
    await user.keyboard('123456')
    expect((input as HTMLInputElement).value).toBe('123456')
  })

  it('disables when disabled prop set', () => {
    render(
      <InputOTP maxLength={6} disabled>
        <InputOTPGroup>
          <InputOTPSlot index={0} />
        </InputOTPGroup>
      </InputOTP>
    )
    expect(screen.getByRole('textbox')).toBeDisabled()
  })
})

// ─── MagicLink ───────────────────────────────────────────────────────────────

describe('MagicLink — WCAG 3.3.8 accessibility', () => {
  it('renders email input with autocomplete="email"', () => {
    render(<MagicLink />)
    const input = screen.getByRole('textbox', { name: /email address/i })
    expect(input).toHaveAttribute('autocomplete', 'email')
    expect(input).toHaveAttribute('type', 'email')
  })

  it('email input is labelled (WCAG 1.3.1)', () => {
    render(<MagicLink />)
    expect(screen.getByLabelText(/email address/i)).toBeInTheDocument()
  })

  it('has aria-live status region', () => {
    render(<MagicLink />)
    const region = document.getElementById('magic-link-status')
    expect(region).toHaveAttribute('role', 'status')
    expect(region).toHaveAttribute('aria-live', 'polite')
  })

  it('announces "sent" message in live region', () => {
    render(<MagicLink status="sent" />)
    expect(screen.getByRole('status')).toHaveTextContent('Magic link sent!')
  })

  it('announces "error" message in live region', () => {
    render(<MagicLink status="error" />)
    expect(screen.getByRole('status')).toHaveTextContent('Something went wrong')
  })

  it('submit button is disabled while sending', () => {
    render(<MagicLink status="sending" />)
    expect(screen.getByRole('button', { name: /sending/i })).toBeDisabled()
  })

  it('calls onSubmit with email value', async () => {
    const onSubmit = vi.fn()
    const user = userEvent.setup()
    render(<MagicLink onSubmit={onSubmit} />)
    await user.type(screen.getByLabelText(/email address/i), 'user@test.com')
    await user.click(screen.getByRole('button', { name: /send magic link/i }))
    await waitFor(() => expect(onSubmit).toHaveBeenCalledWith('user@test.com'))
  })

  it('submit button is keyboard-activatable via Enter', async () => {
    const onSubmit = vi.fn()
    const user = userEvent.setup()
    render(<MagicLink onSubmit={onSubmit} />)
    await user.type(screen.getByLabelText(/email address/i), 'user@test.com')
    await user.keyboard('{Enter}')
    await waitFor(() => expect(onSubmit).toHaveBeenCalled())
  })
})

// ─── PasskeyButton ───────────────────────────────────────────────────────────

describe('PasskeyButton — WCAG 3.3.8 accessibility', () => {
  it('renders a button with accessible name', () => {
    render(<PasskeyButton />)
    expect(screen.getByRole('button', { name: /sign in with passkey/i })).toBeInTheDocument()
  })

  it('has aria-describedby pointing to live status region', () => {
    render(<PasskeyButton />)
    const btn = screen.getByRole('button')
    expect(btn).toHaveAttribute('aria-describedby', 'passkey-status')
    expect(document.getElementById('passkey-status')).toHaveAttribute('aria-live', 'polite')
  })

  it('sets aria-busy when pending', () => {
    render(<PasskeyButton status="pending" />)
    expect(screen.getByRole('button')).toHaveAttribute('aria-busy', 'true')
  })

  it('is disabled when unsupported', () => {
    render(<PasskeyButton status="unsupported" />)
    expect(screen.getByRole('button')).toBeDisabled()
  })

  it('announces success in live region', () => {
    render(<PasskeyButton status="success" />)
    expect(screen.getByRole('status')).toHaveTextContent('Authentication successful')
  })

  it('announces error in live region', () => {
    render(<PasskeyButton status="error" />)
    expect(screen.getByRole('status')).toHaveTextContent('Authentication failed')
  })

  it('emits click event when activated via keyboard', async () => {
    const onClick = vi.fn()
    const user = userEvent.setup()
    render(<PasskeyButton onClick={onClick} />)
    const btn = screen.getByRole('button')
    btn.focus()
    await user.keyboard('{Enter}')
    expect(onClick).toHaveBeenCalledOnce()
  })
})

// ─── HoneypotField ───────────────────────────────────────────────────────────

describe('HoneypotField — WCAG 3.3.8 / no CAPTCHA', () => {
  it('is hidden from accessibility tree (aria-hidden)', () => {
    const { container } = render(<HoneypotField />)
    const wrapper = container.firstChild as HTMLElement
    expect(wrapper).toHaveAttribute('aria-hidden', 'true')
  })

  it('input has tabIndex=-1 (not keyboard-reachable)', () => {
    const { container } = render(<HoneypotField />)
    const input = container.querySelector('input')
    expect(input).toHaveAttribute('tabindex', '-1')
  })

  it('input has autocomplete="off"', () => {
    const { container } = render(<HoneypotField />)
    const input = container.querySelector('input')
    expect(input).toHaveAttribute('autocomplete', 'off')
  })

  it('respects custom name prop', () => {
    const { container } = render(<HoneypotField name="url" />)
    const input = container.querySelector('input')
    expect(input).toHaveAttribute('name', 'url')
  })
})
