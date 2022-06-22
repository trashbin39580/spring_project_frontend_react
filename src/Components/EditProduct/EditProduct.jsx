import React from 'react'
import Card from 'react-bootstrap/Card'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'

import './editProduct.css'

const EditProduct = ({product}) => {
  return (
    <div className='editProductWrapper'>
      <Card style={{ width: "40%" }}>
        <Card.Header style={{ textAlign: 'center', fontWeight: '500', fontSize: '23px' }}>Edit Product</Card.Header>
        <Card.Body>
          <Form>
            <Form.Group className="mb-3">
                <Form.Label>Id</Form.Label>
                <Form.Control type="text" placeholder="Enter Id" disabled/>
            </Form.Group>
            <Form.Group className="mb-3">
                <Form.Label>Name</Form.Label>
                <Form.Control type="text" placeholder="Enter Name"/>
            </Form.Group>
            <Form.Group className="mb-3">
                <Form.Label>Category</Form.Label><br/>
                {/* <Form.Control type="text" placeholder="Select Category"/> */}
                <select style={{ width: '100%', padding: '7px', border: '1px solid #CCC', borderRadius: '7px' }}>
                  <option>Select Category</option>
                  <option value={1}>Category1</option>
                </select>
            </Form.Group>
            <Form.Group className="mb-3">
                <Form.Label>Description</Form.Label>
                <Form.Control as="textarea" placeholder="Enter Description"/>
            </Form.Group>
            <div style={{ width: '100%', textAlign: 'center' }}>
              <Button variant="primary" type="submit" style={{ margin: "10px auto" }}>
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