import { describe, it, expect } from 'vitest'
import { mount } from '@vue/test-utils'
import Umenubar from '../../components/menubar.vue'

describe('Umenubar', () => {
  it('renders without errors', () => {
    expect(() => mount(Umenubar)).not.toThrow()
  })
})
