import React, { useContext, useState } from 'react'

import NavigationBarClient from '../../Components/NavigationBarClient/NavigationBarClient'
import CartCard from '../../Components/CartCard/CartCard'
import { CartContext } from '../../Context/CartContext'
import { AuthContext } from '../../Context/AuthContext'

import './cart.css'
import axios from 'axios'
import { API_URL } from '../../constants/api'

const Cart = () => {

    const [cart, setCart] = useContext(CartContext)
    const [user, setUser] = useContext(AuthContext)

    const handleOrder = async () => {
        const {data} = await axios.post(`${API_URL}/front/panier?user_id=${user.username}`)
        cart.forEach(async (element) => {
            await axios.post(`${API_URL}/front/commande?quantity=${element.quantity}&panier_id=${data.id}&product_id=${element.id}&username=${user.username}`) 
        })
    }

  return (
    <>
        <NavigationBarClient/>
        <div className='cartWrapper'>
            <h2 style={{ marginBottom: '2rem' }}>Shopping Cart</h2>
            {
                cart.map((element) => (
                    <CartCard product={element}/>
                ))
            }
        </div>
        {
            cart.length >= 1 
            &&
            <div style={{ padding: "0 5rem", display: 'flex', justifyContent: 'flex-end'}}>
                <button style={{ padding: "1rem 2rem", borderRadius: "10px" }} onClick={handleOrder}>Order Now</button>
            </div>
        }
    </>
  )
}

export default Cart