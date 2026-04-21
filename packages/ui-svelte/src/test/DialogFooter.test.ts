import { describe, it, expect } from 'vitest'
import { render } from '@testing-library/svelte'
import DialogFooter from '../../lib/components/DialogFooter.svelte'

describe('DialogFooter', () => {
  it('renders without errors', () => {
    expect(() => render(DialogFooter)).not.toThrow()
  })
})
