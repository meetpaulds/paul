import { describe, it, expect } from 'vitest'
import { render } from '@testing-library/svelte'
import Calendar from '../../lib/components/Calendar.svelte'

describe('Calendar', () => {
  it('renders without errors', () => {
    expect(() => render(Calendar)).not.toThrow()
  })
})
