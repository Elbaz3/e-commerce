import arrow from "@assets/arrow-trend.svg";
import "./SlideButtons.scss";
interface SlideButtonsProps {
  sliderRef: React.RefObject<HTMLDivElement | null>;
}

const SlideButtons = ({ sliderRef }: SlideButtonsProps) => {
  const scroll = (direction: "left" | "right") => {
    if (!sliderRef.current) return;

    const scrollAmount = 300; // <-- control speed here

    sliderRef.current.scrollBy({
      left: direction === "left" ? -scrollAmount : scrollAmount,
      behavior: "smooth",
    });
  };
  return (
    <div className="slide-buttons">
      <div className="arrow arrow-l" onClick={() => scroll("left")}>
        <img src={arrow} alt="arrow" loading="lazy" />
      </div>
      <div className="arrow arrow-r" onClick={() => scroll("right")}>
        <img src={arrow} alt="arrow" loading="lazy" />
      </div>
    </div>
  );
};

export default SlideButtons;
