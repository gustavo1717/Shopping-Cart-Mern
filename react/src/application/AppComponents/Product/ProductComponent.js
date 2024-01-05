import React, {Component, useEffect, useRef, useState} from "react";
import { AddProductToStore, getProductsFromDb, saveProductToDb } from "../../../state/Product/ProductAction";
import { connect } from "react-redux";

export default function Product(props){
    console.log(props);
    const [name, setName] = useState(props.Product.name)
    const [price, setPrice] = useState(props.Product.price)
    const [desc, setDesc] = useState(props.Product.desc)
    const [rating, setRating] = useState(props.Product.rating)

    function setProduct(){
       
        let product = {
            Product:{
                
                    name,
                    price,
                    desc,
                    rating
                
            }
        }
        console.log(product);
        props.SaveProduct(product.Product);
    }

    useEffect(()=>{
        
        props.GetProducts()
        
    },[])

    return (
        <>
            <div>
                <label>Name</label>
                <input type="text" className="name" value={name} onChange={(e) => setName(e.target.value)}/>
            </div>
            <div>
                <label>Price</label>
                <input type="number" className="price" value={price} onChange={(e) => setPrice(e.target.value)}/>
            </div>
            <div>
                <label>Description</label>
                <input type="text" className="desc" value={desc}  onChange={(e) => setDesc(e.target.value)}/>
            </div>
            <div>
                <label>Rating</label>
                <input type="number" className="rating" min={0} max={5} value={rating} onChange={(e) => setRating(e.target.value)}/>
            </div>
            <input type="submit" className="submit" value={"submit"} onClick={(e) => setProduct(e.target.value)}/>

            <div>
                {props.products && props.products.map((item, index)=>(
                    <button key={index} onClick={()=> {
                        console.log("Saving "  + item)
                        props.AddProductCart(item)
                    }}>
                        {JSON.stringify(item)}
                    </button>
                ))}

            </div>
        </>
    )
    
}
