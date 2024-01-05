import React, { Component, Suspense } from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";

import CityComponent from "./CommonComponents/CityComponent";
// import User from "./AppComponents/User/UserComponent";
import User from "./AppComponents/User/UserContainer";

import Header from "./CommonComponents/HeaderComponent"
import Footer from "./CommonComponents/FooterComponent"
import Hook from './AppComponents/User/UserHook'

import "./app.css"


import LifeCycle from '../assessment4files/lifeCycleExamples'

// import Product from "./AppComponents/Product/ProductComponent";
import ProductList from "./AppComponents/Product/ProductList"
import Product from "./AppComponents/Product/ProductContainer";

import Cart from "./AppComponents/Cart/CartComponent";
import CheckoutComponent from "./AppComponents/Checkout/CheckoutComponent";
import OrderComponent from "./AppComponents/Checkout/OrderComponent";
import CancelledOrderComponent from "./AppComponents/Checkout/CancelledOrderComponent";

export default class Application extends Component  {
    constructor(props){
        super(props)
        this.state = {
            showModal1: false,
            showModal2: false,
          };
    }

    render(){
        return(
            <>
                <Router>
                    <Suspense fallback={<div>Loading...</div>}>
                    <Header/>
                        <Routes>
                            <Route path="/user" element={<User/>}/>
                            <Route path="/hook" element={<Hook/>}/>
                            <Route path="/life" element={<LifeCycle/>}/>
                            <Route path="/product" element={<Product/>}/>
                            <Route path="/cart" element={<Cart/>}/>
                            <Route path="/checkout" element={<CheckoutComponent/>}/>
                            <Route path="/orders" element={<OrderComponent/>}/>
                            <Route path="/cancelled" element={<CancelledOrderComponent/>}/>



                            <Route exact path="/city/:id" element={<CityComponent/>}/>
                            <Route path='/city' element={<CityComponent/>}/>
                        </Routes>
                    <Footer/>
                    </Suspense>
                </Router>
            </>
        )
    }
}