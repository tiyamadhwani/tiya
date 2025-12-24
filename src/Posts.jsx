import { useEffect, useState } from "react";

function Posts() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then(res => res.json())
      .then(data => setPosts(data.slice(0, 5)));
  }, []);

  return posts.map(p => <p key={p.id}>{p.title}</p>);
}
export default Posts