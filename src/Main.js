import React, { useEffect, useState } from 'react'
import axios from 'axios'
import Total from './Total/Total'
import Cart from './Cart/Cart'
import Payment from './Payment/Payment'
import Confirmation from './Confirmation/Confirmation'
import ScrollToTop from './ScrollToTop'
import {Link,BrowserRouter as Router,Route, Switch,useHistory} from 'react-router-dom'

const Main = () => {

  const [datas, setData] = useState([])
  const [total, setTotal] = useState([])
  const [details,setDetails] = useState({
    cardNumber:"",
    cardName:"",
    cardValidation:"",
    cardCVV:""
  })
  useEffect(()=>{
    localStorage.setItem("details",details)
  },[details])


    useEffect(()=>{
        axios.get('https://www.mocky.io/v2/5b15c4923100004a006f3c07')
        .then((response) => {
          setData(response.data.items)
        })
        .catch((error) => {
          console.log(error)
        })
    },[])

    useEffect(()=>{
        axios.get('https://www.mocky.io/v2/5b15c4923100004a006f3c07')
        .then((response) => {
          setTotal(response.data)
        })
        .catch((error) => {
          console.log(error)
        })
    },[])

    return (
      <>
        <Router>
         <ScrollToTop/>
        <div className="App">
          <Switch>

           <Route exact path="/">
            <Cart  total={total} datas={datas}/>
          </Route> 
          <Route exact path="/confirmation">
            <Confirmation total={total} datas={datas}details={details}/>
          </Route>
          <Route exact path ="/payment">
            <Payment total={total} datas={datas}  setDetails={setDetails}/>
          </Route>
         
          </Switch>  
          
            
        </div>
        
        </Router>
        </>
    )
} 

export default Main