import React, { useState, useEffect } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import Card from 'react-bootstrap/Card'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import axios from 'axios'
import { API_URL } from '../../constants/api'

import './editProduct.css'

const EditProduct = () => {

  const [data, setData] = useState({
    id: 0,
    name: "",
    price: 0,
    category: 0,
    description: ""
  })

  const [categories, setCategories] = useState([])

  const navigate = useNavigate()

  const { id } = useParams()

  const handleSubmit = async (e) => {
    e.preventDefault()
    await axios.put(`${API_URL}/systems/Products?productId=${data.id}&name=${data.name}&price=${data.price}&description=${data.description}&categoryId=${data.category.id}`)
    navigate('/products')
  }

  useEffect(() => {
    const fetchProduct = async () => {
      const {data} = await axios.get(`${API_URL}/systems/Products/${id}`)
      const {data: categories} = await axios.get(`${API_URL}/systems/Categories`)
      setData(data)
      setCategories(categories)
    }
    fetchProduct()
  }, [id])

  return (
    <div className='editProductWrapper'>
      <Card style={{ width: "40%" }}>
        <Card.Header style={{ textAlign: 'center', fontWeight: '500', fontSize: '23px' }}>Edit Product</Card.Header>
        <Card.Body>
          <Form>
            <Form.Group className="mb-3">
                <Form.Label>Id</Form.Label>
                <Form.Control type="text" placeholder="Enter Id" disabled value={data.id} onChange={(e) => { setData({...data, id: e.target.value}) }}/>
            </Form.Group>
            <Form.Group className="mb-3">
                <Form.Label>Name</Form.Label>
                <Form.Control type="text" placeholder="Enter Name" value={data.name} onChange={(e) => { setData({...data, name: e.target.value}) }}/>
            </Form.Group>
            <Form.Group className="mb-3">
                <Form.Label>Price</Form.Label>
                <Form.Control type="number" placeholder="Enter Price" value={data.price} onChange={(e) => { setData({...data, price: e.target.value}) }}/>
            </Form.Group>
            <Form.Group className="mb-3">
                <Form.Label>Category</Form.Label><br/>
                {/* <Form.Control type="text" placeholder="Select Category"/> */}
                <select style={{ width: '100%', padding: '7px', border: '1px solid #CCC', borderRadius: '7px' }} onChange={(e) => { setData({...data, category: categories.find(category => category.id === Number(e.target.value))}) }}>
                  <option>Select Category</option>
                  {/* <option selected="selected">{data.category.name}</option> */}
                  {categories.map((category) => (
                    <option key={category.id} value={category.id} selected={data.category.id === category.id && "selected"}>{category.name}</option>
                  ))}
                </select>
            </Form.Group>
            <Form.Group className="mb-3">
                <Form.Label>Description</Form.Label>
                <Form.Control as="textarea" placeholder="Enter Description" value={data.description} onChange={(e) => { setData({...data, description: e.target.value}) }}/>
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

export default EditProduct