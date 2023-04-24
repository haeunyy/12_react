const API_KEY = "2e8ffd08a9f12c95e7213a91216e9d2f";

const getDateFormat = new Date().toJSON().substring(0, 10).replace(/-/g, "");

export async function getMovieList(value) {
  const url = `https://kobis.or.kr/kobisopenapi/webservice/rest/boxoffice/searchWeeklyBoxOfficeList.json?key=${API_KEY}&targetDt=${getDateFormat}&weekGb=0`;

  const res = await fetch(url);
  const data = await res.json();
  console.log(data.boxOfficeResult.weeklyBoxOfficeList);

  return;
}
