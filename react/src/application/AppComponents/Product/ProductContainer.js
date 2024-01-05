import {connect} from 'react-redux'
import { AddProductToStore, saveProductToDb, getProductsFromDb } from '../../../state/Product/ProductAction'
import ProductComponent from './ProductComponent'
import { addItemToCart, addCartToStore } from  '../../../state/Cart/CartAction'

let mapStateToProps=(store)=> {
    return(
        {
            Product: store.productReducer.Product,
            products: store.productReducer.products,
        }
    )
}
let mapDispatchToProps=(dispatch)=>{
    return(
        {
            AddProduct: (newProduct)=>{
                dispatch(AddProductToStore(newProduct))
            },
            SaveProduct: (newProduct)=>{
                dispatch(saveProductToDb(newProduct))
            },
            GetProducts: ()=>{
                dispatch(getProductsFromDb())
            },
            AddProductCart: (newProduct)=>{
                dispatch(addItemToCart(newProduct))
            },
        }
    )
}

export default connect(mapStateToProps, mapDispatchToProps)(ProductComponent)