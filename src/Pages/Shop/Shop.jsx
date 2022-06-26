import React, { useContext, useEffect, useState } from 'react'
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
import axios from 'axios'

import NavigationBarClient from '../../Components/NavigationBarClient/NavigationBarClient'
import { API_URL } from '../../constants/api'
import { CartContext } from '../../Context/CartContext'

// const products = new Array(5).fill({
//     image: "/assets/product_placeholder.png",
//     name: "Product Name",
//     price: 200,
//     description: "Product Description",
// })

const Shop = () => {

    const [products, setProducts] = useState([])

    const [cart, setCart] = useContext(CartContext)

    const handleAddToCart = (product) => {
        if(!cart.find((element) => element.id === product.id))
            setCart([...cart, {...product, quantity: 1}])
    }

    useEffect(() => {
        const fetchProducts = async () => {
            const {data} = await axios.get(`${API_URL}/systems/Products`)
            setProducts(data.map((datum) => ({...datum, image: "/assets/product_placeholder.png"})))
        }
        fetchProducts()
    }, [])

  return (
    <>
        <NavigationBarClient updateProducts={(newProducts) => {setProducts(newProducts)}}/>
        <div style={{ padding: "40px", display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)' }}>
            {
                products.map((product) => (
                    <Card key={product.id} style={{ width: '25rem', textAlign: 'center', margin: "2rem auto" }}>
                        {/* <Card.Img variant="top" src={product.image} style={{ width: "100%", height: "15rem", objectFit: "contain" }} /> */}
                        <Card.Body>
                            <div style={{ display: 'flex', justifyContent: 'space-between', padding: "0 1rem" }}>
                                <Card.Title>{product.name}</Card.Title>
                                <p style={{ color: "#777" }}>{product.price} DH</p>
                            </div>
                            <Card.Text>
                                {product.description}
                            </Card.Text>
                            <Button variant="primary" onClick={() => {handleAddToCart(product)}}>Add To Cart</Button>
                        </Card.Body>
                    </Card>
                ))
            }
        </div>
    </>
  )
}

export default Shop