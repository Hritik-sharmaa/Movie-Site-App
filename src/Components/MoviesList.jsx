import React from "react";

const MoviesList = (props) => {
  return (
    <>
      {props.movieslist.map((movie, index) => (
        <div>
          <img src={movie.Poster} alt="movie title" key={movie.imdbID}/>
        </div>
      ))}
    </>
  );
};

export default MoviesList;
