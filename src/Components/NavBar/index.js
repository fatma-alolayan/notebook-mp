import React from "react";
import { NavStyled, NavItem } from "./styles";

const NavBar = () => {
  return (
    <NavStyled className="navbar navbar-expand-lg">
      <div className="collapse navbar-collapse" id="navbarNavTogglerDemo0">
        <ul className="navbar-nav ml-auto mt-2.lg-0">
          <NavItem to="/notebooks" style={{ padding: 10 }}>
            NoteBook
          </NavItem>
          <NavItem to="/notes" style={{ padding: 10 }}>
            Note
          </NavItem>
        </ul>
      </div>
    </NavStyled>
  );
};

export default NavBar;
