import { describe, it, expect } from 'vitest'
import { mount } from '@vue/test-utils'
import Ucombobox from '../../components/combobox.vue'

describe('Ucombobox', () => {
  it('renders without errors', () => {
    expect(() => mount(Ucombobox)).not.toThrow()
  })
})
