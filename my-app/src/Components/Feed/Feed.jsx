import React, { useEffect, useState } from 'react'
import "../Feed/Feed.css"
import  thumbnail1 from '../../Asserts/thumbnail1.png'
import  thumbnail2 from '../../Asserts/thumbnail2.png'
import  thumbnail3 from '../../Asserts/thumbnail3.png'
import  thumbnail4 from '../../Asserts/thumbnail4.png'
import  thumbnail5 from '../../Asserts/thumbnail5.png'
import  thumbnail6 from '../../Asserts/thumbnail6.png'
import  thumbnail7 from '../../Asserts/thumbnail7.png'
import  thumbnail8 from '../../Asserts/thumbnail8.png'
import { Link } from 'react-router-dom'
import {value_converter , API_KEY} from '../../data'
import Video from '../../Pages/Video/Video'
import moment from 'moment'




const Feed = ({category}) => {
    const[data,setData]=useState([]);
    
    const fetchData=async()=>{
        const videoList_url=`https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=50&regionCode=US&videoCategoryId${category}=&key=${API_KEY}`
await fetch(videoList_url).then(Response=>Response.json()).then(data=>setData(data.items))

    }
    useEffect(()=>{
        fetchData();
    },[category])
  return (
    <div className="feed">
        {data.map((item,index)=>{
            return(
                <Link to ={`video/${item.snippet.categoryId}/${item.id}`} className='card'> 
                <img src={item.snippet.thumbnails.medium.url} alt="" />
                <h2>{item.snippet.title}</h2>
            <h3>{item.snippet.channelTitle}</h3>
            <p>{value_converter(item.statistics.viewCount)}view&bull;{moment(item.snippet.publishedAt).fromNow()} </p>
                  
                </Link>
                   

            )
        })}
         
    </div>
  
  )
}

export default Feed
