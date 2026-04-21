import { describe, it, expect } from 'vitest'
import { mount } from '@vue/test-utils'
import UalertUdialogUdescription from '../../components/alert-dialog-description.vue'

describe('UalertUdialogUdescription', () => {
  it('renders without errors', () => {
    expect(() => mount(UalertUdialogUdescription)).not.toThrow()
  })
})
