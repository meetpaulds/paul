import { describe, it, expect } from 'vitest'
import { render } from '@testing-library/svelte'
import Tabs from '../../lib/components/Tabs.svelte'

describe('Tabs', () => {
  it('renders without errors', () => {
    expect(() => render(Tabs)).not.toThrow()
  })
})
