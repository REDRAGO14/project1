import React from 'react'
import './Order.css'
import { useState } from 'react'
import axios from 'axios'
import {toast} from 'react-toastify'
import { useEffect } from 'react'
import {assets} from '../../assets/assets'


const Order = ({url}) => {

  const [orders,setOrders] = useState([]); 

  const fetchAllOrders = async()=>{
    const response = await axios.get(url+'/api/order/list');
    if (response.data.success) {
      setOrders(response.data.data);
    }
    else{
      toast.error("Error")
    }
  }

  const statusHandler = async (event,orderId) => {
    const response = await axios.post(url+"/api/order/status",{
      orderId,
      status:event.target.value
    })
    if (response.data.success) {
      await fetchAllOrders();
    }
  };
  const removeFood = async (foodId) => {
    const response = await axios.post(`${url}/api/Order/remove`, { id:foodId });
    await fetchAllOrders();
    if (response.data.success) {
      toast.success(response.data.message);
    } else {
      toast.error("error");
    }
  };
  useEffect(() => {
    fetchAllOrders();
  }, []);

  return (
    <div className='order add'>
      <h3>Order Page</h3>
      <div className="order-list">
        {orders.map((order,index)=>(
          <div key={index} className="order-item">
            <img src={assets.parcel_icon} alt="" />
            <div>
              <p className='order-item-order'>
                {order.items.map((item,index)=>{
                  if (index === order.items.length-1) {
                    return item.name+ " X " + item.quantity
                  }
                  else{
                    return item.name + " x " + item.quantity + ","
                  }
                })}
              </p>
              <p className="order-item-name">
                {order.address.firstName+ " "+order.address.lastName}
              </p>
              <div className="order-item-address">
                <p>{order.address.street+","}</p>
                <p>{order.address.city+", "+order.address.state+ ", " +order.address.country+", "+order.address.zipCode}</p>
              </div>
              <p>Payment-status:{order.payment ? 'True' : 'False'}</p>
              <p className='order-item-phone'>{order.address.phone}</p>
            </div>
            <p>Items: {order.items.length}</p>
            <p>{order.amount} Birr</p>
            <select onChange={(event)=>statusHandler(event,order._id)} value={order.status}>
              <option value="Fodd Processing"> Processing</option>
              <option value="Out for Delivery">Out for Delivery</option>
              <option value="Delivered">Delivered</option>
            </select>
            <p onClick={() => removeFood(order._id)} className="curser">
                {" "}
                X{" "}
              </p>
          </div>
        ))}

      </div>
    </div>
  )
}

export default Order
