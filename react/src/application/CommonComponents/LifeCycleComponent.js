import { Component } from "react";


export default class LifeCycleComponent extends Component {
    constructor(props){
        super(props);
    }
    componentDidMount(){

    }

    shouldComponentUpdate(nextProps, nextState){
       
    }

    getSnapshotBeforeUpdate(prevState, prevProps){

    }

    componentDidUpdate(prevState, prevProps){
        console.log("component " + prevState + " updating")
    }

    componentWillUnmount() {
        console.log("component will unmount")
    }

    render() {
        return(
            <></>
        )
    }
}