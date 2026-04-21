import { describe, it, expect } from 'vitest'
import { mount } from '@vue/test-utils'
import UdialogUtitle from '../../components/dialog-title.vue'

describe('UdialogUtitle', () => {
  it('renders without errors', () => {
    expect(() => mount(UdialogUtitle)).not.toThrow()
  })
})
