import { describe, it, expect } from 'vitest'
import { mount } from '@vue/test-utils'
import UdialogUheader from '../../components/dialog-header.vue'

describe('UdialogUheader', () => {
  it('renders without errors', () => {
    expect(() => mount(UdialogUheader)).not.toThrow()
  })
})
