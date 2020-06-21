import React from "react"
import styled from "styled-components"
import { SearchBox } from "./SearchBox"

const StyledHeader = styled.header`
  display: grid;
  grid-auto-flow: row;
  grid-auto-columns: minmax(auto, max-content);
  row-gap: 24px;
  text-align: center;

  @media screen and (min-width: 600px) {
    text-align: left;
    padding: 40px calc(5vw + 16px);
  }

  padding: 40px 8%;
  background-color: #191b1e;

  .tab-header-title {
    text-transform: uppercase;
    font-size: var(--size-12);
    line-height: 1em;
    font-weight: 400;
    letter-spacing: 0.1em;
  }
  .tab-header-subtitle {
    font-size: var(--size-6);
    font-weight: 400;
    font-family: "Open Sans", sans-serif;
    letter-spacing: 0.1em;
    color: var(--color-text-6);
  }
`

export function TabHeader({ title, subtitle, handleSearch }) {
  return (
    <StyledHeader>
      <h2 className="tab-header-title">{title}</h2>
      <h3 className="tab-header-subtitle">{subtitle}</h3>
      <SearchBox handleSearch={handleSearch} />
    </StyledHeader>
  )
}
