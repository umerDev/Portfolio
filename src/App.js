import React from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Link } from 'react-router-dom'; 
import Projects from '../src/components/pages/projects'; 
import Articles from '../src/components/pages/articles.js'; 
import About from './components/pages/about.js'; 
import Main from './components/pages/main';

function App() {
  return (
    <BrowserRouter>
      <div className="App">

      {/* routes */}
      <Route path = "/" component = {Main} />
      <Route exact path = "/projects" component = {Projects} />
      <Route path = "/articles" component = {Articles} />
      <Route path = "/about" component = {About} />

      {/* navigation */}
      <div className = "navigation">
        {/* <img src ={logo} className = "logo" alt = "Logo" /> */}
          <div className = "navigation-sub">
            <Link to="/about" className = "item">About</Link>
            <Link to="/projects" className = "item">Projects </Link>
            <Link to="/articles" className = "item">Articles</Link>
          </div>
      </div>
    </div>
    </BrowserRouter>
  );
}

export default App;

//https://www.framer.com/blog/posts/react-portfolio/
//https://www.framer.com/api/motion/examples/