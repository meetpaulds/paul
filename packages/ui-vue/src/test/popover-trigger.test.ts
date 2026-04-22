import { describe, it, expect } from 'vitest'
import { mount } from '@vue/test-utils'
import UpopoverUtrigger from '../../components/popover-trigger.vue'

describe('UpopoverUtrigger', () => {
  it('renders without errors', () => {
    expect(() => mount(UpopoverUtrigger)).not.toThrow()
  })
})
