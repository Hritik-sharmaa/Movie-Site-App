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
        className="absolute left-4 top-[30%] z-10 bg-black bg-opacity-80 text-white p-5 rounded-full text-5xl hover:bg-opacity-100"
        onClick={handlePrevClick}>
        &lt;
      </button>
      <div
        ref={swiperRef}
        className="flex overflow-x-scroll hide-scrollbar scroll-smooth snap-x snap-mandatory ml-10">
        {movieslist.map((movie, index) => (
          <div
            key={index}
            className="flex-shrink-0 snap-start mr-5 mb-10 w-48 relative group">
            <div className="relative overflow-hidden rounded 2xl h-[90%]">
              <img
                src={movie.Poster}
                alt={movie.Title}
                className="h-full transition transform hover:scale-105 cursor-pointer object-cover"
              />
              <button className="text-red-500 text-xl absolute top-[80%] left-[80%] w-12 h-12 flex justify-center transform -translate-x-1/2 bg-zinc-900 p-3 rounded-full opacity-0 group-hover:opacity-100 transition-opacity hover:bg-zinc-950 hover:text-red-600 ">
                &#10084;
              </button>
            </div>
            <h2 className="mt-3 text-white font-extrabold text-center break-words">
              {movie.Title}
            </h2>
            <p className="text-center text-white">{movie.Year}</p>
          </div>
        ))}
      </div>
      <button
        onClick={handleNextClick}
        className="absolute right-4 top-[30%] bg-black bg-opacity-80 text-white p-5 text-5xl rounded-full hover:bg-opacity-100">
        &gt;
      </button>
    </div>
  );
};

export default MoviesList;
