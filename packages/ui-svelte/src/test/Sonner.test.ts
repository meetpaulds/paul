import { describe, it, expect } from 'vitest'
import { render } from '@testing-library/svelte'
import Sonner from '../../lib/components/Sonner.svelte'

describe('Sonner', () => {
  it('renders without errors', () => {
    expect(() => render(Sonner)).not.toThrow()
  })
})
