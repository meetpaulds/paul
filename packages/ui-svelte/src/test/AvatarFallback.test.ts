import { describe, it, expect } from 'vitest'
import { render } from '@testing-library/svelte'
import AvatarFallback from '../../lib/components/AvatarFallback.svelte'

describe('AvatarFallback', () => {
  it('renders without errors', () => {
    expect(() => render(AvatarFallback)).not.toThrow()
  })
})
