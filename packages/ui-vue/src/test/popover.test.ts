import { describe, it, expect } from 'vitest'
import { mount } from '@vue/test-utils'
import Upopover from '../../components/popover.vue'

describe('Upopover', () => {
  it('renders without errors', () => {
    expect(() => mount(Upopover)).not.toThrow()
  })
})
