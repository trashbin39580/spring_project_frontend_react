import React, { useEffect, useState } from 'react'
import { Link, useParams, useNavigate } from 'react-router-dom'
import axios from 'axios'
import Card from 'react-bootstrap/Card'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import { API_URL } from '../../constants/api'

const CreateProduct = () => {

  const [data, setData] = useState({
    name: "",
    price: 0,
    category: 0,
    description: ""
  })

  const [categories, setCategories] = useState([])

  const navigate = useNavigate()

  const handleSubmit = async (e) => {
    e.preventDefault()
    await axios.post(`${API_URL}/systems/Products?name=${data.name}&price=${data.price}&description=${data.description}&categoryId=${data.category}`)
    navigate('/products')
  }

  useEffect(() => {
    const fetchCategories = async () => {
      const {data} = await axios.get(`${API_URL}/systems/Categories`)
      setCategories(data)
    }
    fetchCategories()
  }, [])

  return (
    <div className='editProductWrapper'>
      <Card style={{ width: "40%" }}>
        <Card.Header style={{ textAlign: 'center', fontWeight: '500', fontSize: '23px' }}>Create Product</Card.Header>
        <Card.Body>
          <Form>
            <Form.Group className="mb-3">
                <Form.Label>Name</Form.Label>
                <Form.Control type="text" placeholder="Enter Name" onChange={(e) => { setData({...data, name: e.target.value}) }}/>
            </Form.Group>
            <Form.Group className="mb-3">
                <Form.Label>Price</Form.Label>
                <Form.Control type="number" placeholder="Enter Price" onChange={(e) => { setData({...data, price: e.target.value}) }}/>
            </Form.Group>
            <Form.Group className="mb-3">
                <Form.Label>Category</Form.Label><br/>
                <select style={{ width: '100%', padding: '7px', border: '1px solid #CCC', borderRadius: '7px' }} onChange={(e) => { setData({...data, category: e.target.value}) }}>
                  <option>Select Category</option>
                  {categories.map((category) => (
                    <option key={category.id} value={category.id}>{category.name}</option>
                  ))}
                </select>
            </Form.Group>
            <Form.Group className="mb-3">
                <Form.Label>Description</Form.Label>
                <Form.Control as="textarea" placeholder="Enter Description" onChange={(e) => { setData({...data, description: e.target.value}) }}/>
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

export default CreateProduct