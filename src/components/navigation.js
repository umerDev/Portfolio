import React, { Component } from 'react';
import { BrowserRouter, Route, Link, Switch } from 'react-router-dom'; 
import Projects from './pages/projects'; 
import Articles from './pages/articles.js'; 
import About from './pages/about.js'; 
import Main from './pages/main';
import CV from './pages/cv';
import NotFound from './pages/notFound';
import { stack as Menu } from "react-burger-menu";
import '../css/Navigation.css';

export default class Navigation extends Component
{
    constructor(props) { 
        super(props);
        this.state = {
            menuOpen: false
        }
        this.isMenuOpen=this.isMenuOpen.bind(this);
        this.handleOnClose=this.handleOnClose.bind(this);
    }

    isMenuOpen = (state) => {
        this.setState({menuOpen:state.isOpen})
    }

    handleOnClose = () => {
        this.setState({menuOpen:false})
    }
    
    render() {
        return (
            <BrowserRouter>
                <div className = "navigation">
                    <Menu right onStateChange={this.isMenuOpen} isOpen={this.state.menuOpen}>
                        <div className = "bm-menu">
                            <Link onClick={ this.handleOnClose } to="/about" className = "bm-item">About</Link>
                            <Link onClick={ this.handleOnClose } to="/projects" className = "bm-item">Projects </Link>
                            <Link onClick={ this.handleOnClose } to="/articles" className = "bm-item">Articles</Link>
                            <Link onClick={ this.handleOnClose } to="/cv" className = "bm-item"> CV </Link>
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