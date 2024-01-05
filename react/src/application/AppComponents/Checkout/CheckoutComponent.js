import React from "react";
import { useDispatch, useSelector } from "react-redux";
import CartItemComponent from "../Cart/CartItemComponent";
import { addOrderToStore, saveOrderToDb } from "../../../state/Checkout/CheckoutAction";
import { clearCart } from "../../../state/Cart/CartAction";
import { useNavigate } from "react-router-dom";

export default function CheckoutComponent(props) {
    let cart = useSelector((store) => store.cartReducer.cartItems)
    let user = useSelector((store)=>store.userReducer.User);

    let navigate = useNavigate();

    let sum = cart.map((item)=>{
        if(item.qty){
            return item.price * item.qty;

        } else {
            return item.price;
        }
    })
    .reduce((s, i) => s + i, 0);
    console.log(sum);

    let dispatchItem = useDispatch();

    let MakePayment = async ()=> {
        dispatchItem(saveOrderToDb(user.userName, cart)).then((order)=>{
            console.log("order", order)
            dispatchItem(addOrderToStore(order.data))
            navigate('/orders')
        })
    }

    return (
        <>
            <div className="container">
                <h1>Checkout</h1>
                {cart && cart.length > 0 ?
                    <div>
                        {
                            cart.map((item)=>{
                                return <CartItemComponent user={user.userName} item={item} readOnly={true} key={item._id}/>
                            })
                        }
                        <h2>Total: {sum}</h2>
                        <button onClick={MakePayment}>Confirm</button>
                    </div>
                    :
                    <>
                    Nothing in cart
                    </>
                }
            </div>
        </>
    )


}