import {combineReducers,  applyMiddleware }  from 'redux';
import {configureStore} from '@reduxjs/toolkit';

import thunk from 'redux-thunk';

import userReducer from './User/UserReducer'
import productReducer from './Product/ProductReducer';
import cartReducer from './Cart/CartReducer'
import checkoutReducer from './Checkout/CheckoutReducer'
import navigationReducer from './Navigation/NavigationReducer'
import cancelledOrderReducer from './CancelledOrder/CancelledOrderReducer'

const rootReducer = combineReducers({
    userReducer,
    productReducer,
    cartReducer,
    checkoutReducer,
    navigationReducer,
    cancelledOrderReducer
})

export default configureStore(
    {reducer: rootReducer},
    {},//initial state
    applyMiddleware(thunk)
)