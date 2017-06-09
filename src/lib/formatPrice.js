/**
 * Formats a number as price in pounds
 * @param  {number} price
 */
export default function formatPrice (price) {
  return `£${price.toFixed(2)}`
}
