import React from "react";
import "../styles.css";

export default function Header() {
  return (
    <div className="header">
      <img className="logo" src="logo.png" alt="MovieDux Logo"></img>
      <h2 className="app-subtitle">Your favorite movie database</h2>
    </div>
  );
}
