import React, { useEffect, useState } from "react";
import "../Playvideo/PLayvideo.css";
import Video1 from "../../../Asserts/video.mp4";
import like from "../../../Asserts/like.png";
import dislike from "../../../Asserts/dislike.png";
import share from "../../../Asserts/share.png";
import save from "../../../Asserts/save.png";
import jack from "../../../Asserts/jack.png";
import user_profile from "../../../Asserts/user_profile.jpg";
import Recommanded from "../Recommanded/Recommanded";

const PlayVideo = ({VideoId}) => {
  const [apiData,setApidata]=useState(null);
  const fetchVideoData=async()=>{
    //Fetching videi data
    const videoDetails_url=`https://www.youtube.googleeapis.com/youtube/v3/videos?part=snippet%2contentDetails%2CcontentDetails%2Cstatics&id=${VideoId}&key=${YOU_API_KEY}`
    await fetch(videoDetails_url).then(res=>json()).then(data=>setApidata(data.item[0]))
    // await fetch(videoDetails_url)
  }
  useEffect(()=>{
    fetchVideoData()

 },[])
  return (
    <div className="main-container">
      <div className="play-video">
        {/* <video src={Video1} controls autoPlay muted></video> */}
        <iframe  src={`https://www.youtube.com/embed/${VideoId}?autoplay=1`}  frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
        
        <h3>{apiData?apiData.snippet.title:"Title here"} </h3>
        <div className="play-video-info">
          <p>{apiData?apiData.statistics.viewCount:"16k"}1525 Views &bull; 2 days ago</p>
          <div>
            <span>
              <img src={like} alt="like" />
              124
            </span>
            <span>
              <img src={dislike} alt="dislike" />
              2
            </span>
            <span>
              <img src={share} alt="share" />
              share
            </span>
            <span>
              <img src={save} alt="save" />
              save
            </span>
          </div>
        </div>
        <hr />
        <div className="publisher">
          <img src={jack} alt="jack" />
          <div>
            <p>Web Developer</p>
            <span>1M Subscribers</span>
          </div>
          <button>Subscribe</button>
        </div>
        <div className="vid-decription">
          <p>Channel that makes you feel good</p>
          <p>Subscribe to see more of it</p>
          <hr />
          <h4>130 Comments</h4>
          {/* Repeat comments */}
          {[...Array(4)].map((_, index) => (
            <div key={index} className="comment">
              <img src={user_profile} alt="user" />
              <div>
                <h3>
                  Kack Nikonson<span>1 day ago</span>
                </h3>
                <p>
                  State management: Use something like Redux to manage the cart
                  and products.
                </p>
                <div className="comment-action">
                  <img src={like} alt="like" />
                  <span>244</span>
                  <img src={dislike} alt="dislike" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="side-list">
        <Recommanded/>
      
      </div>
    </div>
  );
};

export default PlayVideo;
