import "./timer.css";

import { useState } from "react";

const Timer = ( {seconds, setSeconds} ) => {
  

  const changeSeconds = () => {
    if (seconds < 7) {
      setSeconds(seconds + 3);
      if (seconds === 3 || seconds === 5) {
        setSeconds(seconds + 2);
      }
    } else if (seconds === 7) {
      setSeconds(0);
    }
  };

  return (
    <button className="timer-btn" onClick={changeSeconds}>
      <span>{seconds}</span>
    </button>
  );
};

export default Timer;
