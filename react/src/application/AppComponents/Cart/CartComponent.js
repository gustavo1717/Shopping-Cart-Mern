
import React, { Fragment, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import CartItemComponent from "./CartItemComponent";
import { SaveCartToDB, getCartFromDB } from "../../../state/Cart/CartAction";
import { useNavigate } from "react-router-dom";

export default function Cart(props) {
    let cartItems = useSelector((store)=>store.cartReducer.cartItems);
    let user = useSelector((store)=>store.userReducer.User);
    let dispatch = useDispatch();

    useEffect(()=>{
        console.log("Getting cart from db")
        dispatch(getCartFromDB(user.userName))
        
    },[])

    let navigate = useNavigate();

    const goCheckout = ()=>{
        dispatch(SaveCartToDB(user.userName, cartItems))
        navigate("/checkout")
    }

    return(
        <>
            <div className="container">
                <h1>Cart</h1>
                <button onClick={()=>{dispatch(SaveCartToDB(user.userName, cartItems))}}>Save Cart</button>
                {
                    

                    (cartItems && cartItems.length >= 1)  ? 
                        <>
                            <table>
                                <thead>
                                <tr>
                                    <th>Name</th>
                                    <th>Price</th>
                                    <th>Description</th>
                                    <th>Rating</th>
                                    <th>Quantity</th>
                                    <th>Total</th>
                                    {
                                        props.readOnly ?  "" : //bydefault false as boolean default is false
                                            <Fragment>
                                                <th>Remove</th>
                                                <th>Edit</th>
                                            </Fragment>
                                    }
                                </tr>
                                </thead>
                                <tbody>
                                    {
                                        cartItems.map(item=>{
                                            //return item.name
                                            return <CartItemComponent user={user.userName} item={item} readOnly={props.readOnly} key={item._id}/>
                                        })
                                    } 
                                    <td><button onClick={goCheckout}>Checkout</button></td>
                                </tbody>
                            </table>
                            
                        </>
                    : 
                    <h2>No products in cart</h2>
                }
            </div>
        </>
    )
}