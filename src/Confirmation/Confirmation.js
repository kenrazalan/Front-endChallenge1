import React from 'react'
// import styled from 'styled-components'
import Total from '../Total/Total'
import './Confirmation.css'

// const Wrapper = styled.div`
    
// `

const Confirmation = ({datas,total})=>{
    return(
     
        <div className="fundo">
            <div className="steps">
                <p className="cart-conf">Cart</p>
                <p className="payment-conf">Payment</p>
                <p className="confirmation-conf">Confirmation</p>
            </div>
            <div className="success-label">
                    <p className="success-label-label">Success</p>
            </div>
            <div className="pagamento">
                <p className="pagamento-label">Payment</p>
                <div className="pagamento-box"></div>
            </div>

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

        </div>
    )
}

export default Confirmation