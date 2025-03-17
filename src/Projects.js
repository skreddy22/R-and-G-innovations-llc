import React from "react";
import "./App.css"; 

function Projects() {
  return (
    <div className="projects-container"
    style={{
        backgroundImage: "url('/projects.png')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        height: "100vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        color: "white", 
      }}>
      <h1>Our Past Projects</h1>
      <p>Descriptions of our past projects and services.</p>
    </div>
  );
}
export default Projects;