import styled from "styled-components"

export const StyledNavLink = styled.div`
  user-select: none;
  a {
    cursor: pointer;
    color: white;
    font-size: ${(props) => (props.fontSize ? props.fontSize : "22px")};
    line-height: 40px;
    letter-spacing: 0.25em;
    position: relative;
    display: flex;
    justify-content: center;
    text-decoration: none;
  }
`
