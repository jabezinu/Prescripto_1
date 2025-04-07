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

  const [isEdit, setIsEdit] = useState(false)

  return (
    <div className='max-w-lg flex flex-col gap-2 text-2'>
      <img className='w-36 rounded' src={userData.image} alt="" />

      {
        isEdit 
        ? <input className='bg-gray-50 text-3xl font-midum max-w-60 mt-4' type='text' value={userData.name} onChange={e => setUserData(prev => ({ ...prev, name: e.target.value }))} />
        : <p className='font-midum text-3xl text-neutral-800 mt-4'>{userData.name}</p>
      }

      <hr className='bg-zinc-400 h-[-1px] border-none' />
      <div>
        <p className='text-neutral-500 underline mt-3'>CONTACT INFORMATION</p>
        <div className='grid grid-cols-[1fr_3fr] gap-y-2.5 mt-3 text-neutral-700'>
          <p className='font-medium'>Email:</p>
          <p className='text-blue-500'>{userData.email}</p>
          <p className='font-medium'>Phone:</p>
          {
            isEdit 
            ? <input className='bg-gray-100 mx-w-52' type='text' value={userData.phone} onChange={e => setUserData(prev => ({ ...prev, phone: e.target.value }))} />
            : <p className='text-blue-400'>{userData.phone}</p>
          }
          <p className='font-mideum'>Address:</p>
          {
            isEdit
            ? <p>
              <input className='bg-gray-50' onChange={(e) => setUserData(prev => ({...prev, address: {...prev.address, Line1: e.target.value}}))} value={userData.address.Line1} type="text" />
              <br />
              <input className='bg-gray-50' onChange={(e) => setUserData(prev => ({...prev, address: {...prev.address, Line2: e.target.value}}))} value={userData.address.Line2} type="text" /> 
            </p> 
            : <p className='text-gray-500'>
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

          <p>Birthday:</p>
          {
            isEdit
            ? <input type="date" onChange={(e) => setUserData(prev => ({...prev, dob: e.target.value}))} value={userData.dob} />
            : <p>{userData.dob}</p>
          }
        </div>
      </div>

      <div>
        {
          isEdit
          ? <button onClick={() => setIsEdit(false)}>Save information</button>
          : <button  onClick={() => setIsEdit(true)}>Edit</button>
          
        }
      </div>
    </div>
  )
}

export default MyProfile