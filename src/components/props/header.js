import React from 'react'
import Logo from '../../images/logo.jpg'
import '../../css/App.css'

function Header(props) {
  return (
    <div className = "App-header">
      <img src = {Logo} className = "circle-icon"/>
        <header>
            <h1>{props.name}</h1>
        </header>
    </div>
  )
}

export default Header