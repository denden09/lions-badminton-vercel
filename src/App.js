import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'; 
import Navbar from './components/Navbar'; 
import Home from './pages/Home';          
import Gallery from './pages/Gallery';    
import Achievement from './pages/Achievement';  
import Contact from './pages/Contact'; 
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Schedule from './pages/Schedule';


function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Gallery" element={<Gallery />} />
          <Route path="/Achievement" element={<Achievement />} />
          <Route path="/Contact" element={<Contact />} />
          <Route path="/Schedule" element={<Schedule />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;