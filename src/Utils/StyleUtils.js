import styled from "styled-components"

export const SlideToLeftOnHover = styled.div`
  overflow: hidden;
  position: relative;
  border-radius: 10px;
  &::before {
    content: "";
    z-index: -1;
    top: 0;
    left: -100%;
    width: 100%;
    height: 100%;
    position: absolute;
    transition: left 0.33s ease;
    background-color: #ff0d57;
  }

  &:hover::before {
    left: 0;
  }
`
