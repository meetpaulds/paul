import { describe, it, expect } from 'vitest'
import { mount } from '@vue/test-utils'
import UalertUdialog from '../../components/alert-dialog.vue'

describe('UalertUdialog', () => {
  it('renders without errors', () => {
    expect(() => mount(UalertUdialog)).not.toThrow()
  })
})
