import { describe, it, expect } from 'vitest'
import { render } from '@testing-library/svelte'
import Dialog from '../../lib/components/Dialog.svelte'

describe('Dialog', () => {
  it('renders without errors', () => {
    expect(() => render(Dialog)).not.toThrow()
  })
})
