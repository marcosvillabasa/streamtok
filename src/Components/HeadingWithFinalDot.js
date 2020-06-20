import styled from "styled-components"

export const HeadingWithFinalDot = styled.h3`
  font-size: var(--size-14);
  font-weight: 400;
  font-family: "Open Sans", sans-serif;
  line-height: 1.4em;
  letter-spacing: 0.1em;

  @media screen and (min-width: 1280px) {
    font-size: var(--size-10);
  }

  &::after {
    content: ".";
    color: var(--color-primary);
  }
`
