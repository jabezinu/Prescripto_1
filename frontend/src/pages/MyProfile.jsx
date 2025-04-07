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
    gender: 'Male',
    dob: '2004-7-31'
  })

  const [isEdit, setIsEdit] = useState(true)

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
              <input onChange={(e) => setUserData(prev => ({...prev, address: {...prev.address, Line1: e.target.value}}))} value={userData.address.Line1} type="text" />
              <br />
              <input onChange={(e) => setUserData(prev => ({...prev, address: {...prev.address, Line2: e.target.value}}))} value={userData.address.Line2} type="text" /> 
            </p> 
            : <p>
              {userData.address.Line1}
              <br />
              {userData.address.Line2}
            </p>
          }
        </div>
      </div>
      <div>
        <p>BASIC INFORMATION</p>
        <div>
          <p>Gender:</p>
          {
            isEdit 
            ? <select onChange={(e) => setUserData(prev => ({...prev, gender: e.target.value}))} value={userData.gender}>
              <option value="Male">Male</option>
              <option value="Female">Female</option>
            </select>
            : <p>{userData.gender}</p>
          }
          
        </div>
      </div>
    </div>
  )
}

export default MyProfile