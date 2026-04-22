import { describe, it, expect } from 'vitest'
import { render } from '@testing-library/svelte'
import Typography from '../../lib/components/Typography.svelte'

describe('Typography', () => {
  it('renders without errors', () => {
    expect(() => render(Typography)).not.toThrow()
  })
})
