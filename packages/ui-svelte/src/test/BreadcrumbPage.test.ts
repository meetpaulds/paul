import { describe, it, expect } from 'vitest'
import { render } from '@testing-library/svelte'
import BreadcrumbPage from '../../lib/components/BreadcrumbPage.svelte'

describe('BreadcrumbPage', () => {
  it('renders without errors', () => {
    expect(() => render(BreadcrumbPage)).not.toThrow()
  })
})
