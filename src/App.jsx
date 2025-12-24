import { Link, Route, Routes } from "react-router-dom"
import Game from "./game";
import About from "./about";
import DummyApi from "./dummyapi";
import Practise from "./useeffectaa";
import Counter from "./counter";
import ThemeToggle from "./ThemeToggle";
import InputText from "./InputText";
import Password from "./Password";
import Timer from "./Timer";
import Profile from "./Profile";
import Todo from "./Todo";
import Users from "./Users";
import Posts from "./Posts";
import Width from "./Width";
import AlertExample from "./AlertExample";
import RenderCount from "./RenderCount";

const App = () => {
  return (
    <>
    <nav>
      < Link to="/">1.Home</Link><br />
      < Link to="/about-us">2.About_Us</Link><br />
      < Link to="/useeffectaa">3.Practise</Link><br />
      < Link to="/counter">4.counter</Link><br />
      < Link to="/ThemeToggle">5.ThemeToggle</Link><br />
      < Link to="/InputText">6.InputText</Link><br />
      < Link to="/Password">7.Password</Link><br />
      < Link to="/Timer">8.Timer</Link><br />
      < Link to="/Profile">9.Profile</Link><br />
      < Link to="/Todo">10.Todo</Link><br />
      < Link to="/Users">11.Users</Link><br />
      < Link to="/Posts">12.Posts</Link><br />
      < Link to="/Width">13.Width</Link><br />
      < Link to="/AlertExample">14.AlertExample</Link><br />
      < Link to="/RenderCount">15.RenderCount</Link><br />
    </nav>
    <Routes>
      <Route path="/" element={<Game />} />
      <Route path="/about-us" element={<About />} />
      <Route path="*" element={<div> 404 page not Found </div>} />
      <Route path="/dummyapi" element={<DummyApi />} />
      <Route path="/useeffectaa" element={<Practise />} />
      <Route path="/counter" element={<Counter />} />
      <Route path="/ThemeToggle" element={<ThemeToggle />} />
      <Route path="/InputText" element={<InputText />} />
      <Route path="/Password" element={<Password />} />
      <Route path="/Timer" element={<Timer />} />
      <Route path="/Profile" element={<Profile />} />
      <Route path="/Todo" element={<Todo />} />
      <Route path="/Users" element={<Users />} />
      <Route path="/Posts" element={<Posts />} />
      <Route path="/Width" element={<Width />} />
      <Route path="/AlertExample" element={<AlertExample />} />
      <Route path="/RenderCount" element={<RenderCount/>} />
      <Route path="*" element={<div> Error </div>} />
    </Routes>
     </>
  );
};

export default App;