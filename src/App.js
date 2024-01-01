import React from 'react';
import './App.css';
import Navbar from './Components/NavBar';
import Spinner from './Utils/Spinner';
import Header from './Components/Header';
import Page1 from './Components/Page1';
import Page2 from './Components/Page2';
import Page3 from './Components/Page3';
import Page4 from './Components/Page4';
import Page5 from './Components/Page5';
import Page6 from './Components/Page6';

function App() {
  return (
    <div className="App">
    
      <div id="fixed-image">

      </div>
      
      <div className='main' >
        <Page1 />
        <Page2 />
        <Page3 />
        <Page5 />
        <Page6 />
        <script src="https://cdn.jsdelivr.net/npm/locomotive-scroll@3.5.4/dist/locomotive-scroll.js"></script>
    <script src="https://cdn.jsdelivr.net/npm/swiper@11/swiper-bundle.min.js"></script>
    <script src="script.js"></script>

      </div>
    </div>
  );
}

export default App;
