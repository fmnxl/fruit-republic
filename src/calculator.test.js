import React from 'react'
import { calculateTotalPrice, calculateDiscount } from './calculator'

describe('Prices calculator', () => {
  it('calculates the total price of items correctly', () => {
    const items = [{ quantity: 2, price: 0.3 }]
    expect(calculateTotalPrice(items)).toEqual(0.6)
  })

  it('calculates the total price of items on promo correctly', () => {
    const items = [{ quantity: 3, price: 0.3, isOnPromo: true }]
    expect(calculateTotalPrice(items)).toEqual(0.6)
  })

  it('calculates the total discount of items correctly', () => {
    const items = [{ quantity: 3, price: 0.3, isOnPromo: true }]
    expect(calculateDiscount(items)).toEqual(0.3)
  })
})
