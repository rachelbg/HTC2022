
import './App.css';
import React from 'react'
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/pages/Home';
import HeroSection from './components/HeroSection';
import Search from './components/Search';

function App() {
  return (
    
    <>
    <Router>
      <Navbar />
      <HeroSection />
      <Routes>

        <Route path='/' exact component= {Home} />
        <Route path ='/Search' exact component={Search} />
        </Routes>
    </Router>
      

   </>
  );
}

export default App;
