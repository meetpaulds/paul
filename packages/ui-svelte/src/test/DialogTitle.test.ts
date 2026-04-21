import { describe, it, expect } from 'vitest'
import { render } from '@testing-library/svelte'
import DialogTitle from '../../lib/components/DialogTitle.svelte'

describe('DialogTitle', () => {
  it('renders without errors', () => {
    expect(() => render(DialogTitle)).not.toThrow()
  })
})
