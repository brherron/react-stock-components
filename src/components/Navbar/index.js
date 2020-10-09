import React from 'react'
import { FaBars } from 'react-icons/fa'
import { 
  Nav, 
  NavbarContainer, 
  NavLogo, 
  MobileIcon, 
  NavMenu, 
  NavItem, 
  NavLinks,
  NavButton,
  NavButtonLink
} from './NavbarElements'

const Navbar = ({ toggleIsOpen }) => {
  return (
    <>
      <Nav>
        <NavbarContainer>
          <NavLogo to="/">dolla</NavLogo>
         <MobileIcon onClick={toggleIsOpen}>
           <FaBars />
         </MobileIcon>
         <NavMenu>
           <NavItem>
             <NavLinks to="about">About</NavLinks>
           </NavItem>
           <NavItem>
             <NavLinks to="discover">Discover</NavLinks>
           </NavItem>
           <NavItem>
             <NavLinks to="services">Services</NavLinks>
           </NavItem>
           <NavItem>
             <NavLinks to="signup">Sign Up</NavLinks>
           </NavItem>
         </NavMenu>
         <NavButton>
           <NavButtonLink to="/signin">Sign In</NavButtonLink>
         </NavButton>
        </NavbarContainer>
      </Nav>
    </>
  )
}

export default Navbar
