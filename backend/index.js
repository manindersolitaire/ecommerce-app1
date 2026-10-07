import express from 'express'
import cors from 'cors'
import dotenv from 'dotenv'
import { connectDB } from './config/db.js'
import authRoutes from './routes/authRoutes.js'
import productRoutes from './routes/productRoutes.js'
dotenv.config()
connectDB()
const app = express()
app.use(cors())
app.use(express.json())

app.get('/', (req,res)=>{
    res.send("ShopNest Backend is working properly..")
})
app.use('/api/auth', authRoutes)
app.use('/api/product', productRoutes)

const PORT = process.env.PORT || 5000

app.listen(PORT , ()=>{
    console.log(`Server running on port ${PORT}`)
})

