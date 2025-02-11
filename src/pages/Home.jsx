import { useState, useEffect, useRef } from 'react';
import './home.css';

function Home() {
  const [count, setCount] = useState(0); // State to hold the counter value
  const skillsRef = useRef(null);

  useEffect(() => {
    const skillsContainer = skillsRef.current;
    if (!skillsContainer) return;

    // Count up to the number of skills when the section is in view
    const skillsCount = 18; // Total number of skills
    let currentCount = 0;
    const interval = setInterval(() => {
      if (currentCount < skillsCount) {
        setCount(currentCount + 1);
        currentCount++;
      } else {
        clearInterval(interval); // Stop when it reaches the total skills
      }
    }, 100);

    // Scroll event listener to trigger count when the section is visible
    const onScroll = () => {
      if (skillsContainer.getBoundingClientRect().top <= window.innerHeight) {
        clearInterval(interval); // Ensure the counter starts when the section is in view
      }
    };

    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <div>
      {/* Hero Section */}
      <section className="hero">
        <div className="overlay">
          <h1>Welcome to My Portfolio</h1>
          <p>
            I am <span className="highlight">T. Aryan Kumar Chowdhury</span>, a passionate developer specialized in AI and front-end development.
          </p>
        </div>
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
                "AI", "Machine Learning", "Deep Learning", "NLP", "React", "Node.js",
                "MongoDB", "JavaScript", "Python", "CSS", "HTML", "Express.js",
                "TensorFlow", "Keras", "PyTorch", "C", "C++", "Java", "SQL"
              ].map((skill, index) => (
                <div key={`${i}-${index}`} className="skill-box">
                  <span>{skill}</span>
                </div>
              ))
            )}
          </div>
        </div>
        <div className="skills-counter">
          <p>{count} Skills</p>
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
