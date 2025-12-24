import { useEffect, useState } from "react";

function RenderCount() {
  const [count, setCount] = useState(0);
  const [running, setRunning] = useState(true);

  useEffect(() => {
    if (!running) return;

    const id = setTimeout(() => {
      setCount(c => c + 1);
    }, 1000);

    return () => clearTimeout(id);
  }, [count, running]);

  return (
    <>
      <h1>Rendered {count} times</h1>
      <button onClick={() => setRunning(!running)}>Toggle</button>
    </>
  );
}
export default RenderCount