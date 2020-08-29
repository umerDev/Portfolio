import React from "react"
import meme from '../../images/spiderman-meme.jpg';

function NotFound() {
  return (
    <div className = "main">
      <h1> Page Not Found, 404! </h1>
      <img src ={meme} alt="You shouldn't be here!"/>
    </div>
  )
}

export default NotFound;