import React, { useEffect, useState } from 'react';
import './Video.css';
import { Link, useParams } from 'react-router-dom';
import data from '../../API/data.json';
import APIKEY from '../../API/apikey';
import { BiLike } from "react-icons/bi";
import { BiDislike } from "react-icons/bi";
import { IoIosShareAlt } from "react-icons/io";
import { FaArrowDown } from "react-icons/fa";
import { HiOutlineDotsHorizontal } from "react-icons/hi";
const Video = () => {
  const { id } = useParams();
  const [suggestionVideo, setSuggestionVideo] = useState([]);
  const [apiData, setApiData] = useState(null);

  const fetchVideoData = async () => {
    const videoUrl = `https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&id=${id}&key=${APIKEY}`;

    await fetch(videoUrl)
      .then(res => res.json())
      .then(data => setApiData(data.items[0]));
  };

  useEffect(() => {
    fetchVideoData();
  }, [id]);

  useEffect(() => {
    setSuggestionVideo(data);
  }, []);

  function timeAgo(timestamp) {
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

  return (
    <div className="videoContainer">
      <div className="mainvideo">
        <iframe
          src={`https://www.youtube.com/embed/${id}?autoplay=1&si=YVcIVRbUK4pJR_iQ`}
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerPolicy="strict-origin-when-cross-origin"
          allowFullScreen>
        </iframe>
        <div className="iframedetails">
          {apiData &&
            <>
              <h3>{apiData.snippet.title}</h3>
              <div className="othervideo">
                <div className="name-subscribe">
                  <h4>{apiData.snippet.channelTitle}</h4>
                  <p>Subscribe</p>
                </div>
                <div className="tools">
                  <div className="like-dislike">
                    <div className="Like-container">
                      <p className='like-hover'><BiLike className='like' /></p>
                      <p>{formatNumber(apiData.statistics.likeCount)}</p>
                    </div>
                    <div className='line-p'></div>
                    <BiDislike className='like dislike' />
                  </div>
                  <div className="share align">
                  <span><IoIosShareAlt className='iconss'/></span>
                  <span>Share</span>
                  </div>
                  <div className="download align">
                  <span><FaArrowDown className='iconss'/></span>
                  <span>Download</span>
                  </div>
                  <div className="more align">
                 <span> <HiOutlineDotsHorizontal className='iconss'/></span>
                 </div>
                </div>
              </div>
            </>
          }
        </div>
      </div>
      <div className="suggestion">
        {suggestionVideo.map((item, index) => (
          <Link key={index} to={`/video/${item.id.videoId}`}>
            <div className="suggestionItem" key={index}>
              <div className="Card">
                <img src={item.snippet.thumbnails.high.url} alt="thumbnail" />
              </div>
              <div className="details">
                <h4>{item.snippet.title.slice(0, 55)}</h4>
                <div>
                  <p>{item.snippet.channelTitle}</p>
                  <p>
                    {formatNumber(item.statistics.viewCount)} • {timeAgo(item.snippet.publishedAt)}
                  </p>
                </div>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Video;
