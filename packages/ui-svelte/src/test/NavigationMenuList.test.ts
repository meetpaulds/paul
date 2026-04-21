import { describe, it, expect } from 'vitest'
import { render } from '@testing-library/svelte'
import NavigationMenuList from '../../lib/components/NavigationMenuList.svelte'

describe('NavigationMenuList', () => {
  it('renders without errors', () => {
    expect(() => render(NavigationMenuList)).not.toThrow()
  })
})
