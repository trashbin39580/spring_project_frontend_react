import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Card from 'react-bootstrap/Card'
import { Link } from 'react-router-dom'

import './loginPage.css'

const LoginPage = () => {
    return (
        <div className='loginWrapper'>
          <Card style={{ width: "40%" }}>
            <Card.Body>
              <Form>
                <Form.Group className="mb-3">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" placeholder="Enter email" />
                    <Form.Text className="text-muted">
                        We'll never share your email with anyone else.
                    </Form.Text>
                </Form.Group>
                <Form.Group className="mb-3">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" placeholder="Enter Description"/>
                </Form.Group>
                <div style={{ width: '100%', textAlign: 'center' }}>
                    <Link to="/register" style={{ textDecoration: 'none' }}>
                        <p className='text-primary'>Don't have an account? Sign up Here</p>
                    </Link>
                    <Button variant="primary" type="submit" style={{ margin: "10px auto" }}>
                        Log In
                    </Button>
                </div>
              </Form>
            </Card.Body>
          </Card>
        </div>
    )
}

export default LoginPage;