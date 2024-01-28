import React, { useState,useRef } from 'react'
import Video from './video/Maari.mp4'

const video = () => {
  const[playing, setPlaying] =useState(false);
  const videoElement = useRef(null);

  function handleClick(){
    const nextIsPlaying = !playing;
    setPlaying(nextIsPlaying);

    if(nextIsPlaying){
      videoElement.current.play();
    }else{
      videoElement.current.pause();
    }
  }
  return (
    <div>
      <button onClick={handleClick}>{playing ? `pause` : `play`}</button>
      <video src={Video} height={'500px'} width={'100%'} ref={videoElement} onPlay={()=> setPlaying}></video>
    </div>
  )
}

export default video;
