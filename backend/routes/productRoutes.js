import express from 'express'
import protect from '../middleware/authMiddleware.js'
import admin from '../middleware/adminMiddleware.js'
import { createProduct, deleteProduct, getProductById, getProducts, updateProduct } from '../controller/productController.js'
import multer from 'multer'
const upload = multer({dest : 'uploads/'})

const productRoutes = express.Router()

productRoutes.route('/').get(getProducts).post(protect , admin , upload.single('image') , createProduct)
productRoutes.route('/:id').get(getProductById).put(protect, admin, upload.single('image') , updateProduct).delete(protect, admin , deleteProduct)

export default productRoutes

