import React from 'react'
import lensPath from 'ramda/src/lensPath'
import over from 'ramda/src/over'
import remove from 'ramda/src/remove'
import pipe from 'ramda/src/pipe'
import ShoppingBag from '../src/components/ShoppingBag'
import OrderSummary from '../src/components/OrderSummary'
import { calculateTotalPrice, calculateDiscount } from './calculator'

const fruits = [
  {
    name: 'Apples',
    price: 0.25,
    quantity: 1
  },
  {
    name: 'Oranges',
    price: 0.30,
    quantity: 1
  },
  {
    name: 'Bananas',
    price: 0.15,
    quantity: 1
  },
  {
    name: 'Papayas',
    price: 0.15,
    quantity: 1,
    isOnPromo: true
  }
]

class App extends React.Component {
  state = {
    items: fruits
  }

  /**
   * Handle change in item quantity
   * @param  {int} index index of the item
   * @param  {function} modifierFn a function that takes in the existing
   * quantity of the item and return a new quantity
   */
  handleItemQuantityChange = (index, modifierFn) => {
    // Validates new quantity (e.g. can't be negative)
    const safeModifierFn = pipe(
      modifierFn,
      n => Math.max(0, n)
    )

    // Apply the change of quantity to the state
    // a Lens is used to point to the property to be modified
    const lens = lensPath([index, 'quantity'])
    const items = over(lens, safeModifierFn, this.state.items)
    this.setState({ items })
  }

  /**
   * Handle removal of an item from the shopping bag
   * @param  {int} index index of the item
   */
  handleRemoveItem = (index) => {
    const items = remove(index, index + 1, this.state.items)
    this.setState({ items })
  }

  /**
   * Handles user clicking the checkout button
   */
  handleCheckout = () => {
    console.log('Sorry, no fruits for you. This is only a demo')
  }

  render () {
    return (
      <div className="mw9 center sans-serif pa2">
        <h1 className="f1 ph2">Fruit Republic</h1>
        <div className="cf ph2-l">
          <div className="fl w-100 w-two-thirds-l ph2">
            <ShoppingBag
              items={this.state.items}
              onItemQuantityChange={this.handleItemQuantityChange}
              onRemoveItem={this.handleRemoveItem}
            />
          </div>
          <div className="fl w-100 w-third-l ph2 tr">
            <OrderSummary
              discount={calculateDiscount(this.state.items)}
              totalPrice={calculateTotalPrice(this.state.items)}
            />
            <button
              className="input-reset bn pointer:hover pa2 f3 mt4"
              onClick={this.handleCheckout}
            >
              Checkout
            </button>
          </div>
        </div>
      </div>
    )
  }
}

export default App
