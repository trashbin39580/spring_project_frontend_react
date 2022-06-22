import React, { useState } from 'react'
import Table from 'react-bootstrap/Table'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEdit, faTrashCan } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom'

import './categoriesTable.css'
import { DANGER_COLOR, LOCK_COLOR } from '../../constants/theme'

const CategoriesTable = () => {

  const [categories, setCategories] = useState([
    {
      id: "efo141341",
      name: "Pants"
    },
    {
      id: "qsh193582",
      name: "Tops"
    },
  ])

  const handleDelete = (id) => {
    setCategories((oldCategories) => oldCategories.filter((category) => category.id !== id))
  }

  return (
    <Table striped bordered>
      <thead>
        <tr style={{ textAlign: 'center' }}>
          <th>#</th>
          <th>Name</th>
          <th>Edit</th>
          <th>Delete</th>
        </tr>
      </thead>
      <tbody>
        {
          categories.map((category) => (
            <tr style={{ textAlign: 'center' }}>
              <td>{category.id}</td>
              <td>{category.name}</td>
              <td>
                <Link to={`edit/${category.id}`}>
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
                  onClick={() => handleDelete(category.id)}
                />
              </td>
            </tr>
          ))
        }
      </tbody>
    </Table>
  )
}

export default CategoriesTable