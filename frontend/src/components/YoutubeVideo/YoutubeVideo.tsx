import React from "react";

const YouTubeVideo: React.FC = () => {
  return (
    <div className="w-full flex justify-center my-8">
      <div className="w-10/12 md:w-8/12 lg:w-7/12">
        <iframe
          className="w-full h-64 md:h-96"
          src="https://www.youtube.com/embed/-9-7-v_KY50"
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
