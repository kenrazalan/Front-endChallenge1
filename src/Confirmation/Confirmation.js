import React from 'react'
import styled from 'styled-components'
import Total from './../Total'

const Wrapper = styled.div`
    .cart-conf{
        height: 16px;
        width: 61px;
        color: #ccc;
        font-family: 'Helvetica Neue';
        font-size: 13px;
        font-weight: 700;
        letter-spacing: NaNpx;
        line-height: 16px;
        text-align: center;
        
    }
    .payment-conf{
        height: 16px;
        width: 89px;
        color: #ccc;
        font-family: 'Helvetica Neue';
        font-size: 13px;
        font-weight: 700;
        letter-spacing: NaNpx;
        line-height: 16px;
        text-align: center;
    }
    .confirmation-conf{
        height: 16px;
        width: 101px;
        color: #ff7800;
        font-family: 'Helvetica Neue';
        font-size: 13px;
        font-weight: 700;
        letter-spacing: NaNpx;
        line-height: 16px;
        text-align: center;
    }
    .success-label{
        width: 266px;
        height: 40px;
      
    }
    .success-label-label{
        color: green;
        font-family: 'Helvetica Neue';
        font-size: 19px;
        font-weight: bold;
        letter-spacing: NaNpx;
        line-height: 16px;
        text-align: center;
    }
    .pagamento{
        width: 340px;
        height: 103px;
    }
    .pagamento-label{
        
        font-weight: bold;
        height: 16px;
        width: 219px;
        color: #999;
        font-family: "Helvetica Neue";
        font-size: 16px;
        letter-spacing: 1.37px;
        line-height: 19px;
    }
    .pagamento-box{
        height: 73px;
        width: 340px;
        border-radius: 3px;
        background-color: #FFF;
        box-shadow: 1px 1px 5px 0 rgba(0,0,29,0.22);
      }
      .produtos{
          margin-top : 30px;
      }
    }
`

const Confirmation = ({datas,total})=>{
    return(
        <Wrapper>
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
        </Wrapper>
    )
}

export default Confirmation