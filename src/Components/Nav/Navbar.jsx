import React from 'react';
import styled from 'styled-components';
import Burger from './Burger';
import logo from '../assets/logo.png';

const Nav = styled.nav`
  width: 100%;
  height: auto;
  border-bottom: 2px solid #f1f1f1;
  display: flex;
  z-index:1;
  background-color: #ffff;
  position : fixed;
  justify-content: space-between;
  .logo {
    overflow: hidden;
  }
  .resize{
    height: 60px;
  }
`

const Navbar = () => {
  return (
    <Nav>
      <div className="logo">
        <img className="resize" src={logo} alt="logo" />
      </div>
      <Burger />
    </Nav>
  )
}

export default Navbar