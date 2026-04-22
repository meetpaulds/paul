import { describe, it, expect } from 'vitest'
import { render } from '@testing-library/svelte'
import Checkbox from '../../lib/components/Checkbox.svelte'

describe('Checkbox', () => {
  it('renders without errors', () => {
    expect(() => render(Checkbox)).not.toThrow()
  })
})
