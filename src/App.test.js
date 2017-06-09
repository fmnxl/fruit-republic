import React from 'react'
import { shallow, mount } from 'enzyme'
import App from './App'

// Unit tests

describe('App', () => {
  it('renders without exploding', () => {
    shallow(<App />)
  })
})

// These would be an equivalent of testing redux actions
describe('State management', () => {
  it('handles increasing item quantity', () => {
    const wrapper = shallow(<App />)
    wrapper.setState({ items: [{ quantity: 0 }] })
    wrapper.instance().handleItemQuantityChange(0, n => n + 1)
    expect(wrapper.state().items[0].quantity).toEqual(1)
  })

  it('handles decreasing item quantity', () => {
    const wrapper = shallow(<App />)
    wrapper.setState({ items: [{ quantity: 1 }] })
    wrapper.instance().handleItemQuantityChange(0, n => n - 1)
    expect(wrapper.state().items[0].quantity).toEqual(0)
  })

  it('prevents quantity to go negative', () => {
    const wrapper = shallow(<App />)
    wrapper.setState({ items: [{ quantity: 0 }] })
    wrapper.instance().handleItemQuantityChange(0, n => n - 1)
    expect(wrapper.state().items[0].quantity).toEqual(0)
  })
})

// E2E tests

describe('E2E Tests', () => {
  it('mounts without exploding', () => {
    mount(<App />)
  })

  it('re-calculates the total price when item quantity is changed', () => {
    const wrapper = mount(<App />)
    const totalPriceEl = wrapper.find('.total-price')
    const initialTotalPrice = totalPriceEl.text()
    wrapper.find('.increase-button').first().simulate('click')
    expect(totalPriceEl.text()).not.toEqual(initialTotalPrice)
  })

  it('calculates promo fruit discount', () => {
    const wrapper = mount(<App />)
    const papayasIncreaseButton = wrapper
        .find('ShoppingBagItem')
        .at(3) // This is Papaya, which is on promo
        .find('.increase-button')
        .first()

    // Simulate increasing the quantity to 3
    papayasIncreaseButton.simulate('click')
    papayasIncreaseButton.simulate('click')

    expect(wrapper.find('.discount').text()).toEqual('£0.15')
  })

  it('handles removal of a fruit and changes the price accordingly', () => {
    const wrapper = mount(<App />)
    const aRemoveButton = wrapper
        .find('ShoppingBagItem')
        .first()
        .find('.remove-button')
        .first()

    aRemoveButton.simulate('click')

    expect(wrapper.find('ShoppingBagItem')).toHaveLength(3)
    expect(wrapper.find('.total-price').text()).toEqual('£0.60')
  })
})
