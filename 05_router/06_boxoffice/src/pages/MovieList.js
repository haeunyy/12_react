import { useEffect, useState } from "react";
import { getMovieList } from "../api/MovieAPI";
import MovieItem from "../components/MovieItem";

function MovieList() {
  const [movieList, setMovieList] = useState();

  useEffect(() => {
    getMovieList().then((data) => setMovieList(data));
  }, []);

  console.log(movieList);

  return (
    <div className="content-row">
      {movieList &&
        movieList.map((movie) => (
          // 반복으로 돌릴때는 key가 있어야한다.
          <MovieItem key={movie.movieCd} movie={movie} />
        ))}
    </div>
  );
}

export default MovieList;
