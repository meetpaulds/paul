import { describe, it, expect } from 'vitest'
import { mount } from '@vue/test-utils'
import UalertUdialogUtitle from '../../components/alert-dialog-title.vue'

describe('UalertUdialogUtitle', () => {
  it('renders without errors', () => {
    expect(() => mount(UalertUdialogUtitle)).not.toThrow()
  })
})
