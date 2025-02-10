import { useRef, useEffect } from "react";
import "./home.css";

function Home() {
  const skillsRef = useRef(null);

  useEffect(() => {
    const scrollContainer = skillsRef.current;
    if (!scrollContainer) return;

    const speed = 1; // Adjust scrolling speed

    const scroll = () => {
      if (scrollContainer.scrollLeft >= scrollContainer.scrollWidth / 2) {
        scrollContainer.scrollLeft = 0; // Reset for infinite loop
      } else {
        scrollContainer.scrollLeft += speed;
      }
    };

    const interval = setInterval(scroll, 20);
    return () => clearInterval(interval);
  }, []);

  return (
    <div>
      {/* Hero Section */}
      <section className="hero">
        <div className="overlay">
          <h1>Welcome to My Portfolio</h1>
          <p>
            I am <span className="highlight">T. Aryan Kumar Chowdhury</span>, a passionate developer specializing in AI and front-end development.
          </p>
        </div>
        <img src="/aryanimage.jpg" alt="Portfolio Background" className="background-image" />
      </section>

      {/* About Me Section */}
      <section className="about-me">
        <div className="content">
          <h2>About Me</h2>
          <p>
            I have a strong background in developing intelligent systems and creating engaging front-end experiences.
          </p>
        </div>
      </section>

      {/* Skills Section */}
      <section className="skills">
        <h2>My Skills</h2>
        <div className="skills-wrapper">
          <div className="skills-container" ref={skillsRef}>
            {[...Array(2)].map((_, i) =>
              [
                "AI", "Machine Learning", "Deep Learning", "NLP", "React", "Node.js", "MongoDB", 
                "JavaScript", "Python", "CSS", "HTML", "Express.js", "TensorFlow", "Keras", "PyTorch", 
                "C", "C++", "Java", "SQL",
              ].map((skill, index) => (
                <div key={`${i}-${index}`} className="skill-box">{skill}</div>
              ))
            )}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="footer-content">
          <p>© 2024 T. Aryan Kumar Chowdhury. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}

export default Home;
