import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMars, faVenus, faLock, faLockOpen, faTrashCan } from '@fortawesome/free-solid-svg-icons'
import React, { useState } from 'react'
import Table from 'react-bootstrap/Table'
import { DANGER_COLOR, FEMALE_COLOR, LOCK_COLOR, MALE_COLOR, SUCCESS_COLOR } from '../../constants/theme'

import './customTable.css'

const CustomTable = () => {

  
  const [users, setUsers] = useState([
    {
      username: "aymane_ouhadi",
      email: "aymaneouhadi17@gmail.com",
      gender: "male",
      locked: true
    },
    {
      username: "fatima_saghraoui",
      email: "fatimasaghraoui12@gmail.com",
      gender: "female",
      locked: false
    },
    {
      username: "ahmed_ouhadi",
      email: "ahmedouhadi15@gmail.com",
      gender: "male",
      locked: false
    },
  ])

  const Row = ({user, index}) => (
    <tr style={{ textAlign: 'center' }}>
      <td>{index + 1}</td>
      <td>{user.username}</td>
      <td>{user.email}</td>
      <td>
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
      </td>
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

  const handleDelete = (username) => {
    setUsers((oldUsers) => oldUsers.filter((user) => user.username !== username))
  }

  return (
    <Table striped bordered>
      <thead>
        <tr style={{ textAlign: 'center' }}>
          <th>#</th>
          <th>Username</th>
          <th>Email</th>
          <th>Gender</th>
          <th>State</th>
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
  )
}

export default CustomTable