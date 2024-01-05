import React, { Component } from "react";

export default class LifeCycle extends Component{
    constructor(props){
        super(props);
        this.state = {
            name: "Dillon",
            prevName: "",
        }
    }

    componentDidMount() {
        console.log("We are mounted.")
    }

    shouldComponentUpdate(nextProps, nextState){
        console.log(nextState, this.state);
        if(nextState.name !== this.state.name) {
            console.log("Should update")
            return true;
        } else  {
            console.log("Should not update")
            return false;
        }
    }

    getSnapshotBeforeUpdate(prevProps, prevState){
        console.log("Prev name: " + prevState.name)
        return null;
    }
    componentDidUpdate(prevProps, prevState, snapshot){
        console.log("Prev name after update from componentDidUpdate args: " + prevState.name);
    }
    componentWillUnmount(){
        console.log("Component is unmounting :(");
    }

    setTextDillon(e){
        this.setState({
            name: "Dillon",
        });
    }

    onTextChange(e) {
        const target = e.target;
        const value = target.value;
        const classList = target.classList;

        if(classList.contains("name")){
            this.setState({
                name: value,
            });
        }
    }

    render() {
        return(
        <>
            <h1>{this.state.name}</h1>
            <input type="text" className="name" onChange={(e)=>{this.onTextChange(e)}}/>
            <input type="button" className="button" value={"Dillon"} onClick={()=>{this.setTextDillon()}}/>
        </>
        )
    }
}