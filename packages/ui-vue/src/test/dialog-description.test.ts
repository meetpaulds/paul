import { describe, it, expect } from 'vitest'
import { mount } from '@vue/test-utils'
import UdialogUdescription from '../../components/dialog-description.vue'

describe('UdialogUdescription', () => {
  it('renders without errors', () => {
    expect(() => mount(UdialogUdescription)).not.toThrow()
  })
})
