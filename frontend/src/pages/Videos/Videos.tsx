import React from "react";
import VideoGrid from "../../components/VideoGrid/VideoGrid";

const Videos: React.FC = () => {
  return (
    <div className="bg-custom-background bg-cover bg-center min-h-screen flex flex-col items-center justify-center">
      <VideoGrid />
    </div>
  );
};

export default Videos;
