import { describe, it, expect } from 'vitest'
import { mount } from '@vue/test-utils'
import Ucommand from '../../components/command.vue'

describe('Ucommand', () => {
  it('renders without errors', () => {
    expect(() => mount(Ucommand)).not.toThrow()
  })
})
