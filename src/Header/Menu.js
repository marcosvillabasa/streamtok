import React from "react"
import styled from "styled-components"
import Link from "react-router-dom/Link"
import { useLocation } from "react-router"
import { SlideToLeftOnHover } from "../Utils/StyleUtils"
import { OutlinedButton } from "../Components/Buttons"
import { StyledNavLink } from "../Components/NavLink"
import { NavLinkBottomBorder } from "../Components/NavLinkBottomBorder"
import { SearchBox2 } from "../Components/SearchBox2"

const HeaderContainer = styled.header`
  height: 80px;
  padding: 30px 0px 30px var(--body-margin);
  display: flex;
  align-items: flex-end;
  position: relative;
  background-color: #0004;
  backdrop-filter: blur(20px);
  border-bottom: 1px solid white;

  .header-logo {
    height: 68px;
    width: 180px;
    margin-right: 4rem;
    overflow: hidden;
    svg {
      transform: translate(25px, 25px) scale(1.3);
    }
  }

  .btn-ingresar-container {
    margin-left: auto;
    margin-right: 4rem;
  }
`

export const Navbar = styled.nav`
  ul {
    display: grid;
    grid-auto-flow: column;
    column-gap: 4rem;
  }
`

export default function Menu(props) {
  const { pathname } = useLocation()
  return (
    <HeaderContainer>
      <Link to="/" exact>
        <div className="header-logo">LOGO HERE</div>
      </Link>
      <Navbar className="main-navbar">
        <ul>
          <li>
            <StyledNavLink>
              <Link to="/vivo" active={pathname.startsWith("/vivo")}>
                <span>Vivo</span>
                <NavLinkBottomBorder active={pathname.startsWith("/vivo")} />
              </Link>
            </StyledNavLink>
          </li>
          <li>
            <StyledNavLink>
              <Link to="/canales" active={pathname.startsWith("/canales")}>
                <span>Canales</span>
                <NavLinkBottomBorder active={pathname.startsWith("/canales")} />
              </Link>
            </StyledNavLink>
          </li>
          <li>
            <StyledNavLink>
              <Link to="/eventos" active={pathname.startsWith("/eventos")}>
                <span>Eventos</span>
                <NavLinkBottomBorder active={pathname.startsWith("/eventos")} />
              </Link>
            </StyledNavLink>
          </li>
          <li>
            <StyledNavLink>
              <Link to="/tv" active={pathname.startsWith("/tv")}>
                <span>TV</span>
                <NavLinkBottomBorder active={pathname.startsWith("/tv")} />
              </Link>
            </StyledNavLink>
          </li>
          {/* <SearchBox2 /> */}
        </ul>
      </Navbar>
      <SlideToLeftOnHover className="btn-ingresar-container">
        <OutlinedButton className="btn-ingresar">INGRESAR</OutlinedButton>
      </SlideToLeftOnHover>
    </HeaderContainer>
  )
}
