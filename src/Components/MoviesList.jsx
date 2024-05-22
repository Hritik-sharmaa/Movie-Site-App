import "../index.css";

const MoviesList = ({ movieslist }) => {
  return (
    <>
      <div className="overflox-x-auto hover:overflow-scroll">
        <div className="flex space-x-4 ">
          {movieslist.map((movie, index) => (
            <div className="flex-shrink-0 ml-10 mt-10 ">
              <img src={movie.Poster} alt={movie.Title} key={index} />
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default MoviesList;
