import styled from "styled-components"

export const HeadingWithFinalDot = styled.h3`
  font-size: var(--size-10);
  font-weight: 400;
  font-family: "Open Sans", sans-serif;
  line-height: 1.4em;
  letter-spacing: 0.075em;

  &::after {
    content: ".";
    color: var(--color-primary);
  }
`
