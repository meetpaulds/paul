import { describe, it, expect } from 'vitest'
import { mount } from '@vue/test-utils'
import Utoaster from '../../components/toaster.vue'

describe('Utoaster', () => {
  it('renders without errors', () => {
    expect(() => mount(Utoaster)).not.toThrow()
  })
})
