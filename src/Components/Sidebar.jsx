import React, { useEffect } from 'react'
import homeicon from "../assets/home.svg";
import shortsicon from "../assets/shorts.svg";
import subscription from "../assets/subscription.svg";
import you from '../assets/you.svg'
import history from '../assets/history.svg'
import playlist from "../assets/playlists.svg";
import yourvideos from "../assets/yourvideos.svg";
import watchlater from "../assets/watchlater.svg";
import likedvideos from "../assets/likedvideos.svg";
import trending from "../assets/trending.svg";
import shopping from "../assets/shopping.svg";
import music from "../assets/music.svg";
import movies from "../assets/movies.svg";
import live from "../assets/live.svg";
import gaming from "../assets/gaming.svg";
import news from "../assets/news.svg";
import sports from "../assets/sports.svg";
import courses from "../assets/courses.svg";
import fashion from "../assets/fashion.svg";
import podcasts from "../assets/podcasts.svg";
import ytpremium from "../assets/ytpremium.svg";
import ytstudio from "../assets/ytstudio.svg";
import ytmusic from "../assets/ytmusic.svg";
import ytkids from "../assets/ytkids.svg";
import setting from "../assets/setting.svg";
import report from "../assets/report.svg";
import help from "../assets/help.svg";
import send from "../assets/send.svg";
import './Sidebar.css'
import Feed from './Feed';

