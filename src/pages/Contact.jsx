import { FaEnvelope, FaLinkedin, FaGithub } from "react-icons/fa";
import "./contact.css";

function Contact() {
  return (
    <div className="contact-page">
      <h1>Contact Me</h1>
      <p className="contact-subtext">Let&apos;s connect! Feel free to reach out for collaborations or project discussions.</p>
      
      <div className="contact-cards">
        <div className="contact-card">
          <FaEnvelope className="contact-icon" />
          <h2>Email</h2>
          <p>chowdhuryaryan@gmail.com</p>
        </div>

        <div className="contact-card">
          <FaLinkedin className="contact-icon" />
          <h2>LinkedIn</h2>
          <a href="https://www.linkedin.com/in/aryanchowdhury" target="_blank" rel="noopener noreferrer">
            LinkedIn Profile
          </a>
        </div>

        <div className="contact-card">
          <FaGithub className="contact-icon" />
          <h2>GitHub</h2>
          <a href="https://github.com/aryanchowdhury-art" target="_blank" rel="noopener noreferrer">
            GitHub Profile
          </a>
        </div>
      </div>
    </div>
  );
}

export default Contact;
