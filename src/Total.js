import React from 'react'

const Total = ({total}) =>{
    return(
    <div className="total">
    <div className="total-details">
      <div className="subtotal"><b>Subtotal</b></div>
      <div className="shipping-total"><b>Shipping Total</b></div>
      <div className="discount"><b>Discount</b></div>
      <div className="total-total"><b>Total</b></div>
    </div>
    <div className="total-value">
      <div className="subtotal-value"><b>Php </b>{total.subTotal}</div>
      <div className="shipping-total-value"><b>Php </b>{total.shippingTotal}</div>
      <div className="discount-value"><b>Php </b>{total.discount}</div>
      <div className="total-total-value"><b>Php </b>{total.total}</div>
    </div>
  </div>
)
} 

export default Total