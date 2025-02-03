import React from "react";
import "./video.css";

function Video() {
  return (
    <div className="video">
      <video autoPlay muted loop>
        <source src="./video/lambo1.mp4" type="video/mp4" />
      </video>

      <div className="video_css_overlay"></div>
    </div>
  );
}

export default Video;
