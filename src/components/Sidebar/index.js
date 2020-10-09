import React from 'react'
import {
  SidebarContainer,
  Icon,
  CloseIcon,
  SidebarWrapper,
  SidebarMenu,
  SidebarButtonWrap,
  SidebarLink, 
  SidebarRoute
} from './SidebarElements'

const Sidebar = ({ isOpen, toggleIsOpen }) => {
  return (
    <SidebarContainer isOpen={isOpen} onClick={toggleIsOpen}>
      <Icon onClick={toggleIsOpen}>
        <CloseIcon />
      </Icon>
      <SidebarWrapper>
        <SidebarMenu>
          <SidebarLink to="about" onClick={toggleIsOpen}>About</SidebarLink>
          <SidebarLink to="discover" onClick={toggleIsOpen}>Discover</SidebarLink>
          <SidebarLink to="services" onClick={toggleIsOpen}>Services</SidebarLink>
          <SidebarLink to="signup" onClick={toggleIsOpen}>Sign Up</SidebarLink>
        </SidebarMenu>
        <SidebarButtonWrap>
          <SidebarRoute to="/signin">Sign In</SidebarRoute>
        </SidebarButtonWrap>
      </SidebarWrapper>
    </SidebarContainer>
  )
}

export default Sidebar
