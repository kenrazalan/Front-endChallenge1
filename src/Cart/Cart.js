import React, { useEffect, useState } from 'react'
import './Cart.css'
import axios from 'axios'
import {useHistory} from 'react-router-dom'
import Total from '../Total/Total'
import Nav from'../Nav/Nav'



const Cart = ({total,datas}) =>{
  const history = useHistory();
  const handleClick = ()=>{
    history.push('/payment')
  }
  return (
   
      <div className="fundo">
        {/* <div className="steps">
          <p className="cart">Cart</p>
          <p className="payment">Payment</p>
          <p className="confirmation">Confirmation</p>
        </div> */}
        <Nav/>
        <div className="produtos">
          <div className="products-label">Products</div>
          {datas.map(data=>{
                return(
               <div className="products">
               <div className="products-details">
                 <img src={data.product.imageObjects[0].thumbnail} className="item"></img>
                 <div className="price-description">
                   <div className="item-description">
                     {data.product.name}
                   </div>
                   <div className="price"><b>Php</b> {data.product.priceSpecification.price} </div>
                 </div>
               </div>
             </div>)  
        })}

        </div>
         <Total total={total}/>

        <button onClick={handleClick} className="extra-large">
          <p className="payment-button"><b>Go to Payment</b></p>
        </button>
      </div>
  
  )

}

export default Cart;