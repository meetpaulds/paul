import { describe, it, expect } from 'vitest'
import { mount } from '@vue/test-utils'
import UalertUdialogUaction from '../../components/alert-dialog-action.vue'

describe('UalertUdialogUaction', () => {
  it('renders without errors', () => {
    expect(() => mount(UalertUdialogUaction)).not.toThrow()
  })
})
