import React from 'react'
import PropTypes from 'prop-types'
import formatPrice from '../lib/formatPrice'

const OrderSummary = ({ totalPrice, discount }) => (
  <div className="order-summary tr">
    <h2 className="f2 mt0">Your order summary</h2>
    <div className="f4 mb0">Total price</div>
    <div className="total-price f1 b mb2">{formatPrice(totalPrice)}</div>
    <div className="f5 mb0">Discount</div>
    <div className="discount f1 b mb2">{formatPrice(discount)}</div>
  </div>
)

OrderSummary.propTypes = {
  totalPrice: PropTypes.number,
  discount: PropTypes.number
}

OrderSummary.defaultProps = {
  totalPrice: 0,
  discount: 0
}

export default OrderSummary
