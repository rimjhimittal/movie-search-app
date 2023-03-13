import React from 'react'
import SearchMovies from './searchMovies';
import './App.css'
import Navbar from './Navbar';
import { useState } from 'react';

function App() {
    const [mode, setMode]= useState('light');
  const toggleMode= ()=>{
  if(mode==='light'){
    setMode('dark');
    document.body.style.backgroundColor= '#212529';
    document.body.style.color='white';

  }
  else{
    setMode('light');
    document.body.style.backgroundColor= 'white';
    document.body.style.color='#212529';
  }
}
  return (
    <>
    <Navbar mode={mode} toggleMode= {toggleMode}/>
    <div className="container">
        <h1 className="title">Search your Favourite Movie&lt;3</h1>
        <SearchMovies mode={mode}/>
      </div>
      </>
  )
}

export default App