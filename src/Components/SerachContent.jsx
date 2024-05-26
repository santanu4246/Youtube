import React, { useEffect, useState } from 'react';
import './SearchContent.css';
import { Link, useParams } from 'react-router-dom';
const SearchContent = () => {
    const [searchData, setSearchData] = useState(null);
    const { query } = useParams();
    const APIKEY = 'AIzaSyChQOBQB1rcaHt6ShbNICxjmao62ito8No';
    const GetVideosBySearch = async () => {
        const SearchUrl = `https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=10&q=${query}&type=video&key=${APIKEY}`;
        try {
            const res = await fetch(SearchUrl);
            const data = await res.json();
            setSearchData(data.items);
            console.log(searchData);
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    };

    useEffect(() => {
        GetVideosBySearch();
    }, [query]);
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
        <div className='SearchContentContainer'>

            <div className="maindiv">
            {searchData ? (
                searchData.map((data, index) => (
                    <Link key={index} to={`/video/${data.id.videoId}`}>
                        <div className="wrapperr">
                            <div className="search-card">
                                <img src={data.snippet.thumbnails.medium.url} alt="" />
                            </div>

                            <div className="card-details">
                                <h3>{data.snippet.title.slice(0,55)}</h3>
                                <div className="views-uploadtime">
                                    <span>{data.snippet.channelTitle}</span>
                                    <span>{UploadTime(data.snippet.publishedAt)}</span>
                                </div>
                            <h4 className='desc'>{data.snippet.description.slice(0,50)}</h4>
                            </div>
                        </div>
                    </Link>
                ))
            ) : ""
            }
            </div>
        </div>
    );
};

export default SearchContent;
