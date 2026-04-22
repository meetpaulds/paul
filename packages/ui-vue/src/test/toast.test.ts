import { describe, it, expect } from 'vitest'
import { mount } from '@vue/test-utils'
import Utoast from '../../components/toast.vue'

describe('Utoast', () => {
  it('renders without errors', () => {
    expect(() => mount(Utoast)).not.toThrow()
  })
})
