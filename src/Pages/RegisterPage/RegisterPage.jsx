import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Card from 'react-bootstrap/Card'
import { Link } from 'react-router-dom'
import axios from 'axios'

import './registerPage.css'
import { API_URL } from '../../constants/api';

const RegisterPage = () => {

    const [data, setData] = useState({
        username: "",
        email: "",
        password: "",
        confirmPassword: ""
    })

    const handleRegister = async (e) => {
        e.preventDefault()
        await axios.post(`${API_URL}/login/register`, {
            username: data.username,
            email: data.email,
            password: data.password,
            enabled: 1,
            locked: 1,
            authorities: [],
            commandes: [],
            paniers: []
        })
    }

    return (
        <div className='registerWrapper'>
          <Card style={{ width: "40%" }}>
            <Card.Header style={{ textAlign: 'center', fontWeight: '500', fontSize: '23px' }}>Register</Card.Header>
            <Card.Body>
              <Form>
                <Form.Group className="mb-3">
                    <Form.Label>Username</Form.Label>
                    <Form.Control type="text" placeholder="Enter Username" value={data.username} onChange={(e) => setData({...data, username: e.target.value})}/>
                </Form.Group>
                <Form.Group className="mb-3">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" placeholder="Enter email" value={data.email} onChange={(e) => setData({...data, email: e.target.value})}/>
                    <Form.Text className="text-muted">
                        We'll never share your email with anyone else.
                    </Form.Text>
                </Form.Group>
                {/* <Form.Group className="mb-3">
                    <Form.Label>Gender</Form.Label>
                    <select style={{ width: '100%', padding: '7px', border: '1px solid #CCC', borderRadius: '7px' }}>
                        <option>Select Gender</option>
                        <option value={1}>Male</option>
                        <option value={2}>Female</option>
                    </select>
                </Form.Group> */}
                <Form.Group className="mb-3">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" placeholder="Enter Password" value={data.password} onChange={(e) => setData({...data, password: e.target.value})}/>
                </Form.Group>
                <Form.Group className="mb-3">
                    <Form.Label>Confirm Password</Form.Label>
                    <Form.Control type="password" placeholder="Confirm Password" value={data.confirmPassword} onChange={(e) => setData({...data, confirmPassword: e.target.value})}/>
                </Form.Group>
                <div style={{ width: '100%', textAlign: 'center' }}>
                    <Link to="/" style={{ textDecoration: 'none' }}>
                        <p className='text-primary'>Already have an account? Sign In</p>
                    </Link>
                    <Button variant="primary" type="submit" style={{ margin: "10px auto" }} onClick={handleRegister}>
                        Register
                    </Button>
                </div>
              </Form>
            </Card.Body>
          </Card>
        </div>
    )
}

export default RegisterPage;