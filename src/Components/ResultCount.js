import styled from "styled-components"

export const ResultCount = styled.div`
  margin-left: 16px;
  @media screen and (min-width: 600px) {
    font-size: var(--size-4);
  }
  font-size: var(--size-2);
  line-height: 2.5em;
  font-weight: 400;
  letter-spacing: 0.1em;
  color: var(--color-text-5);
  display: inline-flex;

  span {
    color: var(--color-text-9);
    font-weight: 600;
  }
`
