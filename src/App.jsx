import React, { useState } from 'react'
import Navbar from './Components/Navbar';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import Home from './Pages/Home/Home';
import Sidebar from './Components/Sidebar';
import Video from './Pages/Video/Video'
import './App.css'
const App = () => {
  const [sidebar,setSidebar] = useState(true)
  return (
    <div>
      <Navbar setSidebar={setSidebar}/>
      
        <Home sidebar={sidebar}/>
  
    </div>
  )
}
export default App;