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
        <nav>
          <li>
            <a href="#">TOURS</a>
          </li>
          <li>
            <a href="#">ABOUT</a>
          </li>
          <li>
            <a href="#">CONTRACTS</a>
          </li>
        </nav>
      </header>
    </>
  );
};

export default Header;
