import React, { useEffect, useState } from 'react'
import Table from 'react-bootstrap/Table'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEdit, faTrashCan } from '@fortawesome/free-solid-svg-icons'
import { DANGER_COLOR, LOCK_COLOR } from '../../constants/theme'
import axios from 'axios'
import { Link } from 'react-router-dom'
import Button from 'react-bootstrap/Button'
import { API_URL } from '../../constants/api'

import './productsTable.css'

const ProductsTable = () => {

  const [products, setProducts] = useState([])
  

  useEffect(() => {
    const fetchProducts = async () => {
      const {data} = await axios.get(`${API_URL}/systems/Products`)
      setProducts(data)
    }
    fetchProducts()
  }, [])


  const handleDelete = async (id) => {
    await axios.delete(`${API_URL}/systems/Products/${id}`)
    setProducts((oldProducts) => oldProducts.filter((product) => product.id !== id))
  }

  return (
    <div style={{ padding: "10px 50px" }}>
      <Link to="/products/create">
        <Button variant="primary" type="submit" style={{ margin: "10px auto 30px" }}>
          Create Product
        </Button>
      </Link>
      <Table striped bordered>
        <thead>
          <tr style={{ textAlign: 'center' }}>
            <th>#</th>
            <th>Name</th>
            <th>Category</th>
            <th>Price</th>
            <th>Description</th>
            <th>Edit</th>
            <th>Delete</th>
          </tr>
        </thead>
        <tbody>
          {
            products.map((product) => (
              <tr key={product.id} style={{ textAlign: 'center' }}>
                <td>{product.id}</td>
                <td>{product.name}</td>
                <td>{product.category.name}</td>
                <td>{product.price} DH</td>
                <td>{product.description}</td>
                <td>
                  <Link to={`edit/${product.id}`}>
                    <FontAwesomeIcon 
                      icon={faEdit} 
                      color={LOCK_COLOR} 
                      style={{ fontSize: 20, cursor: 'pointer' }}
                    />
                  </Link>
                </td>
                <td>
                  <FontAwesomeIcon 
                    icon={faTrashCan} 
                    color={DANGER_COLOR} 
                    style={{ fontSize: 20, cursor: 'pointer' }}
                    onClick={() => handleDelete(product.id)}
                  />
                </td>
              </tr>
            ))
          }
        </tbody>
      </Table>
    </div>
  )
}

export default ProductsTable