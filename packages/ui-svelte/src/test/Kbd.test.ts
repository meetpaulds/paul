import { describe, it, expect } from 'vitest'
import { render } from '@testing-library/svelte'
import Kbd from '../../lib/components/Kbd.svelte'

describe('Kbd', () => {
  it('renders without errors', () => {
    expect(() => render(Kbd)).not.toThrow()
  })
})
