import styled from "styled-components"

export const getColorByProp = (propName, defaultValue) => (props) => {
  if (props[propName] === "primary") {
    return "var(--color-primary)"
  } else if (props[propName] === "secondary") {
    return "var(--color-secondary)"
  } else if (props[propName]) {
    return props[propName]
  } else {
    return defaultValue
  }
}

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
    transition: all 0.2s ease;
    background-color: #ff0d57;
  }

  &:hover::before {
    left: 0;
  }
`
