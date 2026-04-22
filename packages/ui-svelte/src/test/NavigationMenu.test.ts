import { describe, it, expect } from 'vitest'
import { render } from '@testing-library/svelte'
import NavigationMenu from '../../lib/components/NavigationMenu.svelte'

describe('NavigationMenu', () => {
  it('renders without errors', () => {
    expect(() => render(NavigationMenu)).not.toThrow()
  })
})
