import React, { useState, Fragment } from "react";
import { useDispatch } from "react-redux";
import { removeItem, updateItem } from "../../../state/Cart/CartAction";

let CartItemComponent = (props)=>{
    let item = props.item;

    let [Quantity, setQuantity] = useState(props.item.qty ? props.item.qty : 1)

    let dispatchItem = useDispatch();

    return(
        <tr>
            <td>{item.name}</td>
            <td>{item.price}</td>
            <td>{item.desc}</td>
            <td>{item.rating}</td>
            <td>
            {
                props.readOnly ? Quantity : 
                <input type="text" value={Quantity} onChange={(evt)=>{setQuantity(evt.target.value)}}></input>    
            }</td>
            <td>{Quantity*item.price}</td>
            {
                props.readOnly ?  "" : //bydefault false as boolean default is false
                    <Fragment>
                        <td><button onClick={()=>dispatchItem(removeItem(item._id))}>Remove</button> </td>
                        <td><button onClick={()=>dispatchItem(updateItem(props.user, item._id, Quantity))}>Edit</button></td>
                    </Fragment>
            }
        </tr>
    )
}

export default CartItemComponent;