import React, { useState } from "react";
import "./Navbar.scss";
import { CiMenuBurger } from "react-icons/ci";

const Navbar = () => {
  const [toggle, setToggle] = useState(false);

  const handleToggle = () => {
    setToggle(!toggle);
  };

  return (
    <>
      <div className="navbar_top">
        <div className="container">
          <div className="flex_nav">
            <h1>QA</h1>
            <div className={`navbar_text ${toggle ? "show" : ""}`}>
              <a href="#About">About me</a>
              <a href="#Skills">Skills</a>
              <a href="#Contact">Works</a>
              <button>CONTACT ME</button>
            </div>
            <button className="menu" onClick={handleToggle}>
              <CiMenuBurger />
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
