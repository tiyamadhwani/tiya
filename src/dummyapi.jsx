import { useEffect, useState } from "react";

const DummyApi = () =>{

    const [data, getData] = useState([]);
  const URL = "https://jsonplaceholder.typicode.com/posts";

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = () => {
       
  };
  return (
    <div>
      <h1>How Display API data in Table in React JS</h1>
      <tbody>
        <tr>
          <th>User ID</th>
          <th>ID</th>
          <th>Title</th>
          <th>Descripation</th>
        </tr>
        {data.map((item, i) => (
          <tr key={i}>
            <td>{item.userId}</td>
            <td>{item.id}</td>
            <td>{item.title}</td>
            <td>{item.body}</td>
          </tr>
        ))}
      </tbody>
    </div>
  );
}
export default DummyApi
