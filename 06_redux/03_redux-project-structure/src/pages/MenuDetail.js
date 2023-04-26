import { useParams } from "react-router-dom";
import Menu from "../components/item/Menu";

function MenuDetail() {
  const { id } = useParams();

  return (
    <>
      <h1>메뉴 상세</h1>
      <Menu id={id} />
    </>
  );
}

export default MenuDetail;
