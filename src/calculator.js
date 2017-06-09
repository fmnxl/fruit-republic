import config from './config'

// Get the promotion config (e.g. buy 2 get 3)
const PROMO = config.promotion

/*
 * Calculates the price after discount
 */
export const calculateTotalPrice = items =>
  items.reduce((acc, item) => {
    // Adjust quantity to be paid if item is on promo
    const adjustedQuantity = item.isOnPromo ?
      Math.floor(item.quantity / PROMO.get) * PROMO.buy + item.quantity % PROMO.get :
      item.quantity

    return acc + item.price * adjustedQuantity
  }, 0)

/*
 * Calculates the total discount
 */
export const calculateDiscount = items =>
  items.reduce((acc, item) => {
    // Count the number of free items on promotion
    const numFreeItems = item.isOnPromo ?
      Math.floor(item.quantity / PROMO.get) :
      0

    return acc + item.price * numFreeItems
  }, 0)
