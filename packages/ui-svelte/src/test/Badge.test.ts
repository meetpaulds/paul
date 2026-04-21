import { describe, it, expect } from 'vitest'
import { render } from '@testing-library/svelte'
import Badge from '../../lib/components/Badge.svelte'

describe('Badge', () => {
  it('renders without errors', () => {
    expect(() => render(Badge)).not.toThrow()
  })
})
