import "./App.css";
import About from "./About.js";
import Pricing from "./Pricing.js";
import Home from "./Home.js";
import {Link, Route, Routes} from "react-router-dom"

function Navigate() {
  return (
    <div className="container-fluid header">
      <nav className="navbar">
        <Link className="navbar-brand ms-5" to="/">
          Home
        </Link>
        <div className="page-routes me-5">
          <Link className="nav-link" to="/about">
            About
          </Link>
          <Link className="nav-link" to="/pricing">
            Pricing
          </Link>
        </div>
      </nav>
    </div>
  );
}

function App() {

  return (
    <>
      <Navigate />
      <div className="container main-content">
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/about" element={<About/>}/>
          <Route path="/pricing" element={<Pricing/>}/>
        </Routes>
      </div>
    </>
  );
}

export default App;
