import React from 'react'
import "./Toggle.css"

function Toggle() {
  return (
    <div className='App'>

    <div className='data'>
      {
        !toggle ? <div onClick={() => setToggle(prev => !prev)}>
        <div className='rec'></div>
        <div className='circle'></div>
        </div> :
         <div onClick={() => setToggle(prev => !prev)}>
         <div className='circle2'></div>
         <div className='rec2'></div>
         </div>
      }
    </div>

    <div>
    <div className='rec3'>
    <p style={toggle ? {top: "60%"} :{}}>{toggle ? "On" : "Off"}</p>
    <div className='circle3' style={toggle ? {} :{ transform: "translateY(100%)"}}></div>
    </div>
       
    </div>
  </div>
  )
}

export default Toggle