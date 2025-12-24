import { useState } from "react";

function Users() {
  const [users, setUsers] = useState([]);

  const addUser = () => {
    setUsers([...users, { id: Date.now(), name: "John" }]);
  };

  return (
    <>
      <button onClick={addUser}>Add User</button>
      {users.map(user => <p key={user.id}>{user.name}</p>)}
    </>
  );
}
export default Users