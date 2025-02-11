import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./nav.css"; // Import the CSS file

function Nav() {
  const [isVisible, setIsVisible] = useState(true);

  // Handle scroll event to show navbar
  useEffect(() => {
    const handleScroll = () => {
      setIsVisible(true); // Show navbar when scrolling

      // Clear previous timeout and reset visibility after 3 seconds of inactivity
      clearTimeout(scrollTimeout);
      scrollTimeout = setTimeout(() => setIsVisible(false), 3000); // Hide after 3 seconds of inactivity
    };

    let scrollTimeout;
    window.addEventListener("scroll", handleScroll);

    // Cleanup event listener
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className={`navbar ${isVisible ? "show" : ""}`}>
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/about">About</Link></li>
        <li><Link to="/projects">Projects</Link></li>
        <li><Link to="/contact">Contact</Link></li>
      </ul>
    </nav>
  );
}

export default Nav;
