import { describe, it, expect } from 'vitest'
import { render } from '@testing-library/svelte'
import DialogHeader from '../../lib/components/DialogHeader.svelte'

describe('DialogHeader', () => {
  it('renders without errors', () => {
    expect(() => render(DialogHeader)).not.toThrow()
  })
})
