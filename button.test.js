import { mount } from '@vue/test-utils'
import MyButton from './button.vue'

describe('button', () => {
  test('render button', () => {
    const wrappper = mount(MyButton)
    expect(wrappper.contains('button')).toBe(true)
  })
})