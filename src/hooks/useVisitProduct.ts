import { useNavigate } from "react-router-dom";

export default function useVisitProduct() {
  const navigate = useNavigate();

  function visit(id: number) {
    navigate("/product");
  }

  return visit;
}
