import React, { useEffect, useState } from 'react'
import "./Nav.css";

function Nav() {
    const [show, handleShow] = useState(false);
  
    useEffect(() => {
      window.addEventListener("scroll", () => {
        if (window.scrollY > 100) {
          handleShow(true);
        } else handleShow(false);
      });
      return () => {
        window.removeEventListener("scroll", handleShow);
      };
    }, []);
  
    return (
      <div className={`Nav ${show && "nav_black"}`}>
        <img
          className="nav_logo"
          src="https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg"
          alt="netflix icon"
        />
  
        <img
          className="nav_avatar"
          src="https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png"
          alt="navbar avatar"
        />
      </div>
    );
  }
  export default Nav;