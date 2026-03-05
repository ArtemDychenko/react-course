import React from "react";
import "../styles.css";

export default function Footer() {
  const currentYear = new Date().getFullYear();
  return (
    <footer className="footer">
      <p className="footer">
        {" "}
        Made by dummy Artem. All rights reserved. &copy; {currentYear}
      </p>
    </footer>
  );
}
