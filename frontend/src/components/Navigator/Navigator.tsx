import React from 'react'
import { FaModx } from 'react-icons/fa'
import './navigator.css'
 
const Navigator = () => {
  return (
    <header className="navigator">
        <nav>
            <div className="logo">
              <FaModx /> 
            </div>
        </nav>
        <ul className="nav-list">
            <li className="nav-item"><a href="#">Home</a></li>
            <li className="nav-item"><a href="#">Portfolio</a></li>
            <li className="nav-item"><a href="#">Blog</a></li>
            <li className="nav-item"><a href="#">Contact</a></li>
        </ul>
    </header>
  )
}

export default Navigator