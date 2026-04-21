import { describe, it, expect } from 'vitest'
import { render } from '@testing-library/svelte'
import MenubarTrigger from '../../lib/components/MenubarTrigger.svelte'

describe('MenubarTrigger', () => {
  it('renders without errors', () => {
    expect(() => render(MenubarTrigger)).not.toThrow()
  })
})
