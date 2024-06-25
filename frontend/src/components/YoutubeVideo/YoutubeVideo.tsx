import React from "react";

interface YouTubeVideoProps {
  videoUrl: string;
}

const YouTubeVideo: React.FC<YouTubeVideoProps> = ({ videoUrl }) => {
  return (
    <div className="w-full flex justify-center my-8">
      <div className="w-11/12 md:w-9/12 lg:w-8/12">
        <iframe
          className="w-full h-64 md:h-96"
          src={videoUrl}
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </div>
    </div>
  );
};

export default YouTubeVideo;
