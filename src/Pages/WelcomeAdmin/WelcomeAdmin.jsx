import React from 'react'
import NavigationBar from '../../Components/NavigationBar/NavigationBar'

import './welcomeAdmin.css'

const WelcomeAdmin = () => {
  return (
    <>
        <NavigationBar />
        <div className='welcomeWrapper'>
            <h3>Welcome Admin</h3>
        </div>
    </>
  )
}

export default WelcomeAdmin