import {connect} from 'react-redux'
import { AddUserToStore, saveUserToDb } from "../../../state/User/UserAction";
import UserComponent from "./UserComponent";

//subscriber
let mapStateToProps=(store) => {
    return {
        User: store.userReducer.User,
    }
}
//publisher
let mapDispatchToProps=(dispatch) => {
    return {
        AddUser: (newUser)=>{
            dispatch(AddUserToStore(newUser));
        },
        SignIn : (newUser)=>{
            dispatch(saveUserToDb(newUser));
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(UserComponent);