import React, { useState } from "react";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
} from "reactstrap";
import Constants from "../../constants";
import { constant } from "async";
import armani from "../SideBar/resume.pdf";

const TheNav = (props) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <div>
      <Navbar color="light" light expand="md">
        <NavbarBrand href="/">Arman Riahi</NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="mr-auto" navbar>
            <NavItem>
              <NavLink href={Constants.LINKS.EMAIL}>Email</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href={Constants.LINKS.LINKEDIN}>LinkedIn</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href={Constants.LINKS.GITHUB}>GitHub</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href={armani}>Resume</NavLink>
            </NavItem>
          </Nav>
        </Collapse>
      </Navbar>
    </div>
  );
};

export default TheNav;
