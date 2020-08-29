import React from 'react'
import '../../css/App.css'

function Header(props) {
  return (
    <div className = "App-header">
        <header>
            <h1>{props.name}</h1>
        </header>
    </div>
  )
}

export default Header