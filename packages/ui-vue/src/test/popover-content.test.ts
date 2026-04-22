import { describe, it, expect } from 'vitest'
import { mount } from '@vue/test-utils'
import UpopoverUcontent from '../../components/popover-content.vue'

describe('UpopoverUcontent', () => {
  it('renders without errors', () => {
    expect(() => mount(UpopoverUcontent)).not.toThrow()
  })
})
