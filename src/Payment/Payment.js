import React, { useState } from 'react'
import Total from '../Total/Total'
import {useHistory} from 'react-router-dom'
import './Payment.css'
import Nav from '../Nav/Nav'

const Payment = ({total}) =>{
    const [cardNumber,setCardNumber] = useState("")
    const [cardName,setCardName] = useState("")
    const [cardValidation,setValidation] = useState("")
    const [cardCVV,setCardCVV] = useState("")
    
    

    const history = useHistory();
    const handleChange =(e)=>{
      setCardNumber(e.target.value)
    }
    const handleChangeValidation =(e)=>{
      setValidation(e.target.value)
    }
    const handleChangeName =(e)=>{
      setCardName(e.target.value)
    }
    const handleChangeCVV =(e)=>{
      setCardCVV(e.target.value)
    }
    const handleClick = ()=>{
      history.push('/confirmation')
    }

return(
<div className="App">
      <div className="fundo">
        {/* <div className="steps">
          <p className="cart-cart">Cart</p>
          <p className="payment-payment">Payment</p>
          <p className="confirmation-confirmation">Confirmation</p>
        </div> */}
        <Nav/>
        <p className="credit-card"><b>Credit Card</b></p>
        <form >
        <div className="credit-card-box">
            <div className="credit-card-margin">
                <div className="field-1">
                    <p className="card-number-label">Card Number</p>
                    <input name="number"
                           type="tel" 
                           value={cardNumber}
                           onChange={handleChange}
                           inputMode="numeric"
                           maxLength="19"
                           pattern="[0-9\s]{13,19}"
                           autoComplete="cc-number"
                           className="card-number-input"
                           placeholder="____-____-____-____"/>
                    </div>
                <div className="field-2">
                    <p className="card-number-label">Cardholder Name</p>
                    <input name="name"
                           type="text"
                           className="card-number-input"
                           value={cardName}
                           onChange={handleChangeName}/>
                </div>
                <div className="field-3">
                   <div className="field-4">
                       <p className="validity-label">Validity(month/year)</p>
                        <input type="tel" 
                           name="validity"
                           value={cardValidation}  
                           onChange={handleChangeValidation}
                           inputMode="numeric"
                           className="validity-input"
                           placeholder="xx/xx"
                           maxLength="5"/>
                   </div>
                   <div className="field-5">
                       <p className="CVV-label">CVV</p>
                        <input 
                           name="cvv"
                           value={cardCVV}
                           onChange={handleChangeCVV}
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
          <p className="payment-button">Finalize the order</p>
        </button>
        </form>
      </div>
    </div>
)}

export default Payment