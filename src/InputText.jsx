import { useState } from "react";

function InputText() {
  const [name, setName] = useState("");

  return (
    <>
      <input onChange={(e) => setName(e.target.value)} />
      <p>Hello {name}</p>
    </>
  );
}

export default InputText
