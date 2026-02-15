import React from 'react'
import "./Words.css"

function words(props) {
  return (
    <div className='Words'> 

    <p className='disclaimer'>{props.content}</p>
      
    </div>
  )
}

export default words
