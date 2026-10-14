import express from 'express'
import protect from '../middleware/authMiddleware.js'
import admin from '../middleware/adminMiddleware.js'



const orderRoutes = express.Router()

orderRoutes.route('/').post(protect, addOrderItems).get(protect, admin , getOrders)
orderRoutes.route('/myorders').get(protect , getMyOrders)
orderRoutes.route('/:id/status').put(protect , admin , updateOrderStatus)

export default orderRoutes

