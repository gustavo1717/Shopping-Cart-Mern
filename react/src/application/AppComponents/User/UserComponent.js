import React, {Component} from "react";

// import {connect} from "react-redux"
// import { AddUserToStore } from "../../../state/User/UserAction";

export default class User extends Component  {
    constructor(props) {
        super(props);
        this.state = {
            userName: props.User.userName,
            password:  props.User.password,
            street: props.User.street,
            mobile: props.User.mobile
        }
    }

    onTextChange = (evt)=>{
        let target = evt.target;
        let classList = target.classList;
        let  value = target.value;

        if(classList.contains("username")){
            this.setState({
                userName:value
            })
        } else if(classList.contains("pass")){
            this.setState({
                password:value
            })
        } else if (classList.contains("street")){
            this.setState({
                street: value
            })
        } else {
            this.setState({
                mobile: value
            })
        }
    }

    loginUser = (evt) =>{
        // this.props.AddUser(this.state);
        console.log("asdasd")
        console.log(this.props)
        this.props.SignIn(this.state);
        evt.preventDefault();
    }

    render(){
        return(
            <>
                <h1>User login page</h1>
                <section className={"componentClass"}>
                    <div  className={"form col-md-8"}>
                        <div  className="col-md-12">
                            
                            <b>
                                Username
                            </b>
                            <input 
                                type="text" 
                                className="form-control col-md-6 username" 
                                value={this.state.userName} 
                                placeholder="Username"
                                onChange={this.onTextChange} 
                                maxLength={40}
                            />
                        </div>
                        <div  className="col-md-12">
                            <b>
                                Password
                            </b>
                            <input 
                                type="password" 
                                className="form-control col-md-6 pass" 
                                value={this.state.password} 
                                placeholder="Password"
                                onChange={this.onTextChange} 
                                maxLength={40}
                            />
                        </div>
                        <div  className="col-md-12">
                            <b>
                                Street
                            </b>
                            <input 
                                type="text" 
                                className="form-control col-md-6 street" 
                                value={this.state.street} 
                                placeholder="Street"
                                onChange={this.onTextChange} 
                                maxLength={40}
                            />
                        </div>
                        <div  className="col-md-12">
                            <b>
                                Mobile
                            </b>
                            <input 
                                type="number" 
                                className={"form-control col-md-6 mobile"} 
                                value={this.state.mobile} 
                                placeholder="Street"
                                onChange={this.onTextChange} 
                                maxLength={11}
                            />
                        </div>
                        <input type="button" className="btn btn-primary col-md-2 saveUser" value={"Sign In/Up"} onClick={this.loginUser}/>
                    
                    </div>
                    
                </section>
            </>
        );
    }
}
User.defaultProps = {
    User: {
        userName: "Username",
        password: "Password",
        street: "Address",
        mobile: "0",
    }
}
// //subscriber
// let mapStateToProps=(store) => {
//     return {
//         User: store.userReducer.User,
//     }
// }
// //publisher
// let mapDispatchToProps=(dispatch) => {
//     return {
//         AddUser: (newUser)=>{
//             dispatch(AddUserToStore(newUser));
//         },
//     }
// }

// export default connect(mapStateToProps, mapDispatchToProps)(User)