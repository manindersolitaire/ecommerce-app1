import OrderModel from "../model/Order"

export const getMyOrders = async(req,res)=>{
    try {
        const orders = await OrderModel.find({userId : req.user._id})
    } catch (error) {
        res.status(500).json({message : error.message})
    }
}
export const getOrders = async(req,res)=>{
    try {
        const orders = await OrderModel.find({}).populate('userId', 'id name')
        res.json(orders)
    } catch (error) {
        res.status(500).json({message : error.message})
    }
}

export const updateOrderStatus = async (req,res)=>{
    try {
        const order = await OrderModel.findById(req.params.id)
        if(order){
            order.status = req.body.status || order.status
            const updatedOrder = await order.save()
            res.json(updatedOrder) 
        }
    } catch (error) {
        res.status(500).json({message : error.message}) 
    }
}

