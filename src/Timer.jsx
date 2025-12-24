import { useState, useEffect } from "react";

function Timer() {
  const [time, setTime] = useState(0);
  const [start, setStart] = useState(false);

  useEffect(() => {
    if (!start) return;

    const id = setInterval(() => {
      setTime(t => t + 1);
    }, 1000);

    return () => clearInterval(id);
  }, [start]);

  return (
    <>
      <h2>{time}</h2>
      <button onClick={() => setStart(!start)}>Start / Stop</button>
    </>
  );
}
export default Timer