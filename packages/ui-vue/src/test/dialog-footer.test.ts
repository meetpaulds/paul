import { describe, it, expect } from 'vitest'
import { mount } from '@vue/test-utils'
import UdialogUfooter from '../../components/dialog-footer.vue'

describe('UdialogUfooter', () => {
  it('renders without errors', () => {
    expect(() => mount(UdialogUfooter)).not.toThrow()
  })
})
