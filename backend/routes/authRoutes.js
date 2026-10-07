import express from 'express'
import { getUsers, loginUser, registerUser } from '../controller/authController.js'
import protect from '../middleware/authMiddleware.js'
import admin from '../middleware/adminMiddleware.js'

const authRoutes = express.Router()

authRoutes.post('/register', registerUser)
authRoutes.post('/login', loginUser)
authRoutes.post('/users', protect , admin , getUsers)

export default authRoutes

