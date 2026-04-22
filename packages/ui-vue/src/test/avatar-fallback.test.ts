import { describe, it, expect } from 'vitest'
import { mount } from '@vue/test-utils'
import UavatarUfallback from '../../components/avatar-fallback.vue'

describe('UavatarUfallback', () => {
  it('renders without errors', () => {
    expect(() => mount(UavatarUfallback)).not.toThrow()
  })
})
