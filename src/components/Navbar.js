import React from "react";
import styled from "styled-components";

import { Link } from "react-router-dom";

function Header() {
  return (
    <Nav>
      <Link to='/'>
        <Logo src='/images/pokemon-logo.png' />
      </Link>
    </Nav>
  );
}

export default Header;

const Nav = styled.nav`
  height: 70px;
  width: 100%;
  background: #1a1a1a;
  align-items: center;
  padding: 0 36px;

  overflow-x: hidden;
  display: flex;

  position: fixed;
  z-index: 1;
`;

const Logo = styled.img`
  width: 120px;
  cursor: pointer;
`;
