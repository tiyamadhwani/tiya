import { useState } from "react";

function Profile() {
  const [user, setUser] = useState({ name: "", age: 0 });

  return (
    <>
      <input onChange={(e) => setUser({ ...user, name: e.target.value })} />
      <input type="number" onChange={(e) => setUser({ ...user, age: e.target.value })} />
      <p>{user.name} - {user.age}</p>
    </>
  );
}
export default Profile