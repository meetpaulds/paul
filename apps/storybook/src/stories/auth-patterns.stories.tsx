import type { Meta, StoryObj } from '@storybook/react-vite'
import {
  InputOTP,
  InputOTPGroup,
  InputOTPSeparator,
  InputOTPSlot,
  MagicLink,
  PasskeyButton,
  HoneypotField,
} from '@meetpaul/ui'

const meta = {
  title: 'Auth Patterns / WCAG 3.3.8',
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: `
**WCAG 2.2 SC 3.3.8 — Accessible Authentication (Minimum) / EAA Article 4**

These patterns implement cognitive-test-free authentication flows:

| Pattern | Mechanism | WCAG note |
|---------|-----------|-----------|
| \`InputOTP\` | 6-digit code, \`autocomplete="one-time-code"\` | No transcription needed — OS autofill handles it |
| \`MagicLink\` | Email link, no password | No recall required |
| \`PasskeyButton\` | WebAuthn / biometric | No knowledge-based challenge |
| \`HoneypotField\` | Invisible bot-trap | No CAPTCHA cognitive test |
        `.trim(),
      },
    },
  },
  tags: ['autodocs'],
} satisfies Meta

export default meta
type Story = StoryObj<typeof meta>

export const OTPInput: Story = {
  name: 'InputOTP — autocomplete one-time-code',
  parameters: {
    docs: {
      description: {
        story: '`autocomplete="one-time-code"` lets iOS/Android autofill the SMS code without the user having to type it — satisfying WCAG 3.3.8.',
      },
    },
  },
  render: () => (
    <div className="flex flex-col gap-4 w-80">
      <label className="text-sm font-medium">
        Verification code
        <span className="ml-1 text-xs text-muted-foreground">(sent to your phone)</span>
      </label>
      <InputOTP maxLength={6}>
        <InputOTPGroup>
          <InputOTPSlot index={0} />
          <InputOTPSlot index={1} />
          <InputOTPSlot index={2} />
        </InputOTPGroup>
        <InputOTPSeparator />
        <InputOTPGroup>
          <InputOTPSlot index={3} />
          <InputOTPSlot index={4} />
          <InputOTPSlot index={5} />
        </InputOTPGroup>
      </InputOTP>
      <p className="text-xs text-muted-foreground">
        Enter the 6-digit code or let your device autofill it.
      </p>
    </div>
  ),
}

export const MagicLinkIdle: Story = {
  name: 'MagicLink — idle state',
  parameters: {
    docs: {
      description: {
        story: 'Password-free sign-in. The `aria-live` region announces the status change to screen readers when the link is sent.',
      },
    },
  },
  render: () => (
    <div className="w-80">
      <MagicLink onSubmit={(email: string) => console.log('Magic link →', email)} />
    </div>
  ),
}

export const MagicLinkSending: Story = {
  name: 'MagicLink — sending (aria-live announced)',
  render: () => (
    <div className="w-80">
      <MagicLink status="sending" />
    </div>
  ),
}

export const MagicLinkSent: Story = {
  name: 'MagicLink — sent ✓',
  render: () => (
    <div className="w-80">
      <MagicLink status="sent" />
    </div>
  ),
}

export const MagicLinkError: Story = {
  name: 'MagicLink — error',
  render: () => (
    <div className="w-80">
      <MagicLink status="error" />
    </div>
  ),
}

export const PasskeyIdle: Story = {
  name: 'PasskeyButton — idle',
  parameters: {
    docs: {
      description: {
        story: 'WebAuthn biometric authentication. No cognitive challenge. Connect `onClick` to `navigator.credentials.get({ publicKey })`.',
      },
    },
  },
  render: () => (
    <PasskeyButton onClick={() => console.log('Passkey auth triggered')} />
  ),
}

export const PasskeyPending: Story = {
  name: 'PasskeyButton — pending (aria-busy)',
  render: () => <PasskeyButton status="pending" />,
}

export const PasskeySuccess: Story = {
  name: 'PasskeyButton — success',
  render: () => <PasskeyButton status="success" />,
}

export const PasskeyUnsupported: Story = {
  name: 'PasskeyButton — unsupported fallback',
  render: () => (
    <div className="flex flex-col gap-4 w-80">
      <PasskeyButton status="unsupported" />
      <p className="text-xs text-muted-foreground">
        Fall back to Magic Link or OTP when WebAuthn is unavailable.
      </p>
    </div>
  ),
}

export const HoneypotFormExample: Story = {
  name: 'HoneypotField — CAPTCHA-free bot prevention',
  parameters: {
    docs: {
      description: {
        story: 'An invisible field bots fill in. Legitimate users never see it. Reject submissions server-side if the honeypot value is non-empty.',
      },
    },
  },
  render: () => (
    <form
      className="relative flex flex-col gap-3 w-80"
      onSubmit={e => {
        e.preventDefault()
        const data = new FormData(e.target as HTMLFormElement)
        if (data.get('website')) {
          console.warn('Bot detected — honeypot filled')
          return
        }
        console.log('Legitimate submission', Object.fromEntries(data))
      }}
    >
      <HoneypotField name="website" />
      <label className="flex flex-col gap-1.5 text-sm font-medium">
        Email
        <input
          type="email"
          name="email"
          autoComplete="email"
          placeholder="you@example.com"
          className="flex h-11 rounded-md border border-input bg-transparent px-3 py-1 text-sm shadow-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
        />
      </label>
      <button
        type="submit"
        className="inline-flex h-11 items-center justify-center rounded-md bg-primary px-4 text-sm font-medium text-primary-foreground shadow hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
      >
        Subscribe
      </button>
      <p className="text-xs text-muted-foreground">
        No CAPTCHA required. Bot protection via invisible honeypot field.
      </p>
    </form>
  ),
}
