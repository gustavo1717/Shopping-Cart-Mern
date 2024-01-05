import React from "react"
import { useParams } from "react-router-dom";

export default function CityComponent() {
    let params = useParams();    
    console.log(params);
    let id = params["id"] ? params["id"] : "No zipcode provided.";
    // console.log("zip");
    return(
        <>
            <h1>Huntington</h1>
            <input type="button" onClick={()=>{
                console.log(id);
            }}/>
            <h1>{id}</h1>
        </>

    )
}