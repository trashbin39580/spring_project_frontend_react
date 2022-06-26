import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMars, faVenus, faLock, faLockOpen, faTrashCan } from '@fortawesome/free-solid-svg-icons'
import React, { useEffect, useState } from 'react'
import axios from 'axios'
import Table from 'react-bootstrap/Table'
import { DANGER_COLOR, FEMALE_COLOR, LOCK_COLOR, MALE_COLOR, SUCCESS_COLOR } from '../../constants/theme'

import './customTable.css'
import { API_URL } from '../../constants/api'

const CustomTable = () => {

  
  const [users, setUsers] = useState([])

  useEffect(() => {
    const fetchUsers = async () => { 
      const { data } = await axios.get(`${API_URL}/users/list`)   
      setUsers(data)
    }
    fetchUsers()
  }, [])

  const Row = ({user, index}) => (
    <tr style={{ textAlign: 'center' }}>
      <td>{index + 1}</td>
      <td>{user.username}</td>
      <td>{user.email}</td>
      {/* <td>
        <FontAwesomeIcon 
          icon={user.gender === "male" ? faMars : faVenus} 
          color={user.gender === "male" ? MALE_COLOR : FEMALE_COLOR} 
          style={{ fontSize: 20 }}
        />
      </td>
      <td>
        <FontAwesomeIcon 
          icon={user.locked ? faLock : faLockOpen} 
          color={user.locked ? LOCK_COLOR : SUCCESS_COLOR} 
          style={{ fontSize: 20, cursor: 'pointer' }}
          onClick={() => handleLockState(user.username)}
        />
      </td> */}
      <td>
        <FontAwesomeIcon 
          icon={faTrashCan} 
          color={DANGER_COLOR} 
          style={{ fontSize: 20, cursor: 'pointer' }}
          onClick={() => handleDelete(user.username)}
        />
      </td>
    </tr>
  )



  const handleLockState = (username) => {
    setUsers(users.map(user => 
      user.username === username ? {...user, locked: !user.locked} : user
    ))
  }

  const handleDelete = async (username) => {
    const {data} = await axios.delete(`${API_URL}/users/deleteUser/${username}`)
    setUsers((oldUsers) => oldUsers.filter((user) => user.username !== username))
  }

  return (
    <div style={{ padding: "50px 50px" }}>
      <Table striped bordered>
        <thead>
          <tr style={{ textAlign: 'center' }}>
            <th>#</th>
            <th>Username</th>
            <th>Email</th>
            {/* <th>Gender</th>
            <th>State</th> */}
            <th>Delete</th>
          </tr>
        </thead>
        <tbody>
          {
            users.map((user, index) => (
              <Row user={user} index={index} />
            ))
          }
        </tbody>
      </Table>
    </div>
  )
}

export default CustomTable