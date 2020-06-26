import React from "react"
import styled from "styled-components"
import Link from "react-router-dom/Link"
import { SlideToLeftOnHover } from "../Utils/StyleUtils"
import { OutlinedButton } from "../Components/Buttons"
import { StyledNavLink } from "../Components/NavLink"
// import { SearchBox2 } from "../Components/SearchBox2"
import fixedLogo from "../assets/logostreamtokfixed.svg"
import { NavLink } from "react-router-dom"

const HeaderContainer = styled.header`
  padding: 16px;
  border-bottom: 1px solid white;
  background-color: #000e;
  z-index: 10;

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

const Wrapper = styled.div`
  .sidebar-overlay {
    @media screen and (max-width: 599.95px) {
      position: fixed;
      top: 0;
      left: 0;
      bottom: 0;
      right: 0;
      background-color: #000;
      opacity: 0;
      transition: opacity 0.5s;
      will-change: opacity;
      z-index: 1000;
      visibility: hidden;

      &.true {
        touch-action: none;
        opacity: 0.5;
        visibility: visible;
      }
    }
  }
  .menu-container {
    @media screen and (max-width: 599.95px) {
      position: fixed;
      top: 0px;
      left: 0px;
      width: 240px;
      height: 100vh;
      transform: translateX(-100%);
      transition: transform 0.5s;
      will-change: transform;
      z-index: 10100;
      &.true {
        touch-action: none;
        transform: translateX(0%);
      }
    }
  }
`

export default function Menu(props) {
  const [open, setOpen] = React.useState(false)

  const closeMenu = React.useCallback(() => {
    setOpen(false)
  }, [])

  React.useEffect(() => {
    let start_scroll = null

    const onTouchStart = (event) => {
      start_scroll = event.changedTouches[0].clientX
    }

    const onTouchMove = (event) => {
      if (event.changedTouches && event.changedTouches.length) {
        if (event.changedTouches[0].clientX - start_scroll > 150) {
          setOpen(true)
        } else if (start_scroll - event.changedTouches[0].clientX > 150) {
          setOpen(false)
        }
      }
    }

    document.querySelector("#root").addEventListener("touchstart", onTouchStart)
    document.querySelector("#root").addEventListener("touchmove", onTouchMove)

    return () => {
      document
        .querySelector("#root")
        .removeEventListener("touchstart", onTouchStart)
      document
        .querySelector("#root")
        .removeEventListener("touchmove", onTouchMove)
    }
  }, [])

  return (
    <Wrapper>
      <div className={`sidebar-overlay ${open}`} onClick={closeMenu} />
      <HeaderContainer
        className={`menu-container ${open}`}
        id="menu-container"
        onClick={closeMenu}
      >
        <Link to="/" exact>
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
