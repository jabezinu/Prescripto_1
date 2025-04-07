import React, { useContext } from 'react'
import {AppContext} from '../context/AppContext'

const MyAppointments = () => {

  const {doctors} = useContext(AppContext)

  return (
    <div>
      <p>My Appointments</p>
      <div>
        {doctors.slice(0, 2).map((items, index) => (
          <div key = {index}>

          </div>
        ))}
      </div>
        
    </div>
  )
}

export default MyAppointments