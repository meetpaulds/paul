import { describe, it, expect } from 'vitest'
import { render } from '@testing-library/svelte'
import Spinner from '../../lib/components/Spinner.svelte'

describe('Spinner', () => {
  it('renders without errors', () => {
    expect(() => render(Spinner)).not.toThrow()
  })
})
