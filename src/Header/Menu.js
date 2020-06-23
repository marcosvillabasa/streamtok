import React from "react"
import styled from "styled-components"
import Link from "react-router-dom/Link"
import { SlideToLeftOnHover } from "../Utils/StyleUtils"
import { OutlinedButton } from "../Components/Buttons"
import { StyledNavLink } from "../Components/NavLink"
import { SearchBox2 } from "../Components/SearchBox2"
import fixedLogo from "../assets/logostreamtokfixed.svg"
import { NavLink } from "react-router-dom"

const HeaderContainer = styled.header`
  padding: 16px;
  position: relative;
  background-color: #0004;
  backdrop-filter: blur(20px);
  border-bottom: 1px solid white;

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
    padding: 16px 7% 0px 16px;

    .header-logo-container {
      display: block;
      margin-left: 16px;
      width: 128px;
    }
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

export default function Menu(props) {
  return (
    <HeaderContainer>
      <Link to="/" exact>
        <div className="header-logo-container">
          <img className="header-logo" alt="streamtok logo" src={fixedLogo} />
        </div>
      </Link>
      <Navbar className="main-navbar">
        <ul>
          <li>
            <StyledNavLink className="main-navbar-link">
              <NavLink to="/vivo">
                <span>Vivo</span>
              </NavLink>
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
  )
}
