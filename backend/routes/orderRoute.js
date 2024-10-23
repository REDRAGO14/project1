import express from 'express'
import auhtMiddleware from "../middleware/auth.js"
import { placeOrder, userOrders, verifyOrder,listOrders,updateStatus,removeFood } from '../controllers/orderController.js'
import authMiddleware from '../middleware/auth.js'

const orderRouter = express.Router()

orderRouter.post("/place",auhtMiddleware,placeOrder)
orderRouter.post("/verify",verifyOrder)
orderRouter.post("/userorders",authMiddleware,userOrders)
orderRouter.get("/list",listOrders)
orderRouter.post("/status",updateStatus)
orderRouter.post("/remove",removeFood)


export default orderRouter