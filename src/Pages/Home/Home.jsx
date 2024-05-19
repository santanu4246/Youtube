import React from 'react'
import './Home.css'
import { Link } from 'react-router-dom'
import Sidebar from '../../Components/Sidebar'
const Home = ({sidebar}) => {
  return (
    <>
      <Sidebar Sidebar={sidebar}/>
    </>
  )
}
export default Home;