import { Link } from "react-router-dom";

function Main() {
  return (
    <div className="content-row">
      <Link to="/movie">
        <h1>박스오피스 영화 순위 보러가기</h1>
      </Link>
    </div>
  );
}

export default Main;
