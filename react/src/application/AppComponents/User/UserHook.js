import React, { useState, useRef, useEffect } from "react";

let UserHook = (props) => {
    // this.state = {userName: "John Doe"};
    // this.setState({}); //callback to update state and create v-dom

    //inits ones tate and returns a callback to update that state
    let [userName, setUserName] = useState("Username");

    let onTextChange = (evt) =>{
        let target = evt.target;
        let value = target.value;
        
        setUserName(value);

        evt.preventDefault();

    }

    let userNameRef = useRef(null);

    useEffect(()=>{
        //assign values from reducer
        userNameRef.current.value = "David"

    })

    let readFormData  = (evt)=>{
        let userName = userNameRef.current.value;
        alert(userName);

        evt.preventDefault();        
    }

    return(
        <>
                <h1>User login page</h1>
                <section className={"componentClass"}>
                    <div  className={"form col-md-8"}>
                        <div  className="col-md-12">
                            
                            <b>
                                Username
                            </b>
                            {/* <input 
                                type="text" 
                                className="form-control col-md-6 username" 
                                value={userName} 
                                placeholder="Username"
                                onChange={onTextChange} 
                                maxLength={40}
                            /> */}
                            <input 
                                type="text" 
                                className="form-control col-md-6 username" 
                                ref={userNameRef} 
                                placeholder="Username" 
                                maxLength={40}
                            />
                        </div>
                        {/* <div  className="col-md-12">
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
                        </div> */}
                        <input type="submit" className="btn btn-primary col-md-2 saveUser" value={"Sign In"} onClick={readFormData}/>
                    
                    </div>
                    
                </section>
            </>
    )
}
export default UserHook;