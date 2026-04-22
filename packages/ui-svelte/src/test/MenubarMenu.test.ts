import { describe, it, expect } from 'vitest'
import { render } from '@testing-library/svelte'
import MenubarMenu from '../../lib/components/MenubarMenu.svelte'

describe('MenubarMenu', () => {
  it('renders without errors', () => {
    expect(() => render(MenubarMenu)).not.toThrow()
  })
})
