import React, { useEffect, useRef, useState } from "react";
import "../index.css";

const MoviesList = ({ movieslist }) => {
  const swiperRef = useRef(null);

  const handlePrevClick = () => {
    if (swiperRef.current) {
      swiperRef.current.scrollLeft -= swiperRef.current.offsetWidth;
    }
  };

  const handleNextClick = () => {
    if (swiperRef.current) {
      swiperRef.current.scrollLeft += swiperRef.current.offsetWidth;
    }
  };

  return (
    <div className="relative w-full mt-10">
      <button
        className="absolute left-4 top-1/2  z-10 transform -translate-y-1/2 bg-black bg-opacity-50 text-white p-3 rounded-full hover:bg-opacity-100"
        onClick={handlePrevClick}>
        &#9664;
      </button>
      {/* <div className="flex flex-col items-center">
        {randomMovie && (
          <div className="mb-10">
            <img
              src={randomMovie.Poster}
              alt={randomMovie.Title}
              className="rounded-2xl"
            />
            <p className="text-xl mt-2 text-center">{randomMovie.Title}</p>
          </div>
        )}
      </div> */}
      <div
        ref={swiperRef}
        className="flex overflow-x-scroll hide-scrollbar scroll-smooth snap-x snap-mandatory ml-10">
        {movieslist.map((movie, index) => (
          <div key={index} className="flex-shrink-0 snap-start mr-5 mb-10">
            <img
              src={movie.Poster}
              alt={movie.Title}
              className="h-[90%] transition transform hover:scale-105 cursor-pointer"
            />
            <h2 className="mt-3 text-white mr-1 font-extrabold text-center break-all">
              {movie.Title}
            </h2>
            <p className="text-center">{movie.Year}</p>
          </div>
        ))}
      </div>
      <button
        onClick={handleNextClick}
        className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 text-white p-3 rounded-full hover:bg-opacity-100">
        &#9654;
      </button>
    </div>
  );
};

export default MoviesList;
