import { describe, it, expect } from 'vitest'
import { mount } from '@vue/test-utils'
import UalertUdialogUcontent from '../../components/alert-dialog-content.vue'

describe('UalertUdialogUcontent', () => {
  it('renders without errors', () => {
    expect(() => mount(UalertUdialogUcontent)).not.toThrow()
  })
})
