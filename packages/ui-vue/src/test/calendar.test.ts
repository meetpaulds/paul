import { describe, it, expect } from 'vitest'
import { mount } from '@vue/test-utils'
import Ucalendar from '../../components/calendar.vue'

describe('Ucalendar', () => {
  it('renders without errors', () => {
    expect(() => mount(Ucalendar)).not.toThrow()
  })
})
