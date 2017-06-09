import React from 'react'
import PropTypes from 'prop-types'
import formatPrice from '../lib/formatPrice'

const ShoppingBagItem = ({
  name,
  price,
  quantity,
  isOnPromo,
  onQuantityChange,
  onIncreaseQuantity,
  onDecreaseQuantity,
  onRemove
}) => (
  <div className="cf mv2 pa2 ba">
    <div className="fl w-100 w-25-ns tl">
      <h1 className="name f5 f4-ns mv0">{name}</h1>
      <h2 className="price f5 mv0">@ {formatPrice(price)}</h2>
      { isOnPromo &&
        <div className="is-on-promo f5 mv0 green">Promo: 3 for 2!</div> }
    </div>
    <div className="fl w-100 w-50-ns tc">
      <div className="mt1">Quantity</div>
      <button
        className="decrease-button input-reset br-100 w2 h2 bn"
        onClick={onDecreaseQuantity}
      >
        -
      </button>
      <span className="quantity tc input-reset ph4">
        {quantity}
      </span>
      <button
        className="increase-button input-reset br-100 w2 h2 bn"
        onClick={onIncreaseQuantity}
      >
        +
      </button>
    </div>
    <div className="fl w-100 w-25-ns tc tr-ns">
      <button
        className="remove-button input-reset bn mt2 pa2"
        onClick={onRemove}
      >
        Remove
      </button>
    </div>
  </div>
)

ShoppingBagItem.defaultProps = {
  name: '',
  price: 0,
  quantity: 0,
  isOnPromo: false,
  onQuantityChange: () => {},
  onIncreaseQuantity: () => {},
  onDecreaseQuantity: () => {},
  onRemove: () => {}
}

ShoppingBagItem.propTypes = {
  name: PropTypes.string.isRequired,
  quantity: PropTypes.number,
  price: PropTypes.number.isRequired,
  isOnPromo: PropTypes.bool.isRequired,
  onQuantityChange: PropTypes.func.isRequired,
  onIncreaseQuantity: PropTypes.func.isRequired,
  onDecreaseQuantity: PropTypes.func.isRequired,
  onRemove: PropTypes.func.isRequired
}

export default ShoppingBagItem