const Sidebar = ({ Sidebar }) => {

  useEffect(() => {
    const updateLayout = () => {
      const sidebarContainer = document.querySelector('.sidebar-container');
      const sidebar = document.querySelector('.sidebar');
      const smallSidebar = document.querySelector('.smallsidebar');
      const homeContainer = document.querySelector('.homeContainer');

      if (!sidebarContainer || !sidebar || !smallSidebar || !homeContainer) {
        console.error("One or more elements are not found in the DOM");
        return;
      }

      if (window.innerWidth >= 768) {
        sidebarContainer.style.display = "block";
        sidebarContainer.style.height = "92vh";
      }

      const x = window.matchMedia("(max-width: 768px)");
      if (!x.matches) {
        if (Sidebar) {
          sidebar.style.display = "block";
          sidebarContainer.style.display = "block";
          smallSidebar.style.display = "none";
          sidebarContainer.style.overflowY = "scroll";
          sidebarContainer.style.width = "200px";
          homeContainer.style.width = "calc(100vw - 200px)";
        } else {
          sidebar.style.display = "none";
          smallSidebar.style.display = "block";
          sidebarContainer.style.overflowY = "hidden";
          sidebarContainer.style.width = "60px";
          homeContainer.style.width = "calc(100vw - 60px)";
        }
      } else {
        if (Sidebar) {
          sidebarContainer.style.display = "block";
          sidebarContainer.style.height = "92vh";
          smallSidebar.style.display = "none";
          sidebarContainer.style.overflowY = "scroll";
          sidebarContainer.style.width = "200px";
          homeContainer.style.width = "100vw";
          sidebar.style.display = "block";
        } else {
          sidebarContainer.style.display = "none";
          homeContainer.style.width = "100%";
          sidebarContainer.style.overflowY = "hidden";
        }
      }
    };

    updateLayout();
    window.addEventListener('resize', updateLayout);

    return () => {
      window.removeEventListener('resize', updateLayout);
    };

  }, [Sidebar]);
  return (
    <div className="main">
      <div className="sidebar-container">
        <div className="sidebar">
          <div className="sidebar-icons">
            <div className='toggle-sidebar-icons top3-icons'>
              <img src={homeicon} alt="" className='filter' />
              <p>Home</p>
            </div>
            <div className='toggle-sidebar-icons top3-icons'>
              <img src={shortsicon} alt="" className='filter' />
              <p>Shorts</p>
            </div>
            <div className='toggle-sidebar-icons top3-icons'>
              <img src={subscription} alt="" className='filter' />
              <p>Subscription</p>
            </div>
            <div className="line"></div>
            <div className='toggle-sidebar'>
              <div className="toggle-sidebar-icons">
                <img src={you} alt="" className='filter' />
                <p>Your Channel</p>
              </div>
              <div className="toggle-sidebar-icons">
                <img src={history} alt="" className='filter' />
                <p>History</p>
              </div>
              <div className="toggle-sidebar-icons">
                <img src={playlist} alt="" className='filter' />
                <p>Playlist</p>
              </div>
              <div className="toggle-sidebar-icons">
                <img src={yourvideos} alt="" className='filter' />
                <p>yourvideos</p>
              </div>
              <div className="toggle-sidebar-icons">
                <img src={watchlater} alt="" className='filter' />
                <p>watchlater</p>
              </div>
              <div className="toggle-sidebar-icons">
                <img src={likedvideos} alt="" className='filter' />
                <p>likedvideos</p>
              </div>
              <div className="line"></div>
              <div className="toggle-sidebar-icons">
                <img src={trending} alt="" className='filter' />
                <p>trending</p>
              </div>
              <div className="toggle-sidebar-icons">
                <img src={shopping} alt="" className='filter' />
                <p>shopping</p>
              </div>
              <div className="toggle-sidebar-icons">
                <img src={music} alt="" className='filter' />
                <p>music</p>
              </div>
              <div className="toggle-sidebar-icons">
                <img src={movies} alt="" className='filter' />
                <p>movies</p>
              </div>
              <div className="toggle-sidebar-icons">
                <img src={live} alt="" className='filter' />
                <p>live</p>
              </div>
              <div className="toggle-sidebar-icons">
                <img src={gaming} alt="" className='filter' />
                <p>gaming</p>
              </div>
              <div className="toggle-sidebar-icons">
                <img src={news} alt="" className='filter' />
                <p>news</p>
              </div>
              <div className="toggle-sidebar-icons">
                <img src={courses} alt="" className='filter' />
                <p>courses</p>
              </div>
              <div className="toggle-sidebar-icons">
                <img src={sports} alt="" className='filter' />
                <p>sport</p>
              </div>
              <div className="toggle-sidebar-icons">
                <img src={fashion} alt="" className='filter' />
                <p>fashion & Beauty</p>
              </div>
              <div className="toggle-sidebar-icons">
                <img src={podcasts} alt="" className='filter' />
                <p>podcasts</p>
              </div>

              <div className="line"></div>


              <div className="toggle-sidebar-icons">
                <img src={ytpremium} alt="" className='toggle-icons' />
                <p>YouTube Premium</p>
              </div>

              <div className="toggle-sidebar-icons">
                <img src={ytstudio} alt="" className='toggle-icons' />
                <p>youtube studio</p>
              </div>

              <div className="toggle-sidebar-icons">
                <img src={ytmusic} alt="" className='toggle-icons' />
                <p>Playlist</p>
              </div>

              <div className="toggle-sidebar-icons">
                <img src={ytkids} alt="" className='toggle-icons' />
                <p>youtube kids</p>
              </div>

              <div className="line"></div>
              <div className="toggle-sidebar-icons">
                <img src={setting} alt="" className='filter' />
                <p>setting</p>
              </div>

              <div className="toggle-sidebar-icons">
                <img src={report} alt="" className='filter' />
                <p>report history</p>
              </div>

              <div className="toggle-sidebar-icons">
                <img src={help} alt="" className='filter' />
                <p>help</p>
              </div>

              <div className="toggle-sidebar-icons">
                <img src={send} alt="" className='toggle-icons filter' />
                <p>send feedback</p>
              </div>
            </div>
          </div>
        </div>

        <div className="smallsidebar">
          <div className="icons">
            <img src={homeicon} alt="" className='filter' />
            <p>home</p>
          </div>
          <div className="icons">
            <img src={shortsicon} alt="" className='filter' />
            <p>shorts</p>
          </div>
          <div className="icons">
            <img src={subscription} alt="" className='filter' />
            <p>subscription</p>
          </div>
        </div>
      </div>
      <div className="homeContainer">
        <Feed sidebar={Sidebar} />
      </div>
    </div>
  )
}

export default Sidebar
