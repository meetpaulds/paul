import { describe, it, expect } from 'vitest'
import { render } from '@testing-library/svelte'
import AlertTitle from '../../lib/components/AlertTitle.svelte'

describe('AlertTitle', () => {
  it('renders without errors', () => {
    expect(() => render(AlertTitle)).not.toThrow()
  })
})
