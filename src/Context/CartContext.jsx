import React, { createContext, useState } from 'react'

const INITIAL_STATE = {
    cart: [

    ]
}
export const CartContext = createContext(INITIAL_STATE)

export const CartProvider = ({children}) => {

  const [cart, setCart] = useState([])

  return (
    <CartContext.Provider value={[cart, setCart]}>
        {children}
    </CartContext.Provider>
  )
}