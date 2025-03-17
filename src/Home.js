import React from "react";
import "./App.css";

function Home() {
    return (
        <div className="home-container"
            style={{
        backgroundImage: "url('/home.png')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        height: "100vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        color: "white", 
        }}
        >
      <h1>R&G INNOVATIONS LLC</h1>
      <h2>ADVANCING THE WORLD INTO AI</h2>
            </div>
           
  );
}

export default Home;
