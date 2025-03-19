import React from 'react'
import '../../styles/FormInputStyles.css'

function UsernameInput() {
  return (
    <React.Fragment>
    <div className='input-container'>
      <label htmlFor='username'>Username</label>
      <input id='username' type='text' name='username' placeholder='input your username' required></input>
    </div>
    </React.Fragment>
  )
}

export default UsernameInput
