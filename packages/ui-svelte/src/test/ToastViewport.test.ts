import { describe, it, expect } from 'vitest'
import { render } from '@testing-library/svelte'
import ToastViewport from '../../lib/components/ToastViewport.svelte'

describe('ToastViewport', () => {
  it('renders without errors', () => {
    expect(() => render(ToastViewport)).not.toThrow()
  })
})
