import React, { useContext } from 'react'
import QuantityManager from '../QuantityManager/QuantityManager'
import { DANGER_COLOR } from '../../constants/theme'
import { CartContext } from '../../Context/CartContext'

import './cartCard.css'

const CartCard = ({product}) => {

  const [cart, setCart] = useContext(CartContext)
  
  return (
    <div className='cartCardWrapper'>
      <div className='productInfoWrapper'>
        {/* <img src='/assets/product_placeholder.png' className='productImg'/> */}
        <div style={{ height: '100%' , display: 'flex', flexDirection: 'column', justifyContent: 'space-between', marginLeft: "2rem", height: "7rem" }}>
          <div>{product.name}</div>
          <div>{product.category.name}</div>
          <button className="removeBtn" style={{ backgroundColor: DANGER_COLOR }} onClick={() => {
            setCart(cart.filter((element) => element.id !== product.id))
          }}>Remove</button>
        </div>
      </div>
      <div className='placeCenter'>
        <p>{product.price} DH</p>
      </div>
      <div className='placeCenter'>
        <QuantityManager givenQuantity={product.quantity} updateQuantity={(newQuantity) => {
          setCart((oldCart) => oldCart.map((element) =>{
            if(element.id === product.id){
              return ({
                ...element,
                quantity: newQuantity
              })
            }
            else{
              return element
            }
          }))
        }}/>
      </div>
      <div className='placeCenter'>
        <p>{product.price * product.quantity} DH</p>
      </div>
    </div>
  )
}

export default CartCard