import { describe, it, expect } from 'vitest'
import { render } from '@testing-library/svelte'
import NavigationMenuLink from '../../lib/components/NavigationMenuLink.svelte'

describe('NavigationMenuLink', () => {
  it('renders without errors', () => {
    expect(() => render(NavigationMenuLink)).not.toThrow()
  })
})
