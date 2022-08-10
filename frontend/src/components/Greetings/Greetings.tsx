import React from 'react'
import './greetings.css'

const Greetings = () => {
  return (
    <div className="container__greetings">
        <div className="greetings_wrapper">
            <div className="greetings__firstline">
                <h1>Hi, I am Alex Chang</h1>
            </div>
            <div className="greetings_secondline">
                <h3>Welcome to My Personal Website</h3>
            </div>
        </div>
    </div>
  )
}

export default Greetings