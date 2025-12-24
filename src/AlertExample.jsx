import { useEffect, useState } from "react";

function AlertExample() {
  const [active, setActive] = useState(false);

  useEffect(() => {
    if (active) alert("Activated!");
  }, [active]);

  return <button onClick={() => setActive(true)}>Activate</button>;
}
export default AlertExample