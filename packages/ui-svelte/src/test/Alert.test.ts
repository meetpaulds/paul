import { describe, it, expect } from 'vitest'
import { render } from '@testing-library/svelte'
import Alert from '../../lib/components/Alert.svelte'

describe('Alert', () => {
  it('renders without errors', () => {
    expect(() => render(Alert)).not.toThrow()
  })
})
