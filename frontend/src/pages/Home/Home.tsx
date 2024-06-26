import React from "react";
import YouTubeVideo from "../../components/YoutubeVideo/YoutubeVideo";

const Home: React.FC = () => {
  return (
    <div className="bg-custom-background bg-cover bg-center min-h-screen flex flex-col items-center justify-center">
      <div className="w-full max-w-2xl px-4 flex justify-center">
        <YouTubeVideo videoUrl="https://www.youtube.com/embed/-9-7-v_KY50" />
      </div>
    </div>
  );
};

export default Home;
