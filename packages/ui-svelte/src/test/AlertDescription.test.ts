import { describe, it, expect } from 'vitest'
import { render } from '@testing-library/svelte'
import AlertDescription from '../../lib/components/AlertDescription.svelte'

describe('AlertDescription', () => {
  it('renders without errors', () => {
    expect(() => render(AlertDescription)).not.toThrow()
  })
})
