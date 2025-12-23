import type { ReactNode } from "react";
import "./ButtonPrim.scss";

interface ButtonPrimProps {
  value: string;
  style?: string;
  logo?: ReactNode;
  to: string;
}

const ButtonPrim = ({ value = "Error", style, logo, to }: ButtonPrimProps) => {
  return (
    <a href={to} className={`button-primary ${style || ""} `}>
      {logo && <span className="logo">{logo}</span>}
      {value}
    </a>
  );
};

export default ButtonPrim;
