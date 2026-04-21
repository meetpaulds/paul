import { describe, it, expect } from 'vitest'
import { render } from '@testing-library/svelte'
import ToastTitle from '../../lib/components/ToastTitle.svelte'

describe('ToastTitle', () => {
  it('renders without errors', () => {
    expect(() => render(ToastTitle)).not.toThrow()
  })
})
