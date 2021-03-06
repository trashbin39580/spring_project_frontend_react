import React, { useEffect, useState } from 'react'
import { Link, useParams, useNavigate } from 'react-router-dom'
import axios from 'axios'
import Card from 'react-bootstrap/Card'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'

import './editCategory.css'
import { API_URL } from '../../constants/api'

const EditCategory = () => {
  
  const { id } = useParams()
  
  const navigate = useNavigate()

  const [category, setCategory] = useState({
    id: '',
    name: '',
    products: []
  })


  const handleSubmit = async(e) => {
    e.preventDefault()
    
    await axios.put(
      `${API_URL}/systems/Categories`, 
      {
        ...category
      }
    )

    navigate('/categories')
  }

  useEffect(() => {
    const fetchCategory = async () => {
      
      const {data} = await axios.get(`${API_URL}/systems/Categories/${id}`)
      setCategory(data)
    }
    fetchCategory()
  }, [id])

  return (
    <div className='editCategoryWrapper'>
      <Card style={{ width: "40%" }}>
        <Card.Header style={{ textAlign: 'center', fontWeight: '500', fontSize: '23px' }}>Edit Category</Card.Header>
        <Card.Body>
          <Form>
            <Form.Group className="mb-3">
                <Form.Label>Id</Form.Label>
                <Form.Control type="text" placeholder="Enter Id" disabled value={category.id} onChange={(e) => { setCategory({...category, id: e.target.value}) }}/>
            </Form.Group>
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

export default EditCategory