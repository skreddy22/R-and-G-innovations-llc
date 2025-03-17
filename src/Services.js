import React from "react";
import "./App.css";

function Services() {
  return (
      <div className="services-container"
      style={{
        backgroundImage: "url('/services.png')",
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
      <h1>Our Services</h1>
      <p>Description of services offered by R&G INNOVATIONS LLC.</p>
    </div>
  );
}

export default Services;
