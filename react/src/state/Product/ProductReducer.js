import *  as ActionTypes from '../actionTypes'

const Initial_State = {
    Product: {
        name:"Name",
        price:10,
        desc:"Description",
        rating: 0
    }
}

let ProductReducer = (state = Initial_State, action)=> {
    console.log(action)
    switch(action.type){
        case ActionTypes.AddProductToStore:
            return {...state, Product: action.payload};
        case ActionTypes.GetProductSuccess:
            return {...state, products: action.payload};
        default:
            return state
    }
}

export default ProductReducer;