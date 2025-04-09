import React from 'react'
import { assets } from '../../assets/assets'

const AddDoctor = () => {
  return (
    <form> 
      <p>Add Doctor</p>

      <div>
        <div>
          <label htmlFor="doc-img">
            <img src={assets.upload_area} alt="" />
          </label>
            <input type="file" id='doc-img' hidden/>
            <p>Upload Doctor <br /> pictur</p>
        </div>

        <div>
      {/* --------------Right Side-------------- */}
          <div>
            <div>
              <p>Doctor name</p>
              <input type="text" placeholder='Name' required/>
            </div>
            <div>
              <p>Doctor Email</p>
              <input type="email" placeholder='Email' required/>
            </div>
            <div>
              <p>Doctor Password</p>
              <input type="password" placeholder='Password' required/>
            </div>
            <div>
              <p>Experience</p>
              <select name="" id="">
                <option value="1 Year">1 Year</option>
                <option value="2 Year">2 Years</option>
                <option value="3 Year">3 Years</option>
                <option value="4 Year">4 Years</option>
                <option value="5 Year">5 Years</option>
                <option value="6 Year">6 Years</option>
                <option value="7 Year">7 Years</option>
                <option value="8 Year">8 Years</option>
                <option value="9 Year">9 Years</option>
                <option value="10 Year">10 Year</option>
              </select>
            </div>
            <div>
              <p>Fees</p>
              <input type="number" placeholder='Your Fees' required/>
            </div>

          </div>
          {/* --------------Right Side-------------- */}
          <div>
            <div>
              <p>Speciality</p>
              <select name="" id="">
                <option value="General physician">General physician</option>
                <option value="Gynecologist">Gynecologist</option>
                <option value="Dermatologist">Dermatologist</option>
                <option value="pediatricians">pediatricians</option>
                <option value="Neurologist">Neurologist</option>
                <option value="Gastroenterologist">Gastroenterologist</option>
              </select>
            </div>
          </div>
        </div>
      </div>
    </form>
  )
}

export default AddDoctor