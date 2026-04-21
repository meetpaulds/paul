import { describe, it, expect } from 'vitest'
import { render } from '@testing-library/svelte'
import ButtonGroup from '../../lib/components/ButtonGroup.svelte'

describe('ButtonGroup', () => {
  it('renders without errors', () => {
    expect(() => render(ButtonGroup)).not.toThrow()
  })
})
