import React from "react";
import { NavLink } from "react-router-dom";
function Navbar() {
  // If current location is /home
  //   hide <nav/>
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container-fluid" style={{ height: "7vh" }}>
        <a className="navbar-brand" href="#" style={{ color: "#FBA633" }}>
          <strong>Fun-Maarifa</strong>
        </a>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul
            className="navbar-nav me-auto mb-2 mb-lg-0"
            style={{ paddingLeft: "30%"}}
          >
            <li className="nav-item">
              <NavLink to="/">Home</NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="/games">Games</NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="/create">Create-Game</NavLink>
            </li>

          </ul>
        </div>
      </div>
    </nav>
  );
}
export default Navbar;
