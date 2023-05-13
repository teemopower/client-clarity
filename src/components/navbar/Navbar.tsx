import React from 'react';
import styled from 'styled-components';

const NavContainer = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: .2rem;
  background-color: white;
  margin-bottom: 2rem;
`;

const HomeButton = styled.a`
  color: black;
  text-decoration: none;
  font-size: 1.5rem;
  margin-top: 2px;
`;

const LoginButton = styled.button`
  background-color: black;
  border: none;
  font-weight: bold;
  cursor: pointer;
  padding: 0.5rem 1rem;
  border-radius: 2px;
  color: white;

  &:hover {
    background-color: #787878;
  }
`;

function Navbar() {
  return (
    <NavContainer>
      <HomeButton href="/">Clear Horizons, AI</HomeButton>
      <LoginButton>Log In</LoginButton>
    </NavContainer>
  );
}

export default Navbar;
