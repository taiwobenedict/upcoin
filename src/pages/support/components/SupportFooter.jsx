import React from 'react'
import { Link } from 'react-router-dom'
import "./Component.css"

function SupportFooter() {
  return (
    <div className='support-footer pri-bg'>
        <div className="container-sm">
          <Link to="/" className='text-light'>SUPCOIN</Link>
          
        </div>
    </div>
  )
}

export default SupportFooter