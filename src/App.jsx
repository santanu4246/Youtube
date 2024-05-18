import React from 'react'
import Navbar from './Components/Navbar';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
const App = () => {
  return (
    <div>
      <BrowserRouter>
      <Navbar />
      </BrowserRouter>

    </div>
  )
}
export default App;