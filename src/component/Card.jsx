import React from 'react'
import "./Card.css"

function Card() {
  return (
    <div className='cardWraaper' >
        <div className='card'>
           <div className='imgDiv'><img className='img'></img></div>
            <div className='container'>
                <span>Hello</span>
                <span>Hello</span>
            </div>
        </div>
    </div>
  )
}

export default Card