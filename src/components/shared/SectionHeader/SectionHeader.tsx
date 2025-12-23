import type { ReactNode } from "react";
import "./SectionHeader.scss";

interface SectionHeaderProps {
  title?: string;
  subTitle?: string;
  rightElement?: ReactNode;
  children?: ReactNode;
}

const SectionHeader = ({ title, subTitle, children }: SectionHeaderProps) => {
  return (
    <div className="section-header">
      <div className="section-header__text">
        <div className="section-header__text__title">{title}</div>
        <div className="section-header__text__sub-title">{subTitle}</div>
      </div>
      <div className="section-header__content ">{children}</div>
    </div>
  );
};

export default SectionHeader;
