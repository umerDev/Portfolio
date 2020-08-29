import React, { Component } from 'react';
import { BrowserRouter, Route, Link } from 'react-router-dom'; 
import Projects from '../../src/components/pages/projects'; 
import Articles from '../../src/components/pages/articles.js'; 
import About from '../../src/components/pages/about.js'; 
import Main from '../../src/components/pages/main';
import '../css/Navigation.css';

export default class Navigation extends Component 
{
    render()
    {
        return (
            <BrowserRouter>
                <div className="App">
                    <Route path = "/" component = {Main} />
                    <Route exact path = "/projects" component = {Projects} />
                    <Route path = "/articles" component = {Articles} />
                    <Route path = "/about" component = {About} />
                </div>
                <div className = "navigation">
                    {/* <img src ={logo} className = "logo" alt = "Logo" /> */}
                    <div className = "navigation-sub">
                        <Link to="/about" className = "bm-item">About</Link>
                        <Link to="/projects" className = "bm-item">Projects </Link>
                        <Link to="/articles" className = "bm-item">Articles</Link>
                    </div>
                </div>
            </BrowserRouter>
        );
    }
}