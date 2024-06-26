import React from "react";
import VideoGrid from "../../components/VideoGrid/VideoGrid";
import PhotoGrid from "../../components/PhotoGrid/PhotoGrid";

const Media: React.FC = () => {
  return (
    <div className="bg-custom-background bg-cover bg-center min-h-screen flex flex-col items-center justify-center">
      <h2 className="text-2xl font-bold mb-4 text-custom-yellow">Videos</h2>
      <VideoGrid />
      <h2 className="text-2xl font-bold mb-4 text-custom-yellow">Photos</h2>
      <PhotoGrid />
    </div>
  );
};

export default Media;
