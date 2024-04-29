import React, { useRef, useState } from "react";
import Logo from "../Assets/Logo_dark.svg";
import { Link, useNavigate  } from "react-router-dom";
// import { useHistory } from "react-router";


const Header = () => {
  const navigate  = useNavigate ();

  const myRef = useRef(null);
 const [isActive, setIsActive] = useState(false);
 //add the active class
 const toggleActiveClass = () => {
   setIsActive(!isActive);
 };
 //clean up function to remove the active class
 const removeActive = () => {
   setIsActive(false);
 };
  const executeScroll = () => myRef.current.scrollIntoView(); 
  return (
    <>
      {/* <header>
        <h2>
          <Link
            to={"/"}
            style={{ display: "flex", alignItems: "center", gap: "10px" }}
          >
            <img
              src={Logo}
              alt="project"
              style={{
                height: "65px",
                borderRadius: "50%",
              }}
            />
            <p>The Spirit Of Himalayas</p>
          </Link>
        </h2>
        <div style={{ display: "flex", alignItems: "center", gap: "14px" }}>
          <nav>
            <li>
              <a href="#">TOURS</a>
            </li>
            <li>
              <a href="#">ABOUT</a>
            </li>
          </nav>
          <button
            style={{
              borderRadius: "8px",
              background: "#327D81",
              padding: "10px 16px",
              color: "white",
            }}
          >
            CONTACT US
          </button>
        </div>
      </header> */}
      <div className="App">
        {/* <header className="App-header"> */}
        <nav className={"navbar"}>
          {/* logo */}
          <Link
            to={"/"}
            style={{ display: "flex", alignItems: "center", gap: "10px" }}
          >
            <img
              src={Logo}
              alt="project"
              style={{
                height: "60px",
              }}
            />
          </Link>
          <ul className={`navMenu ${isActive ? "active" : ""}`}>
            <li onClick={removeActive}>
              <a href="/" className={"navLink"}>
                home
              </a>
            </li>
            <li onClick={removeActive}>
              <a href="#home" className={"navLink"}>
                tours
              </a>
            </li>
            <li onClick={removeActive}>
              <a href="#home" className={"navLink"}>
                TREKS
              </a>
            </li>
            <li onClick={() => navigate("/contactus")}>
              <button
                style={{
                  border: "none",
                  borderRadius: "8px",
                  background: "#327D81",
                  padding: "10px 16px",
                  color: "white",
                  cursor: "pointer",
                }}
              >
                CONTACT US
              </button>
            </li>
          </ul>
          <div
            className={`hamburger ${isActive ? "active" : ""}`}
            onClick={toggleActiveClass}
          >
            <span className={"bar"}></span>
            <span className={"bar"}></span>
            <span className={"bar"}></span>
          </div>
        </nav>
        {/* </header> */}
      </div>
    </>
  );
};

export default Header;
