import *  as ActionTypes from '../actionTypes'

const Initial_State = {userName: "", cartItems: []}

let CartReducer = (state = Initial_State, action)=> {
    switch(action.type){
        case ActionTypes.ADD_ITEM:
            console.log(action.payload)
            let newCartItems = state.cartItems.filter(item => item._id !== action.payload.item._id);
            
            return {...state, cartItems: [...newCartItems, action.payload.item]};//creating a new state with new item
        case ActionTypes.REMOVE_ITEM:
            return {...state, cartItems: state.cartItems.filter(item => item._id!==action.payload.id)};
        case ActionTypes.UPDATE_ITEM:
            const { userName, id, qty } = action.payload;
            const updatedCartItems = state.cartItems.map(item => {
                if (item._id === id) {
                    return { ...item, qty: qty };
                }
                return item;
            });
            return { ...state, cartItems: updatedCartItems };
        case ActionTypes.ADD_CART_TO_STORE:
            console.log(state, action)
            let cI = state.cartItems
            if(action.payload.cartItems){
                for (var x of action.payload.cartItems) {
                    cI = cI.filter(item => item._id !== x._id)

                }
                return {...state, cartItems: [...cI, ...action.payload.cartItems]};
            } else {
                return {...state, cartItems: [...cI]};
            }
            
        case ActionTypes.SAVE_CART_TO_DB:
            console.log("payload", action.payload)
            return [...state, action.payload];
        case ActionTypes.GET_CART_FROM_DB:
            cI = state.cartItems
            console.log(state, action)
            if(action.payload.cartItems){

                for (var x of action.payload.cartItems) {
                    cI = cI.filter(item => item._id !== x._id)
                    console.log(cI)
                    
                }
                return {...state, cartItems: [...cI, ...action.payload.cartItems]};
            } else {
                return {...state, cartItems: [...action.payload.cartItems]}
            }
        case ActionTypes.ADD_REORDER_TO_CART:
            console.log(state.cartItems, action.payload)
            return {...state, cartItems: [...state.cartItems, action.payload]}
        case 'CLEAR_CART':
            return {
                userName: state.userName, cartItems: []
            }
            
        default:
            return state
    }
}

export default CartReducer;