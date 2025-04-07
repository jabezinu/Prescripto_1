import React, { useState } from 'react'
import { assets } from '../assets/assets'

const MyProfile = () => {
  const [userData, setUserData] = useState({
    name: 'Jabez Shiferaw',
    image: assets.profile_pic,
    email: 'jabezshiferaw31@gmail.com',
    phone: '0987654321',
    address: {
      Line1: '57th Cross',
      Line2: 'Circle, church round'
    },
    gender: 'mail',
    dob: '2004-7-31'
  })

  const [isEdit, setIsEdit] = useState(false)

  return (
    <div>
      <img src={userData.image} alt="" />

      {
        isEdit 
        ? <input type='text' value={userData.name} onChange={e => setUserData(prev => ({ ...prev, name: e.target.value }))} />
        : <p>{userData.name}</p>
      }

      <hr />
      <div>
        <p>CONTACT INFORMATION</p>
        <div>
          <p>Email:</p>
          <p>{userData.email}</p>
          <p>Phone:</p>
          {
            isEdit 
            ? <input type='text' value={userData.phone} onChange={e => setUserData(prev => ({ ...prev, phone: e.target.value }))} />
            : <p>{userData.phone}</p>
          }
          <p>Address:</p>
          {
            isEdit
            ? <p>
              <input type="text" />
              <br />
              <input type="text" /> 
            </p> 
            : <p>
              
            </p>
          }
        </div>
      </div>
    </div>
  )
}

export default MyProfile