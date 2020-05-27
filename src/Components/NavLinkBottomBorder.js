import styled from "styled-components"

export const NavLinkBottomBorder = styled.div`
  pointer-events: none;
  transition: 0.2s all ease-in-out;
  will-change: opacity;
  opacity: ${(props) => (props.active ? 1 : 0)};
  height: 5px;
  width: 14rem;
  background-color: red;
  position: absolute;
  place-self: flex-end;
  bottom: -32px;
  box-shadow: 0px 0px 16px 0px var(--color-primary);
`
