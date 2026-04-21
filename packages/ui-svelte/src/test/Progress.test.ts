import { describe, it, expect } from 'vitest'
import { render } from '@testing-library/svelte'
import Progress from '../../lib/components/Progress.svelte'

describe('Progress', () => {
  it('renders without errors', () => {
    expect(() => render(Progress)).not.toThrow()
  })
})
