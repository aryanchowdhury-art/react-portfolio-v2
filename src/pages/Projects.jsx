import { useState } from "react";
import "./Projects.css";

const projectsData = [
  {
    id: 1,
    title: "Image Classification with CNN",
    description: "A deep learning model that classifies images into different categories.",
    technologies: ["Python", "TensorFlow", "Keras", "OpenCV"],
    category: "AI & Machine Learning",
    features: [
      "Uses Convolutional Neural Networks (CNNs) for high accuracy.",
      "Supports real-time image classification via a web UI.",
      "Pre-trained on ImageNet dataset for better generalization.",
    ],
    github: "#",
    demo: "#",
  },
  {
    id: 2,
    title: "Fake News Detection with NLP",
    description: "An NLP-based model that detects fake news articles.",
    technologies: ["Python", "TensorFlow", "Sklearn", "NLTK", "Flask"],
    category: "AI & Machine Learning",
    features: [
      "Trained on real-world datasets for reliable detection.",
      "Uses TF-IDF and Word2Vec for feature extraction.",
      "Deployable as a Flask API for integration into web apps.",
    ],
    github: "#",
    demo: "#",
  },
  {
    id: 3,
    title: "Handwritten Digit Recognition (MNIST)",
    description: "A digit recognition system using deep learning.",
    technologies: ["Python", "TensorFlow", "Keras", "OpenCV"],
    category: "AI & Machine Learning",
    features: [
      "98% accuracy on MNIST dataset.",
      "Real-time digit recognition using OpenCV.",
      "Deployable as a web app for user interaction.",
    ],
    github: "#",
    demo: "#",
  },
  {
    id: 4,
    title: "Task Management App",
    description: "A MERN stack to-do app with team collaboration features.",
    technologies: ["MongoDB", "Express.js", "React", "Node.js"],
    category: "Full-Stack Development",
    features: [
      "User authentication with JWT.",
      "Drag-and-drop task management.",
      "Real-time updates with WebSockets.",
    ],
    github: "#",
    demo: "#",
  },
  {
    id: 5,
    title: "E-Commerce Platform",
    description: "A full-fledged online shopping website.",
    technologies: ["React", "Express.js", "MongoDB", "Node.js", "Stripe API"],
    category: "Full-Stack Development",
    features: [
      "Secure payment integration with Stripe API.",
      "Admin dashboard for managing products and orders.",
      "User authentication & role-based access.",
    ],
    github: "#",
    demo: "#",
  },
  {
    id: 6,
    title: "Chat Application",
    description: "A real-time chat app with WebSockets.",
    technologies: ["React", "Express.js", "MongoDB", "Socket.io", "Node.js"],
    category: "Full-Stack Development",
    features: [
      "Real-time messaging using WebSockets.",
      "Group chat and one-on-one messaging.",
      "User authentication & profile customization.",
    ],
    github: "#",
    demo: "#",
  },
];

const Projects = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");

  const categories = ["All", "AI & Machine Learning", "Full-Stack Development"];

  const filteredProjects =
    selectedCategory === "All" ? projectsData : projectsData.filter((p) => p.category === selectedCategory);

  return (
    <div className="projects">
      <h1 className="title">🚀 My Projects</h1>
      <p className="subtitle">A showcase of my best work in AI, Full-Stack, and API development.</p>

      {/* Category Filters */}
      <div className="filters">
        {categories.map((category) => (
          <button
            key={category}
            className={selectedCategory === category ? "active" : ""}
            onClick={() => setSelectedCategory(category)}
          >
            {category}
          </button>
        ))}
      </div>

      {/* Projects Grid */}
      <div className="projects-grid">
        {filteredProjects.map((project) => (
          <div key={project.id} className="project-card">
            <h2>{project.title}</h2>
            <p>{project.description}</p>

            <ul>
              {project.features.map((feature, index) => (
                <li key={index}> {feature}</li>
              ))}
            </ul>

            <div className="tech-stack">
              {project.technologies.map((tech, index) => (
                <span key={index} className="tech">{tech}</span>
              ))}
            </div>

            <div className="links">
              <a href={project.github} target="_blank" rel="noopener noreferrer">GitHub</a>
              <a href={project.demo} target="_blank" rel="noopener noreferrer">Live Demo</a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
