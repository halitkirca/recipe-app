import React from 'react';
import {Logo, Menu, MenuLink, Nav} from "./NavbarStyles";

const Navbar = () => {
  return (
    <div>
      <Nav>
        <Logo to={"/home"}>
          <code>{"<Hal/>"}</code> <span>recipe</span>
        </Logo>
        <Menu>
          <MenuLink to={"/about"}>About</MenuLink>
          <a href="https://github.com/" target="blank">
            Github
          </a>
          <MenuLink to={"/"}>Logout</MenuLink>
        </Menu>

        
      </Nav>
    </div>
  );
}

export default Navbar