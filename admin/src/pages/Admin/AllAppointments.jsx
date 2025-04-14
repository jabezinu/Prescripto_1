import React from 'react'
import axios from 'axios'
import { useContext } from 'react';
import { AdminContext } from '../../context/AdminContex';
import { useEffect } from 'react';

const AllAppointments = () => {

  const {aToken, appointments, getAllAppointments} = useContext(AdminContext)

  useEffect(() => {
    if(aToken){
      getAllAppointments()
    }
  }, [aToken])

  return (
    <div className='w-full max-w-6xl m-5'>
        <p className='mb-3 text-lg font-medium'>All Appointments</p>
        <div className='bg-white border rounded text-sm max-h-[80vh] min-h-[60vh] overflow-y-scroll'>
          <div className='hidden sm:grid grid-cls-[0.5fr_3fr_1fr_3fr_3fr_1fr_1fr] grid-flow-col py-3 px-6 border-b'>
            <p>#</p>
            <p>Patient</p>
            <p>Age</p>
            <p>Date & Time</p>
            <p>Doctor</p>
            <p>Fee</p>
            <p>Actions</p>
          </div>
        </div>
    </div>
  )
}

export default AllAppointments