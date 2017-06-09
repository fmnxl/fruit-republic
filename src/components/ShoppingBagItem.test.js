import React from 'react'
import ShoppingBagItem from './ShoppingBagItem'
import { shallow } from 'enzyme'

const apples = {
  id: 1,
  name: 'Apple',
  quantity: 1
}
describe('ShoppingBagItem', () => {
  it('renders without exploding', () => {
    const wrapper = shallow(<ShoppingBagItem {...apples} />)
    expect(wrapper).toHaveLength(1)
  })

  it('displays the correct fruit information', () => {
    const wrapper = shallow(<ShoppingBagItem {...apples} />)
    expect(wrapper.find('.name').text()).toEqual('Apple')
    expect(wrapper.find('.quantity').text()).toEqual('1')
    expect(wrapper.find('.is-on-promo')).toHaveLength(0)
  })

  it('displays promo', () => {
    const wrapper = shallow(<ShoppingBagItem isOnPromo />)
    expect(wrapper.find('.is-on-promo')).toHaveLength(1)
  })

  it('handles clicking the add button', () => {
    const spy = jest.fn()
    const wrapper = shallow(<ShoppingBagItem {...apples} onIncreaseQuantity={spy} />)
    wrapper.find('.increase-button').simulate('click')
    expect(spy).toHaveBeenCalled()
  })

  it('handles clicking the decrease button', () => {
    const spy = jest.fn()
    const wrapper = shallow(<ShoppingBagItem {...apples} onDecreaseQuantity={spy} />)
    wrapper.find('.decrease-button').simulate('click')
    expect(spy).toHaveBeenCalled()
  })

  it('handles clicking the remove button', () => {
    const spy = jest.fn()
    const wrapper = shallow(<ShoppingBagItem {...apples} onRemove={spy} />)
    wrapper.find('.remove-button').simulate('click')
    expect(spy).toHaveBeenCalled()
  })
})
