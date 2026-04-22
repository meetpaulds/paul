import { describe, it, expect } from 'vitest'
import { mount } from '@vue/test-utils'
import Utabs from '../../components/tabs.vue'

describe('Utabs', () => {
  it('renders without errors', () => {
    expect(() => mount(Utabs)).not.toThrow()
  })
})
