import axios from "axios"
import *  as ActionTypes from "../actionTypes"

const Initial_State = {userName: "", cancelledOrders: []}

let CancelledOrderReducer = (state = Initial_State, action) => {
    console.log(action)
    switch(action.type) {
        case ActionTypes.ADD_CANCELLED_TO_STORE:
            let newOrders = state.cancelledOrders.filter(item => item._id !== action.payload._id);
            return {...state, cancelledOrders: [...newOrders, action.payload]}
        case ActionTypes.GET_CANCELLED_ORDERS_FROM_DB:
            
            return {...state, cancelledOrders: []}
        case ActionTypes.SAVE_CANCELLED_TO_DB:
            return state
        default:
            return state
    }
}

export default CancelledOrderReducer;