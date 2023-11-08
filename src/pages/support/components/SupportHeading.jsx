import React from 'react'
import "./Component.css"
import {Link} from 'react-router-dom'
import logo from "../../../images/home/logo.png"

function SupportHeading() {
  return (
    <div className='py-2 pri-bg'>
      <div className="container-lg  d-flex justify-content-between align-items-center">
        <Link to="/" className='nav-link px-0 mr-5'><img width={72}  src={logo} alt="" /></Link>
        <ul className='m-0 d-flex'>
          <div><Link to="#" className='nav-link text-light'>Submit a request</Link></div>
          <div><Link to="#" className='nav-link text-light'>Sign in</Link></div>
        </ul>
      </div>
    </div>
  )
}

export default SupportHeading