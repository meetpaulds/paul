import { describe, it, expect } from 'vitest'
import { mount } from '@vue/test-utils'
import Udialog from '../../components/dialog.vue'

describe('Udialog', () => {
  it('renders without errors', () => {
    expect(() => mount(Udialog)).not.toThrow()
  })
})
