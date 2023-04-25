import { useState, useEffect } from "react";
import { getMovieList } from "../api/MovieAPI";
import MovieItem from "../components/MovieItem";

function MovieList() {
  const [movieList, setMovieList] = useState();
  const [value, setValue] = useState("");
  const [btnValue, setBtnValue] = useState("");

  const onChange = (e) => {
    setValue(e.target.value);
  };

  useEffect(() => {
    getMovieList(value).then((data) => setMovieList(data));
    console.log(getMovieList());
  }, [value]);

  const onChangeHandler = (e) => {
    setBtnValue(e.target.value);
    console.log(e.target.value);
  };

  return (
    <div>
      <h2>주간/주말 박스오피스 : </h2>
      <input type="date" onChange={onChangeHandler} />
      <select value={value} onChange={onChange}>
        <option value="0">주간</option>
        <option value="1">주말</option>
        <option value="2">주중</option>
      </select>
      <div className="content-row">
        {movieList &&
          movieList.map((movie) => (
            <MovieItem key={movie.movieCd} movie={movie} />
          ))}
      </div>
    </div>
  );
}

export default MovieList;
