import React, { useEffect, useState } from 'react'
import axios from 'axios'
import Total from './Total'
import Cart from './Cart'
import Payment from './Payment'

const Main = () => {

  const [datas, setData] = useState([])
  const [total, setTotal] = useState([])
    console.log(datas)
    console.log(total)
    useEffect(()=>{
        axios.get('http://www.mocky.io/v2/5b15c4923100004a006f3c07')
        .then((response) => {
          setData(response.data.items)
        })
        .catch((error) => {
          console.log(error)
        })
    },[])

    useEffect(()=>{
        axios.get('http://www.mocky.io/v2/5b15c4923100004a006f3c07')
        .then((response) => {
          setTotal(response.data)
        })
        .catch((error) => {
          console.log(error)
        })
    },[])

    return (
        <div className="App">
            <Payment total={total} datas={datas}/>
        </div>

    )
} 

export default Main