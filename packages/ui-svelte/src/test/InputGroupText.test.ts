import { describe, it, expect } from 'vitest'
import { render } from '@testing-library/svelte'
import InputGroupText from '../../lib/components/InputGroupText.svelte'

describe('InputGroupText', () => {
  it('renders without errors', () => {
    expect(() => render(InputGroupText)).not.toThrow()
  })
})
