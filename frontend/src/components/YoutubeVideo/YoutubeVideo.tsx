import React from "react";

interface YouTubeVideoProps {
  videoUrl: string;
  title?: string; // Title is now optional
}

const YouTubeVideo: React.FC<YouTubeVideoProps> = ({ videoUrl, title }) => {
  return (
    <div className="w-full max-w-lg flex flex-col items-center my-8">
      <iframe
        className="w-full h-64 md:h-96"
        src={videoUrl}
        title={title || "YouTube video player"}
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      ></iframe>
      {title && (
        <h3 className="text-lg font-bold mt-4 bg-black text-custom-yellow bg-opacity-70 px-2 py-1 rounded">
          {title}
        </h3>
      )}
    </div>
  );
};

export default YouTubeVideo;
