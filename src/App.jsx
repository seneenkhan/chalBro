import { Routes, Route } from "react-router-dom";
import React from 'react';
import './App.css';
import Login from './components/Login';
import SignUp from './components/SignUp';
import Home from './components/Home';
import Contact from './components/Contact';
import Account from './components/Account';
// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
export default function App() {
  
  return (
    <>
       <Routes>
       <Route index element = {<Home/>}/>
       <Route path="/home" element={ <Home/> } />
        <Route path="/login" element={ <Login/> } />
        <Route path="/signup" element={ <SignUp/> } />
        <Route path="/contact" element={ <Contact/> } />
        <Route path="/account" element={ <Account/> } />

       </Routes>
   
    
    </>
  )
}

