import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { Fade, Slide} from 'react-reveal'
import reportWebVitals from './reportWebVitals';
import { Navbar } from './Components/Navbar';
import { Footer } from './Components/Footer';
import {  Testimonials } from './Components/Testimonials';
import { TestForm } from './Components/TestForm';
import { Contact } from './Components/Contact';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Navbar/>
    <App />

  
    {/* <Testimonials/>
    <Slide>
      
    <Contact/>
    </Slide> */}
    {/* <Footer/> */}
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
