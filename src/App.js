import React from 'react';
import Navigation from './components/navBar';
import Footer from '../src/components/props/footer';
import '../src/css/App.css';
import '../src/css/Navigation.css';

function App() {
  return (
    <div id = "App">
      <Navigation/>
      <Footer/>
    </div>
  );
}

export default App;

//https://www.framer.com/blog/posts/react-portfolio/
//https://www.framer.com/api/motion/examples/