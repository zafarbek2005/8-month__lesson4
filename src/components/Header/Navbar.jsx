import React, { useState } from "react";
import "./Navbar.scss";

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className={`sidebar-container ${isOpen ? "open" : ""}`}>
      <div className="sidebar">
        <a href="#home" onClick={toggleSidebar}>Home</a>
        <a href="#about" onClick={toggleSidebar}>About</a>
        <a href="#services" onClick={toggleSidebar}>Services</a>
        <a href="#contact" onClick={toggleSidebar}>Contact</a>
      </div>
      <div className="sidebar-toggle" onClick={toggleSidebar}>
        {isOpen ? "✖" : "☰"}
      </div>
    </div>
  );
};

export default Sidebar;
