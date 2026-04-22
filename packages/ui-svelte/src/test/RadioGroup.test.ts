import { describe, it, expect } from 'vitest'
import { render } from '@testing-library/svelte'
import RadioGroup from '../../lib/components/RadioGroup.svelte'

describe('RadioGroup', () => {
  it('renders without errors', () => {
    expect(() => render(RadioGroup)).not.toThrow()
  })
})
