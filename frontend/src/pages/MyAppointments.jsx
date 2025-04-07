import React, { useContext } from 'react'
import {AppContext} from '../context/AppContext'

const MyAppointments = () => {

  const {doctors} = useContext(AppContext)

  return (
    <div>
      <p>My Appointments</p>
      <hr />
      <div>
        {doctors.slice(0, 2).map((items, index) => (
          <div key = {index}>
            <div>
              <img src={items.image} alt="" />
            </div>

            <div>
              <p>{items.name}</p>
              <p>{items.speciality}</p>
              <p>Address:</p>
              <p>{items.address.line1}</p>
              <p>{items.address.line2}</p>
              <p><span>Date & Time: 25, July, 2024 | 8:30 PM </span></p>
            </div>
            <div></div>
            <div>
              <button>Pay Online</button>
              <button>Cancel Appointment</button>
            </div>
          </div>
        ))}
      </div>
        
    </div>
  )
}

export default MyAppointments