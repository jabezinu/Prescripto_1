import express from 'express'
import {appointmentCancel, appointmentComplete, appointmentsDoctor, doctorDashboard, doctorList, doctorProfile, loginDoctor, updateDoctorProfile } from '../controllers/doctorController.js'
import authDocotr from '../middlewares/authDoctor.js';
const doctorRouter = express.Router();

doctorRouter.get('/list', doctorList)
doctorRouter.post('/login', loginDoctor)
doctorRouter.get('/appointments', authDocotr,appointmentsDoctor)
doctorRouter.post('/complete-appointment', authDocotr,appointmentComplete)
doctorRouter.post('/cancel-appointment', authDocotr,appointmentCancel)
doctorRouter.get('/dashboard', authDocotr,doctorDashboard)
doctorRouter.get('/profile', authDocotr,doctorProfile)
doctorRouter.post('/update-profile', authDocotr, updateDoctorProfile)

export default doctorRouter