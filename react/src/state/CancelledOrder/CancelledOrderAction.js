import { ADD_CANCELLED_TO_STORE, GET_CANCELLED_ORDERS_FROM_DB } from "../actionTypes";
import axios from "axios";

export const getCancelledFromDb = (username) => {
    return async (dispatch) => {
        let res = await axios.get("http://localhost:9000/cancelled/api/get/"+username)
        console.log("res", res.data)
        for(var order of res.data.cancelledOrders){
            dispatch(addCancelledToStore(order))
        }
    }

}

export const saveCancelledToDb = (username, order) => {
    return async (dispatch) => {
        console.log(username)
        let res = await axios.post("http://localhost:9000/cancelled/api/save", {username: username, order: order})
        console.log("res", res)
    }
}


// ({
//     type: GET_CANCELLED_ORDERS_FROM_DB
// })

export const addCancelledToStore = (order) => ({
    type: ADD_CANCELLED_TO_STORE,
    payload: order
})