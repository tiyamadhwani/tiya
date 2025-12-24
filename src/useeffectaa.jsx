import { useEffect } from "react";
import { useState } from "react";


const Practise = () =>{
     const [count, setCount] = useState(0);
     const [time, settime] = useState(true);

     const UpdateTime = () => {
    settime(!time);
     }
  useEffect(() => { 
    setTimeout(() => {
      setCount((count) => count + 1);
    }, 1000);
  } , [time]);

  return (<><h1>I've rendered {count} times!</h1>
  <button
        type="button"
        onClick={() => UpdateTime('time')}
      >time</button>
  </>)
}
export default Practise
