import React from "react";
import "./App.css";

function Contact() {
  return (
      <div className="contact-container"
      style={{
        backgroundImage: "url('/contact.png')",
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
      <h1>Contact Information</h1>
      <p>Email: contact@rginnovations.com</p>
      <p>Phone: +1 (123) 456-7890</p>
    </div>
  );
}

export default Contact;
