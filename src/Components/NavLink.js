import styled from "styled-components"

export const StyledNavLink = styled.div`
  user-select: none;
  a {
    cursor: pointer;
    color: white;
    font-size: var(--size-7);
    line-height: 2.6em;
    letter-spacing: 0.25em;
    position: relative;
    display: flex;
    justify-content: center;
    text-decoration: none;

    span {
      position: relative;
    }

    &:hover span::after {
      content: "";
      position: absolute;
      bottom: -2px;
      left: -16px;
      right: -16px;
      height: 3px;
      box-shadow: 0px 0px 16px 0px #1bb382;
      border-radius: 10px;
      background-color: #1bb382;
    }

    &.active span {
      &::after {
        content: "";
        position: absolute;
        bottom: -2px;
        left: -16px;
        right: -16px;
        height: 5px;
        box-shadow: 0px 0px 16px 0px var(--color-primary);
        border-radius: 10px;
        background-color: var(--color-primary);
      }
    }
  }
  &.main-navbar-link {
    a {
      @media screen and (max-width: 599.95px) {
        line-height: 4em;
      }
    }
  }
`
