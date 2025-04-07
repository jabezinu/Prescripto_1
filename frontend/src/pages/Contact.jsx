import React from 'react'
import { assets } from '../assets/assets'

const Contact = () => {
  return (
    <div className='text-center text-2xl pt-10 text-gray-500'>
        <p>CONTACT <span className='tezxt-gray-700 font-semibold'>US</span></p>
        <div>
          <img src={assets.contact_image} alt="" />
          <div>
            <p>OUR OFFICE</p> 
            <p>54709 Wilms Station <br />Suite 350, Washington, USA</p>
            <p>Tel: (412) - 1234- 234</p>
            <p>Email- barberito@gmail.com</p>
            <p>Careers at BARBARITO</p>
            <p>Learn more about our teams and job openings.</p>
            <button>Explore Jobs</button>
          </div>
        </div>

    </div>
  )
}

export default Contact