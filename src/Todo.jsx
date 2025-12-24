import { useState } from "react";

function Todo() {
  const [todos, setTodos] = useState([]);
  const [task, setTask] = useState("");

  return (
    <>
      <input onChange={(e) => setTask(e.target.value)} />
      <button onClick={() => setTodos([...todos, task])}>Add</button>

      {todos.map((t, i) => <p key={i}>{t}</p>)}
    </>
  );
}
export default Todo