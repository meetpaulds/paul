import { describe, it, expect } from 'vitest'
import { render } from '@testing-library/svelte'
import BreadcrumbItem from '../../lib/components/BreadcrumbItem.svelte'

describe('BreadcrumbItem', () => {
  it('renders without errors', () => {
    expect(() => render(BreadcrumbItem)).not.toThrow()
  })
})
