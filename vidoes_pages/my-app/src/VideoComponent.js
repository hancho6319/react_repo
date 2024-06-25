// src/VideoComponent.js
import React from 'react';

const VideoComponent = () => {
  return (
    <div>
      <h1>My Video</h1>
      <video width="600" controls>
        <source src="/videos/example.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </div>
  );
};

export default VideoComponent;
