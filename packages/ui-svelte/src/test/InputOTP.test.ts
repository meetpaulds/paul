import { describe, it, expect } from 'vitest'
import { render } from '@testing-library/svelte'
import InputOTP from '../../lib/components/InputOTP.svelte'

describe('InputOTP', () => {
  it('renders without errors', () => {
    expect(() => render(InputOTP)).not.toThrow()
  })
})
