import React, {useEffect} from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Link } from 'react-router-dom'; 
import Navigation from './components/Navigation';
import Home from './Home';
import About from './About';
import Blog from './Blog';
import Services from './Services';
import Footer from './components/Footer';
import Certificates from './Certificates';
import ReactGA from 'react-ga';

function App() {

  useEffect(() => {
    ReactGA.initialize('G-8KK28161DR');
    ReactGA.pageview(window.location.pathname);
  })

  return (
    <BrowserRouter>
      <div className="App">
        <Navigation />
        <Home />
        <About />
        <Certificates />
        <Services />
        <Blog />
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
