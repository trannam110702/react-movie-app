import React from "react";
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
    path: "/movies",
  },
  {
    type: "TV Series",
    path: "/tvs",
  },
];
const Header = () => {
  return (
    <div className="header">
      <div className="h-left">
        <img src={Logo} className="h-logo" alt="" style={{ width: "50px" }} />
        <NavLink className="h-brand" to="/">
          nMovie
        </NavLink>
      </div>
      <div className="h-right">
        {Links.map((link, index) => (
          <NavLink to={link.path} key={index} className="h-link">
            {link.type}
          </NavLink>
        ))}
      </div>
    </div>
  );
};

export default Header;
