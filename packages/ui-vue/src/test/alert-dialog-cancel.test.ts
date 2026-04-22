import { describe, it, expect } from 'vitest'
import { mount } from '@vue/test-utils'
import UalertUdialogUcancel from '../../components/alert-dialog-cancel.vue'

describe('UalertUdialogUcancel', () => {
  it('renders without errors', () => {
    expect(() => mount(UalertUdialogUcancel)).not.toThrow()
  })
})
