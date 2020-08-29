import React from "react"
import meme from '../../images/spiderman-meme.jpg';
import Header from '../props/header';
import '../../css/App.css';

function NotFound() {
  return (
    <div>
      <Header name = "Page not found" />
      <div className = "img">
        <img src ={meme} alt="You shouldn't be here!"/>
      </div>
    </div>
  )
}

export default NotFound;