import { describe, it, expect } from 'vitest'
import { render } from '@testing-library/svelte'
import BreadcrumbSeparator from '../../lib/components/BreadcrumbSeparator.svelte'

describe('BreadcrumbSeparator', () => {
  it('renders without errors', () => {
    expect(() => render(BreadcrumbSeparator)).not.toThrow()
  })
})
