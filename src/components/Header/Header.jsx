import React, { useEffect, useRef } from "react";
import Logo from "../../assets/img/favicon.png";
import { NavLink } from "react-router-dom";

import "./Header.scss";
const Links = [
  {
    type: "Home",
    path: "/home",
  },
  {
    type: "Movies",
    path: "/movie",
  },
  {
    type: "TV Series",
    path: "/tv",
  },
];
const Header = () => {
  const headerRef = useRef();
  useEffect(() => {
    const handlerScroll = () => {
      if (
        document.body.scrollTop > 0 ||
        document.documentElement.scrollTop > 0
      ) {
        headerRef.current.classList.add("shrink");
      } else {
        headerRef.current.classList.remove("shrink");
      }
    };
    window.addEventListener("scroll", handlerScroll);
    return () => {
      window.removeEventListener("scroll", handlerScroll);
    };
  }, []);
  return (
    <div ref={headerRef} className="header">
      <div className="header-wrap container">
        <div className="h-left">
          <NavLink to="/" style={{ height: "50px" }}>
            <img
              src={Logo}
              className="h-logo"
              alt=""
              style={{ width: "50px", height: "50px" }}
            />
          </NavLink>
          <NavLink className="h-brand" to="/">
            nMovie
          </NavLink>
        </div>
        <ul className="h-right">
          {Links.map((link, index) => (
            <li key={index}>
              <NavLink to={link.path} className="h-link">
                {link.type}
              </NavLink>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Header;
