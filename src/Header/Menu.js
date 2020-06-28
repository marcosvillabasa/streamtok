import React from "react"
import styled from "styled-components"
import Link from "react-router-dom/Link"
import { SlideToLeftOnHover } from "../Utils/StyleUtils"
import { OutlinedButton } from "../Components/Buttons"
import { StyledNavLink } from "../Components/NavLink"
// import { SearchBox2 } from "../Components/SearchBox2"
import fixedLogo from "../assets/logostreamtokfixed.svg"
import { NavLink } from "react-router-dom"
import { useMenuSwipe } from "../Utils/useMenuSwipe"
import MenuIcon from "@material-ui/icons/Menu"
import AccountCircleIcon from "@material-ui/icons/AccountCircle"

const HeaderContainer = styled.header`
  padding: 16px;
  border-bottom: 1px solid white;
  background-color: #0008;
  z-index: 10;
  backdrop-filter: blur(20px);

  .header-logo-container {
    height: 80px;
    width: 160px;
    margin-top: 16px;
    margin-left: auto;
    margin-right: auto;
    overflow: hidden;
    img {
      width: 100%;
      height: 100%;
    }
  }

  .btn-ingresar-container {
    width: max-content;
    margin: 48px auto 32px auto;
  }

  @media screen and (min-width: 600px) {
    backdrop-filter: blur(20px);
    background-color: #0004;
    padding-bottom: 0;
    display: flex;
    align-items: center;
    .header-logo-container {
      margin: 0;
      padding: 0;
      margin-top: -10px;
      width: 96px;
    }
    .btn-ingresar-container {
      margin: 0;
    }
    nav {
      flex: 1 1 auto;
    }
  }
  @media screen and (min-width: 960px) {
    padding: 16px 7% 0px 32px;
  }
`

export const Navbar = styled.nav`
  margin-top: 16px;
  ul {
    display: grid;
    grid-auto-flow: row;

    @media screen and (min-width: 600px) {
      grid-auto-flow: column;
      column-gap: 0px;
    }
    @media screen and (min-width: 1280px) {
      grid-auto-columns: minmax(auto, calc(140px + 5vw));
    }
  }
`

const Wrapper = styled.div`
  padding-top: ${(props) => (props.isMobile ? 48 : 0)}px;

  .sticky-top-nav {
    display: ${(props) => (props.isMobile ? "flex" : "none")};
    align-items: center;
    z-index: 9000;
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    background-color: #000d;
    height: 48px;
    padding: 0px 16px;
    border-bottom: 2px solid orangered;

    .topnav-logo {
      height: 30px;
    }

    .menu-icon {
      margin-left: 16px;
    }

    .account-icon {
      margin-left: auto;
    }
  }
  .sidebar-overlay {
    @media screen and (max-width: 599.95px) {
      position: fixed;
      top: 0;
      left: 0;
      bottom: 0;
      right: 0;
      background-color: #000;
      opacity: ${(props) => (props.open ? 0.5 : 0)};
      transition: opacity 0.5s;
      will-change: opacity;
      z-index: 10000;
      visibility: ${(props) => (props.open ? "visible" : "hidden")};
      touch-action: none;
    }
  }
  .menu-container {
    @media screen and (max-width: 599.95px) {
      border-right: 1px solid #222;
      position: fixed;
      top: 0px;
      left: -280px;
      width: 240px;
      height: 100vh;
      transition: transform 0.3s ease-in-out;
      transform: ${(props) =>
        props.open ? "translateX(280px)" : "translateX(0px)"};
      will-change: transform;
      z-index: 10100;
      touch-action: none;
    }
  }
`

export default function Menu(props) {
  const { open, openMenu, closeMenu, isMobile } = useMenuSwipe()

  return (
    <Wrapper isMobile={isMobile} open={open}>
      <div className="sticky-top-nav">
        <img
          className="topnav-logo"
          alt="streamtok logo"
          src={fixedLogo}
          onClick={openMenu}
        />
        <MenuIcon className="menu-icon" onClick={openMenu} />
        <AccountCircleIcon className="account-icon" />
      </div>
      <div className="sidebar-overlay" onClick={closeMenu} />
      <HeaderContainer className="menu-container" onClick={closeMenu}>
        <Link to="/">
          <div className="header-logo-container">
            <img className="header-logo" alt="streamtok logo" src={fixedLogo} />
          </div>
        </Link>
        <Navbar className="main-navbar">
          <ul>
            <li>
              <StyledNavLink className="main-navbar-link">
                <a
                  href="http://www.streamtok.live/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <span>Vivo</span>
                </a>
              </StyledNavLink>
            </li>
            <li>
              <StyledNavLink className="main-navbar-link">
                <NavLink to="/canales">
                  <span>Canales</span>
                </NavLink>
              </StyledNavLink>
            </li>
            <li>
              <StyledNavLink className="main-navbar-link">
                <NavLink to="/eventos">
                  <span>Eventos</span>
                </NavLink>
              </StyledNavLink>
            </li>
            <li>
              <StyledNavLink className="main-navbar-link">
                <NavLink to="/tv">
                  <span>TV</span>
                </NavLink>
              </StyledNavLink>
            </li>
            {/* <SearchBox2 /> */}
          </ul>
        </Navbar>
        <SlideToLeftOnHover className="btn-ingresar-container">
          <OutlinedButton className="btn-ingresar">
            <span>INGRESAR</span>
          </OutlinedButton>
        </SlideToLeftOnHover>
      </HeaderContainer>
    </Wrapper>
  )
}
