import { mount } from '@vue/test-utils'
import Index from '@/pages/index'

describe('Index.vue', () => {
  it('renders an h1', () => {
    const wrapper = mount(Index)
    wrapper.setData({
      promptIndex: 0,
      users: [
        { name: 'foo' }
      ]
    })
    expect(wrapper.findAll('h1').length).toBe(1)
  })

  // it('h1 renders data.msg as text', () => {
  //   const wrapper = shallow(Index)
  //   const msg = wrapper.data().version
  //   expect(wrapper.find('h1')[0].text()).toBe(msg)
  // })

  // it('h1 text changes when button is clicked', () => {
  //   const expectedMessage = 'new message'

  //   const wrapper = shallow(Index)
  //   const button = wrapper.find('#button')[0]
  //   button.trigger('click')

  //   expect(wrapper.find('#app-title')[0].text()).toBe(expectedMessage)
  // })
})
