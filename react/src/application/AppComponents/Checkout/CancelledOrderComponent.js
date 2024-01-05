import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getCancelledFromDb } from "../../../state/CancelledOrder/CancelledOrderAction";
import { addReorderToCart } from "../../../state/Cart/CartAction";



export default function CancelledOrderComponent (props) {
    const user = useSelector((store)=>store.userReducer.User)
    let orders = useSelector((store=>(store.cancelledOrderReducer.cancelledOrders)));

    
    let dispatch = useDispatch();

    useEffect(()=>{
        dispatch(getCancelledFromDb(user.userName))
    }, [])

    return(
        <div className="container">
            <h1>Cancelled Orders</h1>
            {console.log(user,orders)}
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
                                    
                                    <td><button onClick={()=>{dispatch(addReorderToCart(user.userName, order.cart))}}>Reorder</button></td>
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