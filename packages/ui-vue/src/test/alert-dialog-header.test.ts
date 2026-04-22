import { describe, it, expect } from 'vitest'
import { mount } from '@vue/test-utils'
import UalertUdialogUheader from '../../components/alert-dialog-header.vue'

describe('UalertUdialogUheader', () => {
  it('renders without errors', () => {
    expect(() => mount(UalertUdialogUheader)).not.toThrow()
  })
})
