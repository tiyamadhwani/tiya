import { Link, Route, Routes } from "react-router-dom"
import Game from "./game";
import About from "./about";

const App = () => {
  return (
    <>
    <nav>
      < Link to="/">Home</Link>
      < Link to="/about-us">About Us</Link>
    </nav>
    <Routes>
      <Route path="/" element={<Game />} />
      <Route path="/about-us" element={<About />} />
      <Route path="*" element={<div> 404 page not Found </div>} />
    </Routes>
     </>
  );
};

export default App;