import { describe, it, expect } from 'vitest'
import { render } from '@testing-library/svelte'
import Skeleton from '../../lib/components/Skeleton.svelte'

describe('Skeleton', () => {
  it('renders without errors', () => {
    expect(() => render(Skeleton)).not.toThrow()
  })
})
