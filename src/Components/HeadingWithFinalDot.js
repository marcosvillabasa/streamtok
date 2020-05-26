import styled from "styled-components"

export const HeadingWithFinalDot = styled.p`
  width: max-content;
  font-size: 28px;
  font-family: "Open Sans", sans-serif;
  line-height: 1.4em;
  letter-spacing: 0.1em;

  &::after {
    content: ".";
    color: var(--color-primary);
  }
`
