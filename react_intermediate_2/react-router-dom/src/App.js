import {  NavLink, Route, Routes } from "react-router-dom";
import "./App.css";
// import Home from "./components/Home";
import Support from "./components/Support";
import About from "./components/About";
import Labs from "./components/Labs";
import Error from "./components/Error";
import Mainheader from "./components/Mainheader";
import Home from "./components/Home";

function App() {
  return (
    <div className="App">
      <nav>
        <ul>
          <li>
            <NavLink to="/">Home</NavLink>
          </li>
          <li>
            <NavLink to="/support">support</NavLink>
          </li>
          <li>
            <NavLink to="/labs">Labs</NavLink>
          </li>
          <li>
            <NavLink to="/about">About Us</NavLink>
          </li>
        </ul>
      </nav>
      <Routes>
        <Route path="/" element={<Mainheader />} />

         <Route index element={<Home/>}/>
        <Route path="/support" element={<Support />} />
        <Route path="/about" element={<About />} />
        <Route path="/labs" element={<Labs />} />
        <Route path="*" element={<Error />} />
      </Routes>
    </div>
  );
}

export default App;
