import { toggleWishList } from "@store/wishList/wishListSlice";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

export default function useVisitProduct() {
  const navigate = useNavigate();

  const dispatch = useDispatch();

  function visit(id: number, type: string) {
    if (type === "visit") {
      navigate("/product");
    } else if (type === "like" || type === "delete") {
      dispatch(toggleWishList(id));
    }
  }

  return visit;
}
