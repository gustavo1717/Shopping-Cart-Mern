import *  as ActionTypes from '../actionTypes'
import axios from 'axios'
const Initial_State = {userName: "", orders: []}

let CheckoutReducer = (state = Initial_State, action)=> {
    console.log(action)
    switch(action.type){
       
        case ActionTypes.ADD_ORDER_TO_STORE:
            let newOrders = state.orders.filter(item => item._id !== action.payload._id);
            return {...state, orders: [...newOrders, action.payload]};
        case ActionTypes.REMOVE_ORDER:
            console.log(action.payload)
            
                // console.log(state)
                return {...state, orders: state.orders.filter(item => item._id!==action.payload.id)};  
               
            
           
        case ActionTypes.GET_ORDERS_FROM_DB: 
            return {...state, orders: [...state.orders, ...action.payload.orders]}
        case ActionTypes.SAVE_ORDER_TO_DB:
            return {...state, orders: [...state.orders, action.payload]}
        default: 
            return state
    }
}

export default CheckoutReducer;