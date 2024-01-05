//Defines the initial state for user and also returns reducer with logic to create a state.
import * as ActionTypes from "../actionTypes";

const Initial_State = {
    User : {
        userName: "John",
        password :"password",
        street:"new york",
        mobile: 95
    }
}

let UserReducer = (state = Initial_State, action)=> {
    switch(action.type){
        case ActionTypes.AddUserToStore:
            return {...state, User: action.payload};
        default:
            return state
    }
}

export default UserReducer;