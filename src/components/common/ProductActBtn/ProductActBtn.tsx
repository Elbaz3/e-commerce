import "./ProductActBtn.scss";

const ProductActBtn = ({
  image,
  alter,
  action,
  id,
}: {
  image: string;
  alter: string;
  action: (id: number) => void;
  id: number;
}) => {
  return (
    <div className="act" onClick={() => action(id)}>
      <img src={image} alt={alter} width={16} loading="lazy" />
    </div>
  );
};

export default ProductActBtn;
