import { describe, it, expect } from 'vitest'
import { render } from '@testing-library/svelte'
import Switch from '../../lib/components/Switch.svelte'

describe('Switch', () => {
  it('renders without errors', () => {
    expect(() => render(Switch)).not.toThrow()
  })
})
