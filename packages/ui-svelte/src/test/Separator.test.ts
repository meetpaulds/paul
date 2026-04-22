import { describe, it, expect } from 'vitest'
import { render } from '@testing-library/svelte'
import Separator from '../../lib/components/Separator.svelte'

describe('Separator', () => {
  it('renders without errors', () => {
    expect(() => render(Separator)).not.toThrow()
  })
})
