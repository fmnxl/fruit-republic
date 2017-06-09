import React from 'react'
import OrderSummary from './OrderSummary'
import { shallow } from 'enzyme'

describe('OrderSummary', () => {
  it('renders without exploding', () => {
    const wrapper = shallow(<OrderSummary />)
    expect(wrapper).toHaveLength(1)
  })

  it('displays the total price and discount', () => {
    const wrapper = shallow(<OrderSummary totalPrice={100} discount={20} />)
    expect(wrapper.find('.total-price').text()).toContain('£100.00')
    expect(wrapper.find('.discount').text()).toContain('£20.00')
  })
})
