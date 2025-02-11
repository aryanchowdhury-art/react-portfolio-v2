import { useState, useEffect, useRef } from 'react';
import './home.css';

function Home() {
  const [count, setCount] = useState(0);
  const skillsRef = useRef(null);
  const totalSkills = 18;

  useEffect(() => {
    const skillsContainer = skillsRef.current;
    if (!skillsContainer) return;

    let interval;
    const handleScroll = () => {
      const rect = skillsContainer.getBoundingClientRect();
      if (rect.top <= window.innerHeight * 0.75 && count === 0) {
        let currentCount = 0;
        interval = setInterval(() => {
          if (currentCount < totalSkills) {
            setCount(prev => prev + 1);
            currentCount++;
          } else {
            clearInterval(interval);
          }
        }, 100);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
      clearInterval(interval);
    };
  }, [count]);

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
            <div className="skill-category">
              <h3>Artificial Intelligence & Machine Learning</h3>
              <div className="skill-box">AI</div>
              <div className="skill-box">Machine Learning</div>
              <div className="skill-box">Deep Learning</div>
              <div className="skill-box">NLP</div>
              <div className="skill-box">TensorFlow</div>
              <div className="skill-box">Keras</div>
              <div className="skill-box">PyTorch</div>
            </div>
            <div className="skill-category">
              <h3>Web Development</h3>
              <div className="skill-box">React</div>
              <div className="skill-box">Node.js</div>
              <div className="skill-box">Express.js</div>
              <div className="skill-box">MongoDB</div>
              <div className="skill-box">JavaScript</div>
              <div className="skill-box">HTML</div>
              <div className="skill-box">CSS</div>
            </div>
            <div className="skill-category">
              <h3>Programming Languages</h3>
              <div className="skill-box">Python</div>
              <div className="skill-box">C</div>
              <div className="skill-box">C++</div>
              <div className="skill-box">Java</div>
              <div className="skill-box">SQL</div>
            </div>
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
