import menus from "../data/menu-detail.json";

/* 전체 메뉴 리스트 조회 API */
export function getMenuList() {
  return menus;
}

/* 메뉴 코드를 이용하여 메뉴 한 개의 상세 내용 조회 */
export function getMenuDetail(menuCode) {
  return menus.filter((menu) => menu.menuCode === parseInt(menuCode))[0];
}

export function getSearchMenu(menuName) {
  /* filter 함수로 참인 결과만 모아서 배열로 생성한다.
  원래 가지고 있던 menuname과 menuName으로 전달받은 검색어가 맞는게 있는지를 확인하는 작업*/
  return menus.filter((menu) => menu.menuName.match(menuName));
}
