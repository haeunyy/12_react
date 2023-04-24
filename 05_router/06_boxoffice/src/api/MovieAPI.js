// import ;

const API_KEY = "2e8ffd08a9f12c95e7213a91216e9d2f";

/* 어제 날짜를 포맷에 맞춰서 반환하는 함수 */

const getDateFormat = () => {
  const today = new Date();
  return `${today.getFullYear()}${
    today.getMonth() < 10 ? "0" + (today.getMonth() + 1) : today.getMonth() + 1
  }${today.getDate() - 1}
  `;
};

/* 일별 박스오피스 정보 조회 - 어제 기준 10개 영화 조회 */
export async function getMovieList() {
  const url = `http://www.kobis.or.kr/kobisopenapi/webservice/rest/boxoffice/searchDailyBoxOfficeList.json?key=${API_KEY}&targetDt=${getDateFormat()}`;

  /* 비동기 코드이기 때문에 바로 다음 코드가 실행되지 않도록 then 을 통해 제어해준다.*/
  const response = await fetch(url);

  /* response는 여러 값이 들어가있으므로 원하는 값을 꺼내기 위한 작업 */
  /* 객체의 생김새를 반드시 확인하고 꺼내야 한다. */
  const data = await response.json();

  return data.boxOfficeResult.dailyBoxOfficeList;
}

/* 영화 상세 정보 조회 */
export async function getMovieDetail(movieCd) {
  const url = `https://www.kobis.or.kr/kobisopenapi/webservice/rest/movie/searchMovieInfo.json?key=${API_KEY}&movieCd=${movieCd}`;
  const response = await fetch(url);
  const data = await response.json();

  return data.movieInfoResult.movieInfo;
}
