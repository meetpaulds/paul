import { describe, it, expect } from 'vitest'
import { render } from '@testing-library/svelte'
import Toast from '../../lib/components/Toast.svelte'

describe('Toast', () => {
  it('renders without errors', () => {
    expect(() => render(Toast)).not.toThrow()
  })
})
