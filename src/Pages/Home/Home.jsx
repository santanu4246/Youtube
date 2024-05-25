import React from 'react'
import './Home.css'
import { Link } from 'react-router-dom'
import Sidebar from '../../Components/Sidebar'
import Feed from '../../Components/Feed'
import Video from '../Video/Video'
const Home = ({sidebar}) => {
  return (
    <>
      <Sidebar Sidebar={sidebar}/>

    </>
  )
}
export default Home;