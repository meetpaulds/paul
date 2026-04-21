import { describe, it, expect } from 'vitest'
import { render } from '@testing-library/svelte'
import SelectItem from '../../lib/components/SelectItem.svelte'

describe('SelectItem', () => {
  it('renders without errors', () => {
    expect(() => render(SelectItem)).not.toThrow()
  })
})
