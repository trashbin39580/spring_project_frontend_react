import React from 'react'
import Card from 'react-bootstrap/Card'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'

import './editCategory.css'

const EditCategory = () => {
  return (
    <div className='editCategoryWrapper'>
      <Card style={{ width: "40%" }}>
        <Card.Header style={{ textAlign: 'center', fontWeight: '500', fontSize: '23px' }}>Edit Category</Card.Header>
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

export default EditCategory