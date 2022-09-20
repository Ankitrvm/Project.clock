import { useEffect, useState } from "react";
import "./clock.css";
import Ticks from "./Ticks";

const Clock = (prop) => {
  const [_, setState] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setState((date) => date + 1);
    }, 100);

    return () => clearInterval(interval);
  }, []);

  const date = new Date(Date.now());
  const milli = date.getMilliseconds();
  const second = date.getSeconds() + milli / 10000;
  const minute = date.getMinutes() + second / 60;
  const hour = date.getHours() + minute / 60;

  return (
    <div className="clock">
      <div className="circle">
        <div
          className="hour"
          style={{
            transform: `translate(-50%, -100%) rotate(${(360 / 12) * hour}deg)`,
          }}
        />
        <div
          className="minut"
          style={{
            transform: `translate(-50%, -100%) rotate(${
              (360 / 60) * minute
            }deg)`,
          }}
        />
        <div
          className="second"
          style={{
            transform: `translate(-50%, -100%) rotate(${
              (360 / 60) * second
            }deg)`,
          }}
        />
        <Ticks />
      </div>
    </div>
  );
};
export default Clock;
