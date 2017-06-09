import React from 'react'
import ShoppingBag, { increaseQuantity, decreaseQuantity } from './ShoppingBag'
import { shallow } from 'enzyme'

const apple = {
  id: 1,
  name: 'Apple',
  quantity: 1
}

describe('ShoppingBag', () => {
  it('renders without exploding', () => {
    const wrapper = shallow(<ShoppingBag items={[]} />)
    expect(wrapper).toHaveLength(1)
  })

  it('renders items', () => {
    const wrapper = shallow(<ShoppingBag items={[apple]} />)
    expect(wrapper.find('ShoppingBagItem')).toHaveLength(1)
  })

  it('handles an item being removed', () => {
    const spy = jest.fn()
    const wrapper = shallow(<ShoppingBag items={[apple]} onRemoveItem={spy} />)
    wrapper.find('ShoppingBagItem').first().prop('onRemove')()
    expect(spy).toHaveBeenCalledWith(0)
  })

  it('handles an item quantity being changed directly', () => {
    const spy = jest.fn()
    const wrapper = shallow(<ShoppingBag items={[apple]} onItemQuantityChange={spy} />)
    wrapper.find('ShoppingBagItem').first().prop('onQuantityChange')(2)
    expect(spy).toHaveBeenCalledWith(0, 2)
  })

  it('handles an item quantity being increased & decreased', () => {
    const spy = jest.fn()
    const wrapper = shallow(<ShoppingBag items={[apple]} onItemQuantityChange={spy} />)
    wrapper.find('ShoppingBagItem').first().prop('onIncreaseQuantity')()
    expect(spy).toHaveBeenCalledWith(0, increaseQuantity)
  })

  it('handles an item quantity being increased & decreased', () => {
    const spy = jest.fn()
    const wrapper = shallow(<ShoppingBag items={[apple]} onItemQuantityChange={spy} />)
    wrapper.find('ShoppingBagItem').first().prop('onDecreaseQuantity')()
    expect(spy).toHaveBeenCalledWith(0, decreaseQuantity)
  })
})
