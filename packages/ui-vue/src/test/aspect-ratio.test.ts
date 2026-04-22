import { describe, it, expect } from 'vitest'
import { mount } from '@vue/test-utils'
import UaspectUratio from '../../components/aspect-ratio.vue'

describe('UaspectUratio', () => {
  it('renders without errors', () => {
    expect(() => mount(UaspectUratio)).not.toThrow()
  })
})
