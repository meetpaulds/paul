import { describe, it, expect } from 'vitest'
import { render } from '@testing-library/svelte'
import InputGroup from '../../lib/components/InputGroup.svelte'

describe('InputGroup', () => {
  it('renders without errors', () => {
    expect(() => render(InputGroup)).not.toThrow()
  })
})
