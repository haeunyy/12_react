import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { callGetMenuAPI } from "../../api/MenuAPICalls";

/* 메뉴 상세를 표현할 수 있는 컴포넌트 */
function Menu({ id }) {
  const dispatch = useDispatch();
  const result = useSelector((state) => state.menuReducer);

  const menu = result.menu;
  console.log(result);

  useEffect(() => {
    /* Menu  호출 API*/

    dispatch(callGetMenuAPI(id));
  }, []);
  return (
    <>
      {menu && (
        <>
          <h3>메뉴이름 : {menu.menuName}</h3>
          <h3>메뉴가격 : {menu.menuPrice}</h3>
          <h3>메뉴종류 : {menu.categoryName}</h3>
          <h3>메뉴상세 : {menu.detail.description}</h3>
        </>
      )}
    </>
  );
}

export default Menu;
