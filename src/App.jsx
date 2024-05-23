import { useEffect, useState } from "react";
import Navigation from "./Components/Navigation";
import MoviesList from "./Components/MoviesList";
import Heading from "./Components/Heading";

function App() {
  const [movies, setMovies] = useState([]);
  const [searchValue, setSearchValue] = useState("");

  useEffect(() => {
    if (searchValue) {
      getMovieRequest(searchValue);
    } else {
      getRandomMovies();
    }
  }, [searchValue]);

  const getMovieRequest = async (searchValue) => {
    const url = `http://www.omdbapi.com/?s=${searchValue}&apikey=2057d433`;
    const response = await fetch(url);
    const responseJson = await response.json();
    if (responseJson.Search) {
      setMovies(responseJson.Search);
    }
    //console.log(responseJson);
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

  const randomSearchQuery = () => {
    const keywords = [
      "actions",
      "comedy",
      "drama",
      "horror",
      "thriller",
      "adventure",
      "cartoon",
      "anime",
    ];
    const randomIndex = Math.floor(Math.random() * keywords.length);

    return keywords[randomIndex];
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
        <MoviesList movieslist={movies} />
      </section>
    </>
  );
}

export default App;
