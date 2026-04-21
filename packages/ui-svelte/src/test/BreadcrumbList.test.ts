import { describe, it, expect } from 'vitest'
import { render } from '@testing-library/svelte'
import BreadcrumbList from '../../lib/components/BreadcrumbList.svelte'

describe('BreadcrumbList', () => {
  it('renders without errors', () => {
    expect(() => render(BreadcrumbList)).not.toThrow()
  })
})
