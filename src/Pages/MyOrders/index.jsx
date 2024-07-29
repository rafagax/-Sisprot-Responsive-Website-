import { useContext } from 'react'

import { ShoppingCartContext } from '../../Context'


function MyOrders() {
  const context = useContext(ShoppingCartContext)

  return (
    <p>my ordenes pg</p>
    
  )
}

export default MyOrders