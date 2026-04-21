import { describe, it, expect } from 'vitest'
import { mount } from '@vue/test-utils'
import Uskeleton from '../../components/skeleton.vue'

describe('Uskeleton', () => {
  it('renders without errors', () => {
    expect(() => mount(Uskeleton)).not.toThrow()
  })
})
