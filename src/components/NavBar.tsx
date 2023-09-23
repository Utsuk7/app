import React from "react";
import "./NavBar.css";

const Navbar = () => {
  return (
    <nav className="navbar">
      {/* Site Name */}
      <div className="site-name">Nasha Mukt Bharat</div>

      {/* Social Media Icons */}
      <div className="social-media-icons">
        <a href="#">
          <img src="facebook-icon.png" alt="Facebook" />
        </a>
        <a href="#">
          <img src="twitter-icon.png" alt="Twitter" />
        </a>
        <a href="#">
          <img src="instagram-icon.png" alt="Instagram" />
        </a>
      </div>

      {/* Second Row for Photos */}
      <div className="photo-row">
        <div className="photo">
          <img src="photo1.jpg" alt="Photo 1" />
        </div>
        <div className="photo">
          <img src="india.jpg" alt="Photo 2" />
        </div>
        <div className="photo">
          <img src="photo3.jpg" alt="Photo 3" />
        </div>
      </div>

      {/* Third Row for Options */}
      <div className="option-row">
        <div className="dropdown">
          <button className="dropbtn">Home</button>
          <div className="dropdown-content">
            <a href="#">Suboption 1</a>
            <a href="#">Suboption 2</a>
          </div>
        </div>

        <div className="dropdown">
          <button className="dropbtn">About Us</button>
          <div className="dropdown-content">
            <a href="#">Suboption 1</a>
            <a href="#">Suboption 2</a>
          </div>
        </div>

        <div className="dropdown">
          <button className="dropbtn">Products</button>
          <div className="dropdown-content">
            <a href="#">Suboption 1</a>
            <a href="#">Suboption 2</a>
          </div>
        </div>

        <div className="dropdown">
          <button className="dropbtn">Services</button>
          <div className="dropdown-content">
            <a href="#">Suboption 1</a>
            <a href="#">Suboption 2</a>
          </div>
        </div>

        <div className="dropdown">
          <button className="dropbtn">Contact Us</button>
          <div className="dropdown-content">
            <a href="#">Suboption 1</a>
            <a href="#">Suboption 2</a>
          </div>
        </div>

        <div className="dropdown">
          <button className="dropbtn">Contact Us</button>
          <div className="dropdown-content">
            <a href="#">Suboption 1</a>
            <a href="#">Suboption 2</a>
          </div>
        </div>

        <div className="dropdown">
          <button className="dropbtn">Contact Us</button>
          <div className="dropdown-content">
            <a href="#">Suboption 1</a>
            <a href="#">Suboption 2</a>
          </div>
        </div>

        <div className="dropdown">
          <button className="dropbtn">Contact Us</button>
          <div className="dropdown-content">
            <a href="#">Suboption 1</a>
            <a href="#">Suboption 2</a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
