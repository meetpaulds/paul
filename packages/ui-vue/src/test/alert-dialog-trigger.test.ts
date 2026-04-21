import { describe, it, expect } from 'vitest'
import { mount } from '@vue/test-utils'
import UalertUdialogUtrigger from '../../components/alert-dialog-trigger.vue'

describe('UalertUdialogUtrigger', () => {
  it('renders without errors', () => {
    expect(() => mount(UalertUdialogUtrigger)).not.toThrow()
  })
})
