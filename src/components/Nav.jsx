import { useLocation } from "react-router-dom";
import { Link } from "react-router-dom";
import "./nav.css";

function Nav() {
  const location = useLocation();

  return (
    <nav className="navbar">
      <ul>
        <li className={location.pathname === "/" ? "active" : ""}><Link to="/">Home</Link></li>
        <li className={location.pathname === "/about" ? "active" : ""}><Link to="/about">About</Link></li>
        <li className={location.pathname === "/projects" ? "active" : ""}><Link to="/projects">Projects</Link></li>
        <li className={location.pathname === "/contact" ? "active" : ""}><Link to="/contact">Contact</Link></li>
      </ul>
    </nav>
  );
}

export default Nav;
