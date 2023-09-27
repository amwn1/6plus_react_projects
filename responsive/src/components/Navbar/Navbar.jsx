import React from 'react'
import styled from 'styled-components'
const Navbar = () => {
  return (
    <>
    <Nav>
      <NavbarContainer>
        <NavLogo>
          This is here 
        </NavLogo>
      </NavbarContainer>
    </Nav>
    </>
  )
}

export default Navbar

const Nav = styled.nav`
background: #000;
height: 80px;
margin-top: -80px;
display: flex;
justify-content: center;
align-items: center;
position : sticky;
top: 0;
z-index: 10;


`