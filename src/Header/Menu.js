import React from "react"
import styled from "styled-components"
import Link from "react-router-dom/Link"
import { useLocation } from "react-router"
import logo from "../assets/logo"

const HeaderContainer = styled.header`
  height: 80px;
  padding: 30px var(--body-margin);
  display: flex;
  align-items: flex-end;
  backdrop-filter: blur(20px);
  justify-content: space-between;
  border-bottom: 1px solid white;
`
const MaterialIcon = styled.span`
  font-size: 40px;
`

const Navbar = styled.nav`
  ul {
    text-decoration: none;
    list-style: none;
    display: grid;
    grid-auto-flow: column;

    column-gap: 90px;

    li {
      list-style: none;
    }
  }
`

const SelectedTabBorder = styled.div`
  transition: 0.2s all ease-in-out;
  will-change: opacity;
  opacity: ${(props) => (props.active ? 1 : 0)};
  height: 5px;
  width: 140px;
  background-color: red;
  position: absolute;
  place-self: flex-end;
  bottom: -32px;
  box-shadow: 0px 0px 16px 0px var(--color-primary);
`

const StyledLink = styled.div`
  user-select: none;
  a {
    color: white;
    font-size: 22px;
    line-height: 40px;
    letter-spacing: 5px;
    position: relative;
    display: flex;
    justify-content: center;
    text-decoration: none;
  }
`

const Button = styled.button`
  background: transparent;
  cursor: pointer;
  border-radius: 10px;
  border: 2px solid var(--color-primary);
  font-size: 21px;
  font-weight: 600;
  letter-spacing: 1.68px;
  color: white;
  line-height: 32px;
  padding: 10px 40px;
  transition: 0.2s all;
  overflow: hidden;
  position: relative;

  &::before {
    content: "";
    z-index: -1;
    top: 0;
    left: -100%;
    width: 100%;
    height: 100%;
    position: absolute;
    transition: all 0.2s ease;
    background-color: #ff0d57;
  }

  &:hover::before {
    left: 0;
  }
`

export default function Menu(props) {
  const { pathname } = useLocation()
  return (
    <HeaderContainer>
      <Link to="/" exact>
        <div style={{ color: "white" }}>{logo}</div>
      </Link>
      <Navbar>
        <ul>
          <li>
            <StyledLink>
              <Link to="/vivo" active={pathname === "/vivo"}>
                <span>Vivo</span>
                <SelectedTabBorder active={pathname === "/vivo"} />
              </Link>
            </StyledLink>
          </li>
          <li>
            <StyledLink>
              <Link to="/canales" active={pathname === "/canales"}>
                <span>Canales</span>
                <SelectedTabBorder active={pathname === "/canales"} />
              </Link>
            </StyledLink>
          </li>
          <li>
            <StyledLink>
              <Link to="/eventos" active={pathname === "/eventos"}>
                <span>Eventos</span>
                <SelectedTabBorder active={pathname === "/eventos"} />
              </Link>
            </StyledLink>
          </li>
          <li>
            <StyledLink>
              <Link to="/tv" active={pathname === "/tv"}>
                <span>TV</span>
                <SelectedTabBorder active={pathname === "/tv"} />
              </Link>
            </StyledLink>
          </li>
          <MaterialIcon className="material-icons color-primary">
            search
          </MaterialIcon>
        </ul>
      </Navbar>
      <Button>INGRESAR</Button>
    </HeaderContainer>
  )
}
