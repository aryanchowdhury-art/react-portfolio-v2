import "./about.css"; // Ensure you have a separate CSS file for styling

function About() {
  return (
    <div className="about">
      <div className="container">
        <h1 className="section-title">About Me</h1>

        {/* What Makes Me Unique Section */}
        <section className="unique">
          <h2>What Makes Me Unique?</h2>
          <p>
            I have the ability to <span className="highlight">grasp concepts intuitively</span>, recognize patterns subconsciously, and connect seemingly unrelated ideas effortlessly. 
            I don’t just learn—I <span className="highlight">internalize and adapt knowledge</span>, making me an exceptionally fast problem solver.
          </p>
          <p>
            My <span className="highlight">structured yet instinctive approach</span> allows me to tackle complex challenges efficiently in 
            <strong> machine learning, full-stack development, and system optimization.</strong>  
            My <strong>leadership & mentorship</strong> skills empower me to guide teams, optimize workflows, and create impact-driven solutions.
          </p>
        </section>

        {/* Experience & Achievements Section */}
        <section className="experience">
          <h2>Experience & Achievements</h2>

          <div className="job">
            <h3>🚀 Team Lead – LLM Project</h3>
            <ul>
              <li>Developed a <strong>Questions Generator API</strong>, improving response time by <strong>30%</strong>.</li>
              <li>Mentored interns, ensuring structured development and clarity in their roles.</li>
              <li>Tech: <span className="tech">JSON, JavaScript, Postman</span></li>
            </ul>
          </div>

          <div className="job">
            <h3>💼 Freelancing Software Developer – Workout Planner App (WPA)</h3>
            <ul>
              <li>Developed a <strong>scalable exercise planner</strong> for <strong>10,000+ users</strong>.</li>
              <li>Full-stack build with <span className="tech">Python (Django, Streamlit), TensorFlow, React, Express</span>.</li>
              <li>Completed in <strong>14 days</strong>, optimizing backend efficiency.</li>
            </ul>
          </div>

          <div className="job">
            <h3>🤖 Freelancer – Machine Learning Developer</h3>
            <ul>
              <li>Built a <strong>spam detection system</strong> with <strong>95% accuracy</strong>.</li>
              <li>Tech: <span className="tech">TensorFlow, Sklearn, Streamlit, React, Express</span>.</li>
              <li>Completed in <strong>7 days</strong>, showcasing rapid problem-solving.</li>
            </ul>
          </div>
        </section>

        {/* Notable Projects Section */}
        <section className="projects">
          <h2>Notable Projects & Contributions</h2>
          <ul>
            <li>Developed an <strong>advanced spam detection system</strong>, winning <strong>Best Project in AI & ML</strong>.</li>
            <li>Optimized <strong>API response time by 30%</strong>, improving efficiency.</li>
            <li>Scaled a full-stack application for <strong>10,000+ users</strong>.</li>
            <li>Mentored a team to enhance project efficiency.</li>
          </ul>
        </section>

        {/* Certifications Section */}
        <section className="certifications">
          <h2>Certifications, Awards & Recognitions</h2>
          <ul>
            <li>🏆 <strong>Best Project in AI & ML</strong> – Recognized for <strong>spam call and email detection</strong>.</li>
            <li>📜 <strong>Certified in AI & ML</strong> – GreatLearning.</li>
            <li>⚡ <strong>Prompt Engineering Certification</strong> – GreatLearning.</li>
            <li>🖥️ <strong>Python & C++ Certification</strong> – W3Schools.</li>
            <li>🎤 <strong>Public Speaking & Project Management</strong> expertise.</li>
          </ul>
        </section>
      </div>
    </div>
  );
}

export default About;
