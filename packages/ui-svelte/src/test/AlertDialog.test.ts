import { describe, it, expect } from 'vitest'
import { render } from '@testing-library/svelte'
import AlertDialog from '../../lib/components/AlertDialog.svelte'

describe('AlertDialog', () => {
  it('renders without errors', () => {
    expect(() => render(AlertDialog)).not.toThrow()
  })
})
