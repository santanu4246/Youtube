import React, { useEffect, useState } from 'react'
import data from "../API/data.json"
import './Feed.css'
import { GetVideosBySearch } from '../API/GetVideosBySearch';
import { Link } from 'react-router-dom';
const API = "";
console.log(API);
const Feed = () => {
  const [cardList, setCardList] = useState([]);

  useEffect(() => {
    shuffleArray(data);
    setCardList(data);
  }, [])
  function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
  }


  function formatNumber(num) {
    if (num >= 1000000000) {
      return (num / 1000000000).toFixed(1) + "B";
    }
    if (num >= 1000000) {
      return (num / 1000000).toFixed(1) + "M";
    }
    if (num >= 1000) {
      return (num / 1000).toFixed(1) + "K";
    }
    return num;
  }
  function UploadTime(timestamp) {
    const currentDate = new Date();
    const pastDate = new Date(timestamp);
    const timeDifference = currentDate.getTime() - pastDate.getTime();
  
    const seconds = Math.floor(timeDifference / 1000);
    const minutes = Math.floor(seconds / 60);
    const hours = Math.floor(minutes / 60);
    const days = Math.floor(hours / 24);
    const weeks = Math.floor(days / 7);
    const months = Math.floor(days / 30);
    const years = Math.floor(days / 365);
  
    if (years > 0) {
      return years === 1 ? "1 year ago" : years + " years ago";
    } else if (months > 0) {
      return months === 1 ? "1 month ago" : months + " months ago";
    } else if (weeks > 0) {
      return weeks === 1 ? "1 week ago" : weeks + " weeks ago";
    } else if (days > 0) {
      return days === 1 ? "1 day ago" : days + " days ago";
    } else if (hours > 0) {
      return hours === 1 ? "1 hour ago" : hours + " hours ago";
    } else if (minutes > 0) {
      return minutes === 1 ? "1 minute ago" : minutes + " minutes ago";
    } else {
      return "Just now";
    }
  }
  return (
    <div className='card-main'>
      <div className="cards">
        {data ? cardList.map((item, index) => (
          <Link key={index} to={`/video/${item.id.videoId}`}>
            <div className="card">
              <img src={item.snippet.thumbnails.high.url} alt="" />
              <div className="video-bottom">
                <p>{item.snippet.title}</p>
                <p>{item.snippet.channelTitle}</p>
              </div>
              <div className="div">
                <p>{formatNumber(item.statistics.viewCount)}</p>
                <p>{UploadTime(item.snippet.publishedAt)}</p>
              </div>
            </div>
          </Link>
        )) : ""}
      </div>
    </div>
  )
}

export default Feed