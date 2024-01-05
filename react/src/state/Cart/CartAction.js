import * as ActionTypes from "../actionTypes";
import axios from "axios";
import store from '../store'
import { useSelector } from "react-redux";

export const addItemToCart = (item)=>({
    type: ActionTypes.ADD_ITEM,
    payload: {item} //{item:item}
})
export const removeItem = (id) => ({
    type: ActionTypes.REMOVE_ITEM,
    payload: { id }//id: 4
});

export const addReorderToCart = (userName, order) => {
    return (dispatch)=>
    {
        let x = store.getState().cartReducer.cartItems
        for(var o of order.cartItems){
            console.log(x)
            console.log(o)
            x = x.filter(item=>{
                console.log(item)   
                return (item._id !== o._id)
            });
        }
        console.log("x",x)
        

        console.log()
        dispatch(SaveCartToDB(userName, [...x, ...order.cartItems]))
        return {
            type: ActionTypes.ADD_REORDER_TO_CART,
            payload: order
        }
    }
}

export const updateItem = (username, id, qty) => ({
    type: ActionTypes.UPDATE_ITEM,
    payload: {
        id, //id : 5
        qty: parseInt(qty) // update the quantity
    }
});
export const addCartToStore = (username, cart)=>({
    type: ActionTypes.ADD_CART_TO_STORE,
    payload: {userName: username, cartItems: cart}
})

export const clearCart = () => {
    return {
      type: 'CLEAR_CART',
    };
  };

export const SaveCartToDB = (userId, cartItems) => {
    return (dispatch) => {
        console.log(cartItems);
        axios.post("http://localhost:9000/cart/api/save",
            {userId, cartItems}
        )
        .then((savedCart)=>{

            // dispatch(addCartToStore(savedCart.data))

        })
        .catch((err)=>{
            console.log(err);
        });
    }
}


export const getCartFromDB = (userName) => {   
    return async (dispatch) => {
        try {
            console.log("GETTING CART FROM DB")
            const response = await axios.get("http://localhost:9000/cart/api/get/" + userName)
            console.log("res", response)
            const data = response.data;
            dispatch(addCartToStore(data.userName, data.cartItems));
            return data;
        } catch(err) {
            console.log(err)
            throw err;
        }
    }
    
}