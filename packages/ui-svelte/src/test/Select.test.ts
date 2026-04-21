import { describe, it, expect } from 'vitest'
import { render } from '@testing-library/svelte'
import Select from '../../lib/components/Select.svelte'

describe('Select', () => {
  it('renders without errors', () => {
    expect(() => render(Select)).not.toThrow()
  })
})
