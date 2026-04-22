import { describe, it, expect } from 'vitest'
import { render } from '@testing-library/svelte'
import DialogDescription from '../../lib/components/DialogDescription.svelte'

describe('DialogDescription', () => {
  it('renders without errors', () => {
    expect(() => render(DialogDescription)).not.toThrow()
  })
})
