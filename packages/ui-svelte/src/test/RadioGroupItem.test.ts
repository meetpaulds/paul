import { describe, it, expect } from 'vitest'
import { render } from '@testing-library/svelte'
import RadioGroupItem from '../../lib/components/RadioGroupItem.svelte'

describe('RadioGroupItem', () => {
  it('renders without errors', () => {
    expect(() => render(RadioGroupItem)).not.toThrow()
  })
})
