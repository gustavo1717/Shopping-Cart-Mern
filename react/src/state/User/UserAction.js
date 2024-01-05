//defines  all actions  raised for user state like -addUserToStore, signinupUser, etc

import * as ActionTypes from "../actionTypes";
import axios from "axios";


export const AddUserToStore = (newUser)=>{
    return {
        type: ActionTypes.AddUserToStore,
        payload: newUser
    }
} 

export const saveUserToDb =  (user)=>{
    return (dispatch) => {
        console.log("called by dispatch");
        axios.post("http://localhost:9000/user/api/signinup",
            user
        )
        .then((savedUser)=>{
            let signedUser = savedUser.data
            console.log(signedUser);

            dispatch(AddUserToStore(signedUser))

        })
        .catch((err)=>{
            console.log(err);
        });
    }
}