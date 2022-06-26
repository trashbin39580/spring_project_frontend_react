import React, { useState } from 'react'
import { Link, useParams, useNavigate } from 'react-router-dom'
import axios from 'axios'
import Card from 'react-bootstrap/Card'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'

import './createCategory.css'
import { API_URL } from '../../constants/api'

const CreateCategory = () => {

  const [category, setCategory] = useState({
    id: '',
    name: '',
    products: []
  })

  const navigate = useNavigate()

  const handleSubmit = async (e) => {
    e.preventDefault()
    await axios.post(`${API_URL}/systems/Categories?categoryName=${category.name}`)
    navigate('/categories')
  }

  return (
    <div className='createCategoryWrapper'>
      <Card style={{ width: "40%" }}>
        <Card.Header style={{ textAlign: 'center', fontWeight: '500', fontSize: '23px' }}>Create Category</Card.Header>
        <Card.Body>
          <Form>
            <Form.Group className="mb-3">
                <Form.Label>Name</Form.Label>
                <Form.Control type="text" placeholder="Enter Name" value={category.name} onChange={(e) => { setCategory({...category, name: e.target.value}) }}/>
            </Form.Group>
            <div style={{ width: '100%', textAlign: 'center' }}>
              <Button variant="primary" type="submit" style={{ margin: "10px auto" }} onClick={handleSubmit}>
                Submit
              </Button>
            </div>
          </Form>
        </Card.Body>
      </Card>
    </div>
  )
}

export default CreateCategory