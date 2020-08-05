import React from "react";

// Styling
import { NavStyled, NavItem } from "./styles";

const NavBar = () => {
  return (
    <NavStyled className="navbar navbar-expand-lg ">
      <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
        <div className="navbar-nav ml-auto">
          <NavItem className="nav-note" to="/notebooks">
            Notebooks
          </NavItem>
        </div>
      </div>
    </NavStyled>
  );
};
export default NavBar;
