import React from 'react'
import "./Video.css"
import PLayvideo from './Playvideo/PLayvideo'
import Recommanded from './Recommanded/Recommanded'
import { useParams } from 'react-router-dom'
// import PLayvideo from './Playvideo/PLayvideo'

const Video = () => {
  const {VideoId,categoryId}=useParams();
  return (
    <div className='play-container'>  
      <PLayvideo VideoId={VideoId}/>
      <Recommanded/>
    </div>
  )
}

export default Video
