import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { callGetMenuListAPI } from "../../api/MenuAPICalls";
import MenuItem from "../item/MenuItem";

function MenuList() {
  const dispatch = useDispatch();
  const result = useSelector((state) => state.menuReducer);
  const menuList = result.menuList;

  console.log("MenuList result: ", result);

  useEffect(() => {
    /* menuList 호출 API*/
    dispatch(callGetMenuListAPI()); // 함수가 넘어가는 상태
  }, [MenuList]);

  /*menuList가 존재할 때만*/
  return (
    <div className="menuBox">
      {menuList &&
        menuList.map((menu) => <MenuItem key={menu.id} menu={menu} />)}
    </div>
  );
}

export default MenuList;
