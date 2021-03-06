import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import { useSpring, animated } from 'react-spring';
import { motion } from "framer-motion";
// import "./styles.css";
import VideoListItem from '../VideoListItem';




const VideoList = (props) =>{
  const [isActive, setIsActive] = React.useState(false);

    const videoItems = props.videos.map((video) => {
    return <VideoListItem
              onVideoSelect = {props.onVideoSelect}
              key={video.etag}
              video={video}
            />;
  });
  return (
    <div>
    <ul className="col-md-4 list-group">
      {videoItems}
    </ul>
    
    <motion.div
      className="block"
      onClick={() => setIsActive(!isActive)}
      animate={{
        rotate: isActive ? 180 : 360
      }}
    >
      Hello Framer motion
    </motion.div>
   
    </div>
  )
}

export default VideoList;
