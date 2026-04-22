import { describe, it, expect } from 'vitest'
import { render } from '@testing-library/svelte'
import ToastDescription from '../../lib/components/ToastDescription.svelte'

describe('ToastDescription', () => {
  it('renders without errors', () => {
    expect(() => render(ToastDescription)).not.toThrow()
  })
})
