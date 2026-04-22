import { describe, it, expect } from 'vitest'
import { render } from '@testing-library/svelte'
import BreadcrumbLink from '../../lib/components/BreadcrumbLink.svelte'

describe('BreadcrumbLink', () => {
  it('renders without errors', () => {
    expect(() => render(BreadcrumbLink)).not.toThrow()
  })
})
