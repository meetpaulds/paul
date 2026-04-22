import { describe, it, expect } from 'vitest'
import { mount } from '@vue/test-utils'
import UdialogUcontent from '../../components/dialog-content.vue'

describe('UdialogUcontent', () => {
  it('renders without errors', () => {
    expect(() => mount(UdialogUcontent)).not.toThrow()
  })
})
