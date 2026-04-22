import { describe, it, expect } from 'vitest'
import { render } from '@testing-library/svelte'
import MenubarItem from '../../lib/components/MenubarItem.svelte'

describe('MenubarItem', () => {
  it('renders without errors', () => {
    expect(() => render(MenubarItem)).not.toThrow()
  })
})
