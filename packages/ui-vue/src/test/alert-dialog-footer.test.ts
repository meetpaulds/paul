import { describe, it, expect } from 'vitest'
import { mount } from '@vue/test-utils'
import UalertUdialogUfooter from '../../components/alert-dialog-footer.vue'

describe('UalertUdialogUfooter', () => {
  it('renders without errors', () => {
    expect(() => mount(UalertUdialogUfooter)).not.toThrow()
  })
})
