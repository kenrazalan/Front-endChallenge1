import React from 'react'
import Total from '../Total/Total'
import {useHistory} from 'react-router-dom'
import './Payment.css'

const Payment = ({total}) =>{

    const history = useHistory();
    const handleClick = ()=>{
      history.push('/confirmation')
    }
return(
<div className="App">
      <div className="fundo">
        <div className="steps">
          <p className="cart-cart">Cart</p>
          <p className="payment-payment">Payment</p>
          <p className="confirmation-confirmation">Confirmation</p>
        </div>
        <p className="credit-card">Credit Card</p>
        <div className="credit-card-box">
            <div className="credit-card-margin">
                <div className="field-1">
                    <p className="card-number-label">Card Number</p>
                    <input type="tel" 
                           inputMode="numeric"
                           maxLength="19"
                           pattern="[0-9\s]{13,19}"
                           autoComplete="cc-number"
                           className="card-number-input"
                           placeholder="____-____-____-____"/>
                    </div>
                <div className="field-2">
                    <p className="card-number-label">Cardholder Name</p>
                    <input type="text"
                         className="card-number-input"/>
                </div>
                <div className="field-3">
                   <div className="field-4">
                       <p className="validity-label">Validity(month/year)</p>
                        <input type="tel" 
                           inputMode="numeric"
                           className="validity-input"
                           placeholder="xx/xx"
                           maxLength="5"/>
                   </div>
                   <div className="field-5">
                       <p className="CVV-label">CVV</p>
                        <input 
                           type="tel" 
                           inputMode="numeric"
                           className="CVV-input"
                           placeholder="xx/xx"
                           maxLength="5"/>
                   </div>
                </div>
            </div>

        </div>

         <Total total={total}/>
         
        <button onClick={handleClick} className="extra-large">
          <p className="payment-button"><b>Finalize the order</b></p>
        </button>
      </div>
    </div>
)}

export default Payment