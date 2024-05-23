import React, { useEffect, useState } from 'react'
import data from "../API/data.json"
import './Feed.css'
import { GetVideosBySearch } from '../API/GetVideosBySearch';
const API = "";
console.log(API);
const Feed = ({ Sidebar }) => {
  const [cardList, setCardList] = useState([]);

  useEffect(() => {
    setCardList(data);
  }, [])

  return (
    <div className='card-main'>
      <div className="cards">
        {
          data ? cardList.map((item, index) => {
            console.log(item);
            return <div className="card">
              <img src={item.snippet.thumbnails.high.url} alt="" />
              <p>{item.snippet.title}</p>
            </div>
          }) : ""
        }
      </div>
    </div>
  )
}

export default Feed