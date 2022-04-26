import React from 'react'
import VideoPlayer from 'react-video-js-player'
import vid from '../image/videoplayback.mp4'
import poster from '../image/sunset.jpg'
import '../CssFiles/VideoDemo.css'

function VideoDemo() {
  return (
    <div className='container' style={{backgroundColor:'SlateGray'}}>
    <h1 style={{color:'maroon'}}>Let's see what we do!!!!</h1>
    <div>
   <VideoPlayer src={vid} poster={poster} 
   playbackRates={[0.5,1,3.85]}></VideoPlayer>
   </div>
   </div>
  )
}

export default VideoDemo