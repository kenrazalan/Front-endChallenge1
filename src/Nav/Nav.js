import React from 'react'
import './Nav.css'
import {Link,NavLink,Route,useHistory} from 'react-router-dom'

const Nav = ()=>{
    return(
        <div className="steps">
            <NavLink activeStyle={{color: "#ff7800"}} className="navlink" exact to="/">
                Cart
            </NavLink>
            <NavLink activeStyle={{color:"#ff7800"}} className="navlink" exact to="/payment">
                Payment
            </NavLink>
            <NavLink activeStyle={{color:"#ff7800"}} className="navlink" exact to="/confirmation">
                Confirmation
            </NavLink>
            
        </div>
    )

}

export default Nav
