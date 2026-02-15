import React from 'react'
import "./Heading.css"

function Heading(props) {
  return (
    <div className='heading'>
      <h3 className='headingtext'>{props.heading}<span className='span'>{props.span}</span></h3>
    </div>
  )
}
export default Heading
