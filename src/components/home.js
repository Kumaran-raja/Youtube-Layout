import React from 'react'
import { FaHome } from "react-icons/fa";
import { FaPhotoVideo } from "react-icons/fa";
import { MdSubscriptions } from "react-icons/md";
import { MdOutlinePlaylistPlay } from "react-icons/md";
import { MdOndemandVideo } from "react-icons/md";
import { FaHistory } from "react-icons/fa";
import { MdWatchLater } from "react-icons/md";
import { AiOutlineLike } from "react-icons/ai";
import { FaMicrophone } from "react-icons/fa";
import { IoPersonCircle } from "react-icons/io5";
import { IoMdNotifications } from "react-icons/io";
import { FaVideo } from "react-icons/fa";

import image1 from '../images/1.png'
import image2 from '../images/2.png'
import image3 from '../images/3.png'
import image4 from '../images/4.png'
import image5 from '../images/5.png'
import image6 from '../images/6.png'
import image7 from '../images/7.png'
import image8 from '../images/8.png'
import image9 from '../images/9.png'

import image10 from '../images/10.png'
import image11 from '../images/11.png'
import image12 from '../images/12.png'


import './home.css'
function NavBar() {
  return (
    <div >
        <FaHome className='nav_icon'/><br/>
        <FaPhotoVideo className='nav_icon' /><br/>
        <MdSubscriptions className='nav_icon'/><br/>
        <FaHistory className='nav_icon'/><br/>
        <MdOutlinePlaylistPlay className='nav_icon'/><br/>
        <MdOndemandVideo className='nav_icon'/><br/>
        <MdWatchLater className='nav_icon'/><br/>
        <AiOutlineLike className='nav_icon'/>
    </div>
  )
}
function Main(){
    return(
        <div>
            <div style={{display:"grid", gridTemplateColumns:"85% 15%"}}>
                <div className='search_mic'>
                <input className='searchbar' type='text' placeholder='Search here...'/>
                <FaMicrophone className='top_icon'/>

                </div>
                <div style={{display:"flex", marginTop:"10px"}}>
                    <FaVideo className='top_icon'/>
                    <IoMdNotifications className='top_icon'/>
                    <IoPersonCircle className='top_icon'/>
                </div>

            </div>
            <div className='container'>
                
                <div>
                <img className='thumbnail' src={image11}/>
                <h5>Midnight Gaming</h5>
                    <p>Gaming Sparrow</p>
                    <p>Live</p>
                </div> 
                <div>
                <img className='thumbnail' src={image2}/>
                <h5>The Road to Business Mastery</h5>
                    <p>Business Hint</p>
                    <p>6 Month ago</p>
                </div>
                <div>
                <img className='thumbnail' src={image3}/>
                <h5>Top 10 Shocking Moments</h5>
                    <p>Shocking</p>
                    <p>1 year ago</p>
                </div> 
                <div>
                <img className='thumbnail' src={image4}/>
                <h5>how to Become an Influenrial Leader</h5>
                    <p>Business Hime</p>
                    <p>2 Month ago</p>
                </div>

            </div>
            <div className='container'>
                <div>
                    <img className='thumbnail' src={image5}/>
                    <h5>How to Become a Freelancer</h5>
                    <p>Freelancer Tips</p>
                    <p>1 hour ago</p>
                </div>
                <div>
                <img className='thumbnail' src={image6}/>
                <h5>Boost Your Blog</h5>
                    <p>Blog contents</p>
                    <p>1 month ago</p>
                </div>
                <div>
                <img className='thumbnail' src={image7}/>
                <h5>Best AI Websites 2024</h5>
                    <p>SK Tech</p>
                    <p>just now</p>
                </div> 
                <div>
                <img className='thumbnail' src={image8}/>
                <h5>Manali Complete Tour Guide</h5>
                    <p>Travel and Guide</p>
                    <p>1 year ago</p>
                </div>

            </div>
            <div className='container'>
                <div>
                    <img className='thumbnail' src={image9}/>
                    <h5>Ways to Success</h5>
                    <p>Life Hacking</p>
                    <p>1 year ago</p>
                </div>
                <div>
                <img className='thumbnail' src={image10}/>
                    <h5>Standup Comedy</h5>
                    <p>Comedy</p>
                    <p>3 year ago</p>
                </div>
                <div>
                    <img className='thumbnail' src={image1}/>
                    <h5>How to make Pancakes</h5>
                    <p>Foodie</p>
                    <p>1 year ago</p>
                </div>
                <div>
                <img className='thumbnail' src={image12}/>
                <h5>Gaming Review</h5>
                    <p>Thunder Gaming</p>
                    <p>1 year ago</p>
                </div>

            </div>
        </div>
    )
}

function Call(){
    return(
        <div style={{display:"grid",gridTemplateColumns:"5% 100%"}}>
            <NavBar/>
            <Main/>
        </div>
    )
}
export default Call