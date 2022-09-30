import React from 'react'
import "./Loader.css"
import loader from "../../images/loader.jfif"

function Loading() {
  return (
    <div className='loader flex flex-c'>
      <img src={loader} alt='loader'/>
    </div>
  )
}

export default Loading;