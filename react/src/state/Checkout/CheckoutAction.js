import { useNavigate } from 'react-router-dom';
import { clearCart } from '../Cart/CartAction';
import *  as ActionTypes from '../actionTypes'
import axios from "axios";
import { navigateTo } from '../Navigation/NavigationAction';
import { saveCancelledToDb } from '../CancelledOrder/CancelledOrderAction';



export const addOrderToStore = (order) => {
    return {
        type: ActionTypes.ADD_ORDER_TO_STORE,
        payload: order
    }
}
export const getOrdersFromDB = (username) => {
    return(dispatch)=>{
        return {type: ActionTypes.GET_ORDERS_FROM_DB, 
            payload: axios.get("http://localhost:9000/order/api/get/"+username)
        .then((orders) => {
            console.log(orders)
            for (var order of orders.data.orders ){
                dispatch(addOrderToStore(order));
            }
        })
    }
    }
}
export const removeOrder = (username, id) => {
    return async (dispatch) => {

        try {
           const response = await axios.post("http://localhost:9000/order/api/remove/", {userName: username, id: id})
           dispatch({type: ActionTypes.REMOVE_ORDER,
                payload: { userName: username, id: id }//id: 4
            })
            dispatch({type: ActionTypes.ADD_CANCELLED_TO_STORE, payload: response.data})
            dispatch(saveCancelledToDb(username, response.data))
            dispatch({type: ActionTypes.SAVE_CANCELLED_TO_DB, payload: response.data})
            return response.data
        } catch {

        }
    }
};

export const saveOrderToDb = (username, order) => {
    return(dispatch) => {
        // dispatch({type: ActionTypes.SAVE_ORDER_TO_DB, payload: order})
        return axios.post("http://localhost:9000/order/api/save/", {username, order})
    }
}