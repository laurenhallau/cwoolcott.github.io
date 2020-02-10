import React, { useState, useEffect } from "react";


const Timer = () => {
  const [isOn, setIsOn] = useState(false);
  const [timer, setTimer] = useState(0);

  /* Pass empty array as second argument so you onlz run the effect on
mount and unmount
 */
  useEffect(() => {
    let interval;

    if (isOn) {
      interval = setInterval(() => setTimer(timer => timer + 1), 1000);
    }
    return () => clearInterval(interval);
  },
    [isOn]
  );

  const onReset = () => {
    setIsOn(false);
    setTimer(0);
  };

  return (
    <div>
      <p class="lead text-muted">Timer: {timer}</p>
      {!isOn && (
        <button type="button" className="btn btn-primary" onClick={() => setIsOn(true)}>
          Start
        </button>
      )}
      {isOn && (
        <button type="button" className="btn btn-warning" onClick={() => setIsOn(false)}>
          Stop
        </button>
      )}
      <br /><br />
      <button
        type="button"
        className="btn btn-info"
        disabled={timer === 0}
        onClick={onReset}
      >
        Reset
      </button>
    </div>
  );
};

export default Timer;
