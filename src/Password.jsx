import { useState } from "react";

function Password() {
  const [password, setPassword] = useState("");
  const [show, setShow] = useState(false);

  return (
    <>
      <input type={show ? "text" : "password"} onChange={(e) => setPassword(e.target.value)} />
      <button onClick={() => setShow(!show)}>Show</button>
    </>
  );
}
export default Password