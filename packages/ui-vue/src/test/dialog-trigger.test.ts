import { describe, it, expect } from 'vitest'
import { mount } from '@vue/test-utils'
import UdialogUtrigger from '../../components/dialog-trigger.vue'

describe('UdialogUtrigger', () => {
  it('renders without errors', () => {
    expect(() => mount(UdialogUtrigger)).not.toThrow()
  })
})
