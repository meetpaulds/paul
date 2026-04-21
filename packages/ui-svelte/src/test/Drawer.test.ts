import { describe, it, expect } from 'vitest'
import { render } from '@testing-library/svelte'
import Drawer from '../../lib/components/Drawer.svelte'

describe('Drawer', () => {
  it('renders without errors', () => {
    expect(() => render(Drawer)).not.toThrow()
  })
})
