import { describe, it, expect } from 'vitest'
import { mount } from '@vue/test-utils'
import UcardUtitle from '../../components/card-title.vue'

describe('UcardUtitle', () => {
  it('renders without errors', () => {
    expect(() => mount(UcardUtitle)).not.toThrow()
  })
})
