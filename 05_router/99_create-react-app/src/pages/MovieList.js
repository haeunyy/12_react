import { useState, useEffect } from "react";
import { getMovieList } from "../api/MovieAPI";
import MovieItem from "../components/MovieItem";

function MovieList() {
  const [movieList, setMovieList] = useState();
  const [value, setValue] = useState("");

  const onChange = (e) => {
    setValue(e.target.value);
  };

  useEffect(() => {
    getMovieList(value).then((data) => setMovieList(data));
    console.log(getMovieList());
  }, []);

  return (
    <div>
      <h2>주간/주말 박스오피스 : </h2>
      <select value={value} onChange={onChange}>
        <option value="0">주간</option>
        <option value="1">주말</option>
        <option value="2">주중</option>
      </select>
      <div className="content-row">{movieList}</div>
    </div>
  );
}

export default MovieList;
