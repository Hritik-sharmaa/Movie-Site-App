import React, { useEffect, useState } from "react";
import Navigation from "./Components/Navigation";
import MoviesList from "./Components/MoviesList";
import Heading from "./Components/Heading";

function App() {
  const [movies, setMovies] = useState([]);
  const [searchValue, setSearchValue] = useState("");
  const [favourites, setFavourites] = useState([]);
  const [recentMovies, setRecentMovies] = useState([]);

  useEffect(() => {
    if (searchValue) {
      getMovieRequest(searchValue);
    } else {
      getRandomMovies();
      getRecentMovies();
    }
  }, [searchValue]);

  useEffect(() => {
    const movieFavourites =
      JSON.parse(localStorage.getItem("favourites-movie")) || [];
    setFavourites(movieFavourites);
  }, []);

  const getMovieRequest = async (searchValue) => {
    const url = `http://www.omdbapi.com/?s=${searchValue}&apikey=2057d433`;
    const response = await fetch(url);
    const responseJson = await response.json();
    if (responseJson.Search) {
      setMovies(responseJson.Search);
    }
  };

  const getRandomMovies = async () => {
    const randomQuery = randomSearchQuery();
    const url = `http://www.omdbapi.com/?s=${randomQuery}&apikey=2057d433`;
    const response = await fetch(url);
    const responseJson = await response.json();
    if (responseJson.Search) {
      setMovies(responseJson.Search);
    }
  };

  const getRecentMovies = async () => {
    const url = `http://www.omdbapi.com/?s=movie&y=2024&apikey=2057d433`;
    const response = await fetch(url);
    const responseJson = await response.json();
    if (responseJson.Search) {
      setRecentMovies(responseJson.Search);
    }
  };

  const randomSearchQuery = () => {
    const keywords = [
      "action",
      "comedy",
      "drama",
      "horror",
      "thriller",
      "adventure",
      "cartoon",
      "anime",
      "romance",
      "crime",
      "science-fiction",
      "animation",
      "documentary",
    ];
    const randomIndex = Math.floor(Math.random() * keywords.length);
    return keywords[randomIndex];
  };

  const handleFavouritesClick = (movie) => {
    const favouriteMovies = [...favourites, movie];
    setFavourites(favouriteMovies);
    saveToLocalStorage(favouriteMovies);
  };

  const handleRemoveClick = (movie) => {
    const newFavouritesList = favourites.filter(
      (favourite) => favourite.imdbID !== movie.imdbID
    );
    setFavourites(newFavouritesList);
    saveToLocalStorage(newFavouritesList);
  };

  const saveToLocalStorage = (items) => {
    localStorage.setItem("favourites-movie", JSON.stringify(items));
  };

  return (
    <>
      <section>
        <Navigation searchValue={searchValue} setSearchValue={setSearchValue} />
      </section>
      <section>
        <div className="mt-10">
          <Heading label="Movies" textSize="text-4xl" />
        </div>
        <MoviesList
          movieslist={movies}
          favouritesClick={handleFavouritesClick}
          btnIcon="&#10084;"
        />
        <div className="mt-10">
          <Heading label="Recently Released Movies" textSize="text-4xl" />
          <MoviesList
            movieslist={recentMovies}
            favouritesClick={handleFavouritesClick}
            btnIcon="&#10084;"
          />
        </div>
        <div className="mt-10">
          <Heading label="Favourites" textSize="text-4xl" />
          <MoviesList
            movieslist={favourites}
            favouritesClick={handleRemoveClick}
            btnIcon="X"
          />
        </div>
      </section>
    </>
  );
}

export default App;
