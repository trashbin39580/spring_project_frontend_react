import React, { useState } from 'react'
import Table from 'react-bootstrap/Table'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEdit, faTrashCan } from '@fortawesome/free-solid-svg-icons'
import { DANGER_COLOR, LOCK_COLOR } from '../../constants/theme'
import { Link } from 'react-router-dom'

import './productsTable.css'

const ProductsTable = () => {

  const [products, setProducts] = useState([
    {
      id: 'roh138941',
      name : 'Levis Jeans',
      category: 'Pants',
      description: 'Description Test'
    },
    {
      id: 'yug148932',
      name : 'White T-Shirt',
      category: 'Tops',
      description: 'Description Test'
    },
  ])

  const handleDelete = (id) => {
    setProducts((oldProducts) => oldProducts.filter((product) => product.id !== id))
  }

  return (
    <Table striped bordered>
      <thead>
        <tr style={{ textAlign: 'center' }}>
          <th>#</th>
          <th>Name</th>
          <th>Category</th>
          <th>Description</th>
          <th>Edit</th>
          <th>Delete</th>
        </tr>
      </thead>
      <tbody>
        {
          products.map((product) => (
            <tr style={{ textAlign: 'center' }}>
              <td>{product.id}</td>
              <td>{product.name}</td>
              <td>{product.category}</td>
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
  )
}

export default ProductsTable