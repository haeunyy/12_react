const API_KEY = "2e8ffd08a9f12c95e7213a91216e9d2f";

const getDateFormat = () => {
  const today = new Date();
  return `${today.getFullYear()}${
    today.getMonth() < 10 ? "0" + (today.getMonth() + 1) : today.getMonth() + 1
  }${today.getDate() - 1}
  `;
};
export async function getMovieList(value) {
  const url = `https://kobis.or.kr/kobisopenapi/webservice/rest/boxoffice/searchWeeklyBoxOfficeList.json?key=${API_KEY}&targetDt=20230421&weekGb=${value}`;

  console.log(url);
  const res = await fetch(url);
  const data = await res.json();

  return data.boxOfficeResult.weeklyBoxOfficeList;
}
