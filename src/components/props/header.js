import React from 'react'
import Logo from '../../images/logo.jpg'
import { useHistory } from 'react-router-dom';
import '../../css/App.css'

function Header(props) {
  const history = useHistory();
  const GoToHomePage = () => history.push('/');

  return (
    <div className = "App-header">
      <img src = {Logo} className = "circle-icon" alt ="logo" onClick={GoToHomePage}/>
        <header>
            <h1>{props.name}</h1>
        </header>
    </div>
  )
}

export default Header