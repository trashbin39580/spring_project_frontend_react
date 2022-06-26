import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Card from 'react-bootstrap/Card'
import { useNavigate } from 'react-router-dom'
import { Link } from 'react-router-dom'

import './loginPage.css'
import { useContext, useState } from 'react';
import axios from 'axios';
import { API_URL } from '../../constants/api';
import { AuthContext } from '../../Context/AuthContext';

const LoginPage = () => {

  const [data, setData] = useState({
    username: "",
    password: ""
  })

  const [user, setUser] = useContext(AuthContext)

  const navigate = useNavigate()

  const handleClick = async (e) => {
    e.preventDefault()
    const {data: results} = await axios.get(`${API_URL}/login/login?username=${data.username}&password=${data.password}`)
    setUser(results)
    if(results.authorities[0].authority === "ROLE_USER"){
      navigate('/shop')
    }
    else {
      navigate('/admin')
    }
  }

  return (
      <div className='loginWrapper'>
        <Card style={{ width: "40%" }}>
        <Card.Header style={{ textAlign: 'center', fontWeight: '500', fontSize: '23px' }}>Login</Card.Header>
          <Card.Body>
            <Form onSubmit={handleClick}>
              <Form.Group className="mb-3">
                  <Form.Label>Username</Form.Label>
                  <Form.Control type="text" placeholder="Enter username" onChange={(e) => setData({...data, username: e.target.value})}/>
                  <Form.Text className="text-muted">
                      We'll never share your username with anyone else.
                  </Form.Text>
              </Form.Group>
              <Form.Group className="mb-3">
                  <Form.Label>Password</Form.Label>
                  <Form.Control type="password" placeholder="Enter Password" onChange={(e) => setData({...data, password: e.target.value})}/>
              </Form.Group>
              <div style={{ width: '100%', textAlign: 'center' }}>
                  <Link to="/register" style={{ textDecoration: 'none' }}>
                      <p className='text-primary'>Don't have an account? Sign up Here</p>
                  </Link>
                  <Button variant="primary" type="submit" style={{ margin: "10px auto" }} onClick={handleClick}>
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