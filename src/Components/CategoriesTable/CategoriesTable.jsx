import React, { useEffect, useState } from 'react'
import Table from 'react-bootstrap/Table'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEdit, faTrashCan } from '@fortawesome/free-solid-svg-icons'
import { Link, useParams } from 'react-router-dom'
import Button from 'react-bootstrap/Button'
import axios from 'axios'
import { DANGER_COLOR, LOCK_COLOR } from '../../constants/theme'

import { API_URL } from '../../constants/api'

import './categoriesTable.css'

const CategoriesTable = () => {

  const [categories, setCategories] = useState([])

  useEffect(() => {
    const fetchCategories = async () => {
      const {data} = await axios.get(`${API_URL}/systems/Categories`)
      setCategories(data)
    }
    fetchCategories()
  }, [])

  const handleDelete = async (id) => {
    await axios.delete(`${API_URL}/systems/Categories/${id}`)
    setCategories((oldCategories) => oldCategories.filter((category) => category.id !== id))
  }

  return (
    <div style={{ padding: "10px 50px" }}>
      <Link to="/categories/create">
        <Button variant="primary" type="submit" style={{ margin: "10px auto 30px" }}>
          Create Category
        </Button>
      </Link>
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
              <tr key={category.id} style={{ textAlign: 'center' }}>
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
    </div>
  )
}

export default CategoriesTable