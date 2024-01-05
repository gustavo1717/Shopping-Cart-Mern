import React, { useEffect } from "react";
import { getCartFromDB } from "../../../state/Cart/CartAction";
import { useDispatch, useSelector } from "react-redux";
import { getOrdersFromDB, removeOrder } from "../../../state/Checkout/CheckoutAction";


export default function OrderComponent (props) {
    const user = useSelector((store)=>store.userReducer.User)
    const orders = useSelector((store)=>store.checkoutReducer.orders)
    const dispatch = useDispatch();

    var d = new Date();
    d.setDate(d.getDate()-2);

    useEffect(()=>{
        
            console.log("Getting orders from db")
            
            dispatch(getOrdersFromDB(user.userName))
    
        
    },[user.userName])

    console.log(orders)

    return (
        <div className="container">
            <h1>Recent Orders</h1>
            <table className="table">
                {orders && orders.length > 0 ?
                    <>
                        <tr><th>ID</th><th>Price</th><th>Date</th></tr>
                        {
                            orders.map((order)=>{
                                return <>
                                    <tr><td>{order._id}</td><td><ul>{order.cart.cartItems.map((item)=>{
                                        return <>
                                           <li>{item.price}</li>
                                        </>
                                    })}</ul></td><td>{order.orderDate}</td>
                                    {order.orderDate > d ?
                                        <>
                                            <td> <button onClick={()=>dispatch(removeOrder(user.userName, order._id)).then((t)=>console.log(t))}>Cancel</button> </td>
                                        </>
                                        :
                                        <>
                                        <td> <b>Delivered</b> </td>
                                        </>
                                    }
                                    {/* <td><button onClick={()=>dispatch(updateItem(props.user, item._id, Quantity))}>Edit</button></td> */}
                                    </tr>
                                  
                                </>
                            })
                        }
                    </>
                    :
                    <>
                    </>
                }
            </table>
        </div>
    )
}
