import React, { useState } from 'react'
import './App.css'
import item from './assets/item1.png'
import axios from 'axios'
import { clearConfigCache } from 'prettier'

const App = () => {
  const [data, setData] = useState([])

  axios
    .get('http://www.mocky.io/v2/5b15c4923100004a006f3c07')
    .then((response) => {
      setData(response.data)
    })
    .catch((error) => {
      console.log(error)
    })

  return (
    <div className="App">
      <div className="fundo">
        <div className="steps">
          <p className="cart">Cart</p>
          <p className="payment">Payment</p>
          <p className="confirmation">Confirmation</p>
        </div>
        <div className="produtos">
          <div className="products-label">Products</div>
          <div className="products">
            <div className="products-details">
              <img src={item} className="item"></img>
              <div className="price-description">
                <div className="item-description">
                  L'Oréal Professionnel Expert Absolut Repair Cortex Lipidium
                </div>
                <div className="price">R$ 225,90 </div>
              </div>
            </div>
          </div>
          <div className="products">
            <div className="products-details">
              <img src={item} className="item"></img>
              <div className="price-description">
                <div className="item-description">
                  L'Oréal Professionnel Expert Absolut Repair Cortex Lipidium
                </div>
                <div className="price">R$ 225,90 </div>
              </div>
            </div>
          </div>
          <div className="products">
            <div className="products-details">
              <img src={item} className="item"></img>
              <div className="price-description">
                <div className="item-description">
                  L'Oréal Professionnel Expert Absolut Repair Cortex Lipidium
                </div>
                <div className="price">R$ 225,90 </div>
              </div>
            </div>
          </div>
        </div>
        <div className="total">
          <div className="total-details">
            <div className="subtotal">Subtotal</div>
            <div className="shipping-total">Shipping Total</div>
            <div className="discount">Discount</div>
            <div className="total-total">Total</div>
          </div>
          <div className="total-value">
            <div className="subtotal-value">Subtotal</div>
            <div className="shipping-total-value">Shipping Total</div>
            <div className="discount-value">Discount</div>
            <div className="total-total-value">Total</div>
          </div>
        </div>
        <div className="extra-large">
          <p className="payment-button">Go to Payment</p>
        </div>
      </div>
    </div>
  )
}
export default App
