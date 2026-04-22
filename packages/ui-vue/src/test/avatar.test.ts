import { describe, it, expect } from 'vitest'
import { mount } from '@vue/test-utils'
import Uavatar from '../../components/avatar.vue'

describe('Uavatar', () => {
  it('renders without errors', () => {
    expect(() => mount(Uavatar)).not.toThrow()
  })
})
