import React from 'react'
import { NavLink } from 'react-router-dom'
import { BsFillSuitHeartFill } from 'react-icons/bs'
import { BiMessageRoundedError } from 'react-icons/bi'


const Button = () => {
    return (
        <div className="btn">
        <NavLink to="/liked" role="button" className="buttonLDM" ><BsFillSuitHeartFill/> Liked</NavLink>
        <NavLink to="/" role ="button" className="buttonLDM" ><BsFillSuitHeartFill/> Discover</NavLink>
        <NavLink to="/pass" role="button" className="buttonLDM" ><BiMessageRoundedError/> Pass</NavLink> 
      </div>
    )
}

export default Button
