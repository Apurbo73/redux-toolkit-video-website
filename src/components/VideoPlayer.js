import React from "react";

const VideoPlayer = ({link,title}) => {
  return (
    <div>
      {/* video player */}
      <iframe
        width="100%"
        className="aspect-video"
        src={link}
        title={title}
        frameBorder=''
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      />
    </div>
  );
};

export default VideoPlayer;
