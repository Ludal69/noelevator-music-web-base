import React from "react";
import spotifyLogo from "../../assets/images/logo_services/spotify.svg";
import groundFloorLogo from "../../assets/images/no_elevator_gf_logo.svg"; // Utiliser import ici
import appleMusicLogo from "../../assets/images/logo_services/apple-music.svg";
import deezerLogo from "../../assets/images/logo_services/deezer.svg";
import soundcloudLogo from "../../assets/images/logo_services/soundcloud.svg";
import youtubeLogo from "../../assets/images/logo_services/youtube.svg";
import bandcampLogo from "../../assets/images/logo_services/bandcamp.svg";

const groundFloorFront = require("../../assets/images/ground_floor_front.jpg");

const Listen: React.FC = () => {
  return (
    <div className="bg-custom-background bg-cover bg-center min-h-screen flex flex-col items-center justify-center text-light p-4">
      <div className="container mx-auto">
        <div className="flex flex-wrap justify-center">
          <div className="w-full lg:w-1/3 text-center mb-5">
            <img
              className="img-fluid w-3/4 mx-auto mb-5"
              src={groundFloorFront}
              alt="Ground Floor Front Cover"
            />
            <img
              className="img-fluid w-1/2 mx-auto"
              src={groundFloorLogo}
              alt="Ground Floor Logo"
            />
          </div>
          <div className="w-full lg:w-1/3 text-center mb-5">
            <h2 className="text-4xl font-bold mb-4 text-custom-yellow">
              Listen!
            </h2>
            <div className="flex flex-col gap-3">
              <a
                className="btn btn-lg rounded-pill btn-outline-light mx-auto w-3/4 flex items-center justify-center p-2 border border-gray-500 rounded-full hover:bg-gray-700 transition duration-300"
                href="https://open.spotify.com/album/3Htt3YPxx5XD0sHidxrtmg?si=LD1GjoEVRvW30oFFQunK0Q"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src={spotifyLogo}
                  alt="Logo Spotify"
                  className="h-8 mr-2"
                />
              </a>
              <a
                className="btn btn-lg rounded-pill btn-outline-light mx-auto w-3/4 flex items-center justify-center p-2 border border-gray-500 rounded-full hover:bg-gray-700 transition duration-300"
                href="https://music.apple.com/fr/album/ground-floor/1604682895?l=en"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src={appleMusicLogo}
                  alt="Logo Apple Music"
                  className="h-8 mr-2"
                />
              </a>
              <a
                className="btn btn-lg rounded-pill btn-outline-light mx-auto w-3/4 flex items-center justify-center p-2 border border-gray-500 rounded-full hover:bg-gray-700 transition duration-300"
                href="https://deezer.page.link/koV1wDnTDpCjpAAS6"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src={deezerLogo} alt="Logo Deezer" className="h-8 mr-2" />
              </a>
              <a
                className="btn btn-lg rounded-pill btn-outline-light mx-auto w-3/4 flex items-center justify-center p-2 border border-gray-500 rounded-full hover:bg-gray-700 transition duration-300"
                href="https://soundcloud.com/noelevator/sets/ground-floor"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src={soundcloudLogo}
                  alt="Logo Soundcloud"
                  className="h-8 mr-2"
                />
              </a>
              <a
                className="btn btn-lg rounded-pill btn-outline-light mx-auto w-3/4 flex items-center justify-center p-2 border border-gray-500 rounded-full hover:bg-gray-700 transition duration-300"
                href="https://www.youtube.com/watch?v=-9-7-v_KY50"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src={youtubeLogo}
                  alt="Logo Youtube"
                  className="h-8 mr-2"
                />
              </a>
              <a
                className="btn btn-lg rounded-pill btn-outline-light mx-auto w-3/4 flex items-center justify-center p-2 border border-gray-500 rounded-full hover:bg-gray-700 transition duration-300"
                href="https://noelevator.bandcamp.com/releases"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src={bandcampLogo}
                  alt="Logo Bandcamp"
                  className="h-8 mr-2"
                />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Listen;
