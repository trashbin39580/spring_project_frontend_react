import React, { useState } from 'react'

import './quantityManager.css'

const QuantityManager = ({givenQuantity, updateQuantity}) => {
    const [quantity, setQuantity] = useState(givenQuantity)
  return (
    <div className='quantityManagerWrapper'>
        <button style={{ padding: '0rem 0.75rem', border: "none", borderRadius: "10px" }} onClick={() => {
          setQuantity((oldQuantity) => {
            if(oldQuantity >= 2) updateQuantity(oldQuantity - 1)
            return oldQuantity >= 2 ? oldQuantity - 1 : oldQuantity
          })
        }}>-</button>
        <span style={{ padding: '0 1rem' }}>{quantity}</span>
        <button style={{ padding: '0rem 0.75rem', border: "none", borderRadius: "10px" }} onClick={() => {
          setQuantity((quantity) => {
            updateQuantity(quantity + 1)
            return quantity + 1
          })
        }}>+</button>
    </div>
  )
}

export default QuantityManager