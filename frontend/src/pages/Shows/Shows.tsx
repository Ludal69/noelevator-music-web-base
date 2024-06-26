import React, { useState } from "react";
import { SocialIcon } from "react-social-icons";
import moment from "moment";

const showsData = [
  {
    title: "Concert Spade Diamonds x No Elevator",

    location: "Paris, France",
    venue: "Le Truskel",
    link: "#",

    mapLink: "https://maps.app.goo.gl/ZmUnYyjNMBQSf9k57",
    facebookEvent: "https://fb.me/e/2KkDlXbYv",
    poster: require("../../assets/posters/truskel_2020.png"),
    timestamp: moment("2020-02-20 20:00", "YYYY-MM-DD HH:mm").unix(),
  },
  {
    title: "Concert Rock! Debarulers + No Elevator",

    location: "Lyon, France",
    venue: "L'Ambuscade",
    link: "#",

    mapLink: "https://maps.app.goo.gl/TedKiUjBPr58s1E58",
    facebookEvent: "https://fb.me/e/1NuhKe47i",
    poster: require("../../assets/posters/ambuscade_2021.jpg"),
    timestamp: moment("2021-11-07 20:00", "YYYY-MM-DD HH:mm").unix(),
  },
  {
    title: "NO ELEVATOR x DEAF WANKERS",

    location: "Paris, France",
    venue: "Le Truskel",
    link: "#",

    mapLink: "https://maps.app.goo.gl/ZmUnYyjNMBQSf9k57",
    facebookEvent: "https://fb.me/e/19GPJ9zzW",
    poster: require("../../assets/posters/truskel_2021.png"),
    timestamp: moment("2021-12-01 20:00", "YYYY-MM-DD HH:mm").unix(),
  },
  {
    title: "NO ELEVATOR au SCANDLE",

    location: "Paris, France",
    venue: "SCANDLE",
    link: "#",

    mapLink: "https://maps.app.goo.gl/arMhKdDU6jxTivws8",
    facebookEvent: "https://fb.me/e/2NF25gxXE",
    poster: require("../../assets/posters/scandle_2022.png"),
    timestamp: moment("2022-01-12 20:00", "YYYY-MM-DD HH:mm").unix(),
  },
  {
    title: "NO ELEVATOR à LA FOISONNANTE",

    location: "Paris, France",
    venue: "La Foisonnante",
    link: "#",

    mapLink: "https://maps.app.goo.gl/EX4TyaGdpB5zHScT9",
    facebookEvent: "https://fb.me/e/1BG4yIXdi",
    poster: require("../../assets/posters/foisonnante_2022.png"),
    timestamp: moment("2022-02-16 20:00", "YYYY-MM-DD HH:mm").unix(),
  },
];

// Sort shows by timestamp in descending order
const sortedShowsData = showsData.sort((a, b) => b.timestamp - a.timestamp);

const Shows: React.FC = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const showsPerPage = 4;

  const indexOfLastShow = currentPage * showsPerPage;
  const indexOfFirstShow = indexOfLastShow - showsPerPage;
  const currentShows = sortedShowsData.slice(indexOfFirstShow, indexOfLastShow);

  const totalPages = Math.ceil(showsData.length / showsPerPage);

  const paginate = (pageNumber: number) => setCurrentPage(pageNumber);

  return (
    <div className="min-h-screen bg-custom-background bg-cover bg-center text-white p-8">
      <div className="container mx-auto">
        <h1 className="text-5xl font-bold text-center mb-8">Upcoming Shows</h1>
        <p className="text-center mb-12">Join us at our upcoming concerts!</p>
        <div className="flex flex-col items-center">
          {currentShows.map((show, index) => (
            <div
              key={index}
              className="w-full max-w-4xl bg-gray-800 bg-opacity-75 rounded-lg shadow-lg p-6 mb-8"
            >
              <div className="flex flex-col md:flex-row justify-between items-center border-b border-gray-700 pb-4 mb-4">
                <div className="flex-shrink-0 mb-4 md:mb-0 md:mr-4">
                  <div className="w-32 h-48 overflow-hidden rounded-lg shadow-md">
                    <img
                      src={show.poster}
                      alt="Show Poster"
                      className="object-contain w-full h-full"
                    />
                  </div>
                </div>
                <div className="flex-1 text-center md:text-left">
                  <h1 className="text-2xl font-bold">{show.title}</h1>
                  <h2 className="text-2xl">
                    {moment.unix(show.timestamp).format("D MMMM YYYY, HH:mm")}
                  </h2>
                  <p>{moment.unix(show.timestamp).format("dddd")}</p>
                  <p className="text-lg">{show.location}</p>
                  <p className="text-lg">{show.venue}</p>
                  <p className="text-lg">
                    {moment.unix(show.timestamp).format("HH:mm")}
                  </p>
                </div>
                <div className="flex flex-col md:items-end space-y-2 mt-4 md:mt-0">
                  <a
                    href={show.link}
                    className="px-4 py-2 border border-custom-yellow text-custom-yellow rounded-full hover:bg-custom-yellow hover:text-gray-800 transition duration-300"
                  >
                    Buy Tickets
                  </a>
                  <a
                    href={show.mapLink}
                    className="px-4 py-2 border border-custom-yellow text-custom-yellow rounded-full hover:bg-custom-yellow hover:text-gray-800 transition duration-300"
                  >
                    View on Google Maps
                  </a>
                  <a
                    href={show.facebookEvent}
                    className="px-4 py-2 border border-custom-yellow text-custom-yellow rounded-full hover:bg-custom-yellow hover:text-gray-800 transition duration-300 flex items-center"
                  >
                    <SocialIcon
                      network="facebook"
                      style={{ height: 20, width: 20, marginRight: "8px" }}
                    />
                    Share on Facebook
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="flex justify-center mt-8">
          {Array.from({ length: totalPages }, (_, index) => (
            <button
              key={index}
              onClick={() => paginate(index + 1)}
              className={`px-4 py-2 mx-1 border border-custom-yellow text-custom-yellow rounded-full hover:bg-custom-yellow hover:text-gray-800 transition duration-300 ${
                currentPage === index + 1
                  ? "bg-custom-yellow text-gray-800"
                  : ""
              }`}
            >
              {index + 1}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Shows;
