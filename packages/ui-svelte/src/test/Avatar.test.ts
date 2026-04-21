import { describe, it, expect } from 'vitest'
import { render } from '@testing-library/svelte'
import Avatar from '../../lib/components/Avatar.svelte'

describe('Avatar', () => {
  it('renders without errors', () => {
    expect(() => render(Avatar)).not.toThrow()
  })
})
