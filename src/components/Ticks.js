import React from "react";
import "./ticks.css";

const Ticks = () => {
  const numTicks = 12;
  return (
    <>
      {new Array(numTicks).fill("").map((_, i) => (
        <div
          key={i}
          className="tick"
          style={{
            transform: `translate(0, -100%) rotate(${(360 / numTicks) * i}deg)`,
          }}
        >
          {i === 0 ? numTicks : i}
        </div>
      ))}
    </>
  );
};

export default Ticks;

