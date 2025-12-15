import { useEffect, useState } from "react";
import "./CountDown.scss";

type Props = {
  days?: number;
  hours?: number;
  minutes?: number;
  seconds?: number;
  storageKey?: string; 
};

const CountDown = ({
  days = 0,
  hours = 0,
  minutes = 0,
  seconds = 0,
  storageKey = "flash-sale-end",
}: Props) => {
  const getInitialEndTime = () => {
    const saved = localStorage.getItem(storageKey);
    if (saved) return Number(saved);

    const duration =
      days * 86400 + hours * 3600 + minutes * 60 + seconds;

    const endTime = Date.now() + duration * 1000;
    localStorage.setItem(storageKey, endTime.toString());

    return endTime;
  };

  const [endTime] = useState(getInitialEndTime);
  const [remaining, setRemaining] = useState(
    Math.max(0, Math.floor((endTime - Date.now()) / 1000))
  );

  useEffect(() => {
    if (remaining <= 0) return;

    const interval = setInterval(() => {
      setRemaining(
        Math.max(0, Math.floor((endTime - Date.now()) / 1000))
      );
    }, 1000);

    return () => clearInterval(interval);
  }, [endTime, remaining]);

  const d = Math.floor(remaining / 86400);
  const h = Math.floor((remaining % 86400) / 3600);
  const m = Math.floor((remaining % 3600) / 60);
  const s = remaining % 60;

  return (
    <div className="counter">
      <div>
        <div className="title">Days</div>
        <div>{d}</div>
      </div>
      <span>:</span>
      <div>
        <div className="title">Hours</div>
        <div>{h}</div>
      </div>
      <span>:</span>
      <div>
        <div className="title">Minutes</div>
        <div>{m}</div>
      </div>
      <span>:</span>
      <div>
        <div className="title">Seconds</div>
        <div>{s}</div>
      </div>
    </div>
  );
};

export default CountDown;
