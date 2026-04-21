import { describe, it, expect } from 'vitest'
import { mount } from '@vue/test-utils'
import UavatarUimage from '../../components/avatar-image.vue'

describe('UavatarUimage', () => {
  it('renders without errors', () => {
    expect(() => mount(UavatarUimage)).not.toThrow()
  })
})
