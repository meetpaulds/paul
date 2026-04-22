import { describe, it, expect } from 'vitest'
import { mount } from '@vue/test-utils'
import UradioUgroup from '../../components/radio-group.vue'

describe('UradioUgroup', () => {
  it('renders without errors', () => {
    expect(() => mount(UradioUgroup)).not.toThrow()
  })
})
