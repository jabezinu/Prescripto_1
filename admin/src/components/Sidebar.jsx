import React, { useContext } from 'react'
import { AdminContext } from '../context/AdminContex'
import { NavLink } from 'react-router-dom'
import { assets } from '../assets/assets'

const Sidebar = () => {

    const {aToken} = useContext(AdminContext)
  return (
    <div>
        {
            aToken && <ul>

                <NavLink>
                    <img src={assets.home_icon} alt="" />
                    <p>Dashbord</p>
                </NavLink>
                <NavLink>
                    <img src={assets.appointment_icon} alt="" />
                    <p>Appointment</p>
                </NavLink>
                <NavLink>
                    <img src={assets.add_icon} alt="" />
                    <p>Add Doctor</p>
                </NavLink>
                <NavLink>
                    <img src={assets.people_icon} alt="" />
                    <p>Doctors List</p>
                </NavLink>
            </ul>
        }
    </div>
  )
}

export default Sidebar