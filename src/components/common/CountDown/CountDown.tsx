import { useEffect, useState } from "react";
import "./CountDown.scss";

type Props = {
  days?: number;
  hours?: number;
  minutes?: number;
  seconds?: number;
};

const CountDown = ({
  days = 0,
  hours = 0,
  minutes = 0,
  seconds = 0,
}: Props) => {
  const [totalSeconds, setTotalSeconds] = useState(
    days * 86400 + hours * 3600 + minutes * 60 + seconds
  );

  useEffect(() => {
    if (totalSeconds <= 0) return;

    const interval = setInterval(() => {
      setTotalSeconds((prev) => prev - 1);
    }, 1000);

    return () => clearInterval(interval);
  }, [totalSeconds]);

  const d = Math.floor(totalSeconds / 86400);
  const h = Math.floor((totalSeconds % 86400) / 3600);
  const m = Math.floor((totalSeconds % 3600) / 60);
  const s = totalSeconds % 60;

  return (
    <div className="counter">
      <div>
        <div className="title">Days</div>
        <div className="">{d}</div>
      </div>
      <span>:</span>
      <div>
        <div className="title">Hours</div>
        <div className="">{h}</div>
      </div>
      <span>:</span>
      <div>
        <div className="title">Minutes</div>
        <div className="">{m}</div>
      </div>
      <span>:</span>
      <div>
        <div className="title">Seconds</div>
        <div className="">{s}</div>
      </div>
    </div>
  );
};

export default CountDown;
