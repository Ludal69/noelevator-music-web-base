import React from "react";
import YouTubeVideo from "../YoutubeVideo/YoutubeVideo";

interface Video {
  id: string;
  title: string;
}

const videos: Video[] = [
  { id: "lxqq84YYwyM?si=d61Kls-DedHqOVIE", title: "Placeholder" },
  {
    id: "a44c65_389M?si=ylWXIrdLKlZD2ir6",
    title: "Meant To Collide (Live Session In Paris, Jan 2022)",
  },
  {
    id: "-9-7-v_KY50?si=pYRFZqePlQjGSK_t",
    title: "Ground Floor (2022, Full Album, Rock)",
  },
  {
    id: "qqlYKNU1pZs?si=iG7q7CJKkJ7LGPLY",
    title: "Favorite Toy (Rooftop Acoustic Sessions)",
  },
];

const VideoGrid: React.FC = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 p-4">
      {videos.map((video) => (
        <YouTubeVideo
          key={video.id}
          videoUrl={`https://www.youtube.com/embed/${video.id}`}
          title={video.title}
        />
      ))}
    </div>
  );
};

export default VideoGrid;
