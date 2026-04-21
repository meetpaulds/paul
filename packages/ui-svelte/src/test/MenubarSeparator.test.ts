import { describe, it, expect } from 'vitest'
import { render } from '@testing-library/svelte'
import MenubarSeparator from '../../lib/components/MenubarSeparator.svelte'

describe('MenubarSeparator', () => {
  it('renders without errors', () => {
    expect(() => render(MenubarSeparator)).not.toThrow()
  })
})
