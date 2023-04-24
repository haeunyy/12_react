import { useSearchParams } from "react-router-dom";
import { getSearchMenu } from "../api/MenuAPI";
import MenuItem from "../components/MenuItem";
import boxStyle from "./Menu.module.css";

function MenuSearchResult() {
  const [useSearchParams] = useSearchParams();

  const [menuList, setMenuList] = useState();

  useEffect(() => {
    setMenuList(getSearchMenu(menuName));
  }, []);

  return (
    <div>
      <h1>검색 된 메뉴</h1>
      <div className={boxStyle.MenuBox}>
        {menuList &&
          menuList.map((menu) => <MenuItem key={menu.menuCode} menu={menu} />)}
      </div>
    </div>
  );
}

export default MenuSearchResult;
