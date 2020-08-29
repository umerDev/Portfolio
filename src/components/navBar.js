import React, { Component } from 'react';
import { BrowserRouter, Route, Link, Switch } from 'react-router-dom'; 
import Projects from '../../src/components/pages/projects'; 
import Articles from '../../src/components/pages/articles.js'; 
import About from '../../src/components/pages/about.js'; 
import Main from '../../src/components/pages/main';
import CV from '../../src/components/pages/cv';
import NotFound from '../../src/components/pages/notFound';
import { stack as Menu } from "react-burger-menu";
import '../css/Navigation.css';

export default class Navigation extends Component
{
    render() {
        return (
            <BrowserRouter>
                <div className = "navigation">
                    <Menu right>
                        <div className = "bm-menu">
                            <Link to="/about" className = "bm-item">About</Link>
                            <Link to="/projects" className = "bm-item">Projects </Link>
                            <Link to="/articles" className = "bm-item">Articles</Link>
                            <Link to="/cv" className = "bm-item"> CV </Link>
                        </div>
                    </Menu>
                    <Switch>
                        <Route path = "/about" component = {About} />
                        <Route path = "/projects" component = {Projects} />
                        <Route path = "/articles" component = {Articles} />
                        <Route path = "/cv" component = {CV} />
                        <Route exact path = "/" component = {Main} />
                        <Route component = {NotFound} />
                    </Switch>
                </div>
            </BrowserRouter>
        );
    }
}