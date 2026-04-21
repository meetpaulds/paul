import { describe, it, expect } from 'vitest'
import { render } from '@testing-library/svelte'
import Menubar from '../../lib/components/Menubar.svelte'

describe('Menubar', () => {
  it('renders without errors', () => {
    expect(() => render(Menubar)).not.toThrow()
  })
})
