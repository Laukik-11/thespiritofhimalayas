import React, { useRef } from "react";
import Logo from "../Assets/Logo.jpg";
import { Link } from "react-router-dom";

const Header = () => {
  const myRef = useRef(null);

  const executeScroll = () => myRef.current.scrollIntoView(); 
  return (
    <>
      <header>
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
              background: "#3f51b5",
              padding: "10px 16px",
              color: "white",
            }}
          >
            CONTACT US
          </button>
        </div>
      </header>
    </>
  );
};

export default Header;
