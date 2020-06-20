import React from "react"
import styled from "styled-components"
import Link from "react-router-dom/Link"
import { useLocation } from "react-router"
import { SlideToLeftOnHover } from "../Utils/StyleUtils"
import { OutlinedButton } from "../Components/Buttons"
import { StyledNavLink } from "../Components/NavLink"
import { NavLinkBottomBorder } from "../Components/NavLinkBottomBorder"
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
    height: auto;
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
`

export const Navbar = styled.nav`
  margin-top: 16px;
  ul {
    display: grid;
    grid-auto-flow: row;
    column-gap: 4rem;
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
            <StyledNavLink>
              <NavLink to="/vivo">
                <span>Vivo</span>
              </NavLink>
            </StyledNavLink>
          </li>
          <li>
            <StyledNavLink>
              <NavLink to="/canales">
                <span>Canales</span>
              </NavLink>
            </StyledNavLink>
          </li>
          <li>
            <StyledNavLink>
              <NavLink to="/eventos">
                <span>Eventos</span>
              </NavLink>
            </StyledNavLink>
          </li>
          <li>
            <StyledNavLink>
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
