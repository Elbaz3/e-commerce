import "./ProductActBtn.scss";

const ProductActBtn = ({
  image,
  alter,
  action,
  id,
  liked,
  type,
}: {
  image: string;
  alter: string;
  action?: (id: number, type: string) => void;
  id: number;
  liked?: boolean;
  type: "visit" | "delete" | "like";
}) => {
  return (
    <>
      <div
        className={`act ${liked ? "active" : ""}`}
        onClick={() => action?.(id, type)}
      >
        <img src={image} alt={alter} width={16} loading="lazy" />
      </div>
    </>
  );
};

export default ProductActBtn;
