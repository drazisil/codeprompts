import { shallow } from '@vue/test-utils'
import Footer from '@/components/Footer'

describe('Footer.vue', () => {
  it('renders an span', () => {
    const wrapper = shallow(Footer)
    expect(wrapper.findAll('span').length).toBe(2)
  })

  // it('span renders data.msg as text', () => {
  //   const wrapper = mount(Footer)
  //   const { vm } = wrapper
  //   const msg = vm.version
  //   expect(wrapper.find('span')[0].text()).toBe(msg)
  // })
})
