import React, { useState } from 'react';
import {
  Navbar, NavbarBrand, Nav, NavItem, NavLink, NavbarToggler, Collapse
} from 'reactstrap';

const Header = () => {
  const [open, setOpen] = useState(false)

  const toggle = () => {
    setOpen(!open);
  }

  return (
    <div>
      <Navbar color="primary" light expand="md">
        <NavbarBrand>Minhas Séries</NavbarBrand>
        <NavbarToggler onClick={toggle}></NavbarToggler>
        <Collapse isOpen={open} navbar>
          <Nav className="ml-auto" navbar>
            <NavItem>
              <NavLink href="/">Genêros</NavLink>
            </NavItem>
          </Nav>
        </Collapse>
      </Navbar>
    </div>
  );
}

export default Header;