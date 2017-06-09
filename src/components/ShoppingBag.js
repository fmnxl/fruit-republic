import React from 'react'
import PropTypes from 'prop-types'
import ShoppingBagItem from './ShoppingBagItem'

/*
 * These are item quantity modifiers that gets
 * sent to the parent container on quantity change
 * They are exported for unit testing purposes
 */
export const increaseQuantity = n => n + 1
export const decreaseQuantity = n => n - 1

const ShoppingBag = ({ items, onItemQuantityChange, onRemoveItem }) => (
  <div className="tl">
    <h2 className="f2 mt0">Your Shopping Bag</h2>
    {items.map((item, i) =>
      (<ShoppingBagItem
        key={i}
        onQuantityChange={(n) => onItemQuantityChange(i, n)}
        onIncreaseQuantity={() => onItemQuantityChange(i, increaseQuantity)}
        onDecreaseQuantity={() => onItemQuantityChange(i, decreaseQuantity)}
        onRemove={() => onRemoveItem(i)}
        {...item}
      />)
    )}
  </div>
)

ShoppingBag.propTypes = {
  items: PropTypes.array,
  onItemQuantityChange: PropTypes.func,
  onRemoveItem: PropTypes.func
}

ShoppingBag.defaultProps = {
  items: [],
  onItemQuantityChange: () => {},
  onRemoveItem: () => {}
}

export default ShoppingBag
