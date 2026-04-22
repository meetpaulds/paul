import { describe, it, expect } from 'vitest'
import { mount } from '@vue/test-utils'
import Usheet from '../../components/sheet.vue'

describe('Usheet', () => {
  it('renders without errors', () => {
    expect(() => mount(Usheet)).not.toThrow()
  })
})
