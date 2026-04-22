import { describe, it, expect } from 'vitest'
import { render } from '@testing-library/svelte'
import Breadcrumb from '../../lib/components/Breadcrumb.svelte'

describe('Breadcrumb', () => {
  it('renders without errors', () => {
    expect(() => render(Breadcrumb)).not.toThrow()
  })
})
