import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { HoverCard, HoverCardTrigger, HoverCardContent } from '../components/hover-card'

describe('HoverCard', () => {
  it('renders trigger', () => {
    render(
      <HoverCard>
        <HoverCardTrigger asChild><a href="#">Hover me</a></HoverCardTrigger>
        <HoverCardContent>Card content</HoverCardContent>
      </HoverCard>
    )
    expect(screen.getByRole('link', { name: 'Hover me' })).toBeInTheDocument()
  })

  it('content not visible initially', () => {
    render(
      <HoverCard>
        <HoverCardTrigger asChild><a href="#">Hover me</a></HoverCardTrigger>
        <HoverCardContent>Card content</HoverCardContent>
      </HoverCard>
    )
    expect(screen.queryByText('Card content')).not.toBeInTheDocument()
  })

  it('shows content on hover', async () => {
    const user = userEvent.setup()
    render(
      <HoverCard openDelay={0}>
        <HoverCardTrigger asChild><a href="#">Hover me</a></HoverCardTrigger>
        <HoverCardContent>Card content</HoverCardContent>
      </HoverCard>
    )
    await user.hover(screen.getByRole('link'))
    expect(screen.getByText('Card content')).toBeInTheDocument()
  })
})
