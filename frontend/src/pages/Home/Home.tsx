import React from "react";
import YouTubeVideo from "../../components/YoutubeVideo/YoutubeVideo";

const Home: React.FC = () => {
  return (
    <div className="bg-custom-background bg-cover bg-center min-h-screen flex flex-col items-center justify-center">
      <YouTubeVideo />
    </div>
  );
};

export default Home;
