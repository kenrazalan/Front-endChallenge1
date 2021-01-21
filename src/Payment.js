import React from 'react'
import Total from './Total'
import {useHistory} from 'react-router-dom'

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
                    <div className="card-number-box">
                        <div className="card-number-box-label">____.____.____.____</div>
                    </div>
                </div>
                <div className="field-2">
                    <p className="card-number-label">Cardholder Name</p>
                    <div className="card-number-box"></div>
                </div>
                <div className="field-3">
                   <div className="field-4">
                       <p className="validity-label">Validity(month/year)</p>
                       <div className="validity-box">
                           <div className="validity-box-label">__/____</div>
                       </div>
                   </div>
                   <div className="field-5">
                       <p className="CVV-label">CVV</p>
                       <div className="CVV-box">
                       <div className="CVV-box-label">____</div>
                       </div>
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