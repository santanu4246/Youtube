import React, { useState } from 'react'
import Navbar from './Components/Navbar';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import Home from './Pages/Home/Home';
import Sidebar from './Components/Sidebar';
import Video from './Pages/Video/Video'
const App = () => {
  const [sidebar,setSidebar] = useState(true)
  return (
    <div>
      <Navbar setSidebar={setSidebar}/>
      <Routes>
        <Route path="/" element={<Home sidebar={sidebar}/>} />
        <Route path="/Video/:categoryId/:videoId" element={<Video />} />
      </Routes>
    </div>
  )
}
export default App;