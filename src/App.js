import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import './style.css';
import Collect from './components/Collect';
import Navbar from './components/Navbar';
import Contact from './components/Contact';

export default function App() {
  return (
    <div>
      <BrowserRouter>
        <Navbar />
        <Route exact path="/" component={Collect} />
        <Route path="/Contact" component={Contact} />
      </BrowserRouter>
    </div>
  );
}
