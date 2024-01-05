import * as ActionTypes from '../actionTypes'
import axios from 'axios'


export const AddProductToStore = (newProduct)=>{
    return {
        type: ActionTypes.AddProductToStore,
        payload: newProduct
    }
} 

export const getProductsFromDb = () => {   
    return async (dispatch) => {
        try {
            const response = await axios.get("http://localhost:9000/product/api/get/all")
            const data = response.data;
            dispatch({type:'GET_PRODUCTS_SUCCESS',  payload:data});
            return data;
        } catch(err) {
            console.log(err)
            throw err;
        }
    }
    
}

export const saveProductToDb =  (product)=>{
    return (dispatch) => {
        console.log("called by dispatch");
        axios.post("http://localhost:9000/product/api/save",
            product
        )
        .then((savedProduct)=>{
            let signedProduct = savedProduct.data
            console.log(signedProduct);

            dispatch(AddProductToStore(signedProduct))

        })
        .catch((err)=>{
            console.log(err);
        });
    }
}