import React from "react"
import styled from "styled-components"
import { SearchBox } from "../../Components/SearchBox"

const StyledHeader = styled.header`
  display: flex;
  justify-content: space-between;
  flex-flow: row wrap;
  align-items: center;
  padding: 8rem 6% 5rem 6%;
  background-color: #191b1e;
  height: 12rem;

  h2 {
    flex: 0 0 100%;
    text-transform: uppercase;
    font-size: 4rem;
    font-weight: 400;
    letter-spacing: 0.1em;
  }
  h3 {
    font-size: 28px;
    font-weight: 400;
    font-family: "Open Sans", sans-serif;
    letter-spacing: 0.1em;
    color: #747474;
  }

  & > div {
    margin-left: 3rem;
    flex: 1 0 300px;
    max-width: 600px;
  }

  /* search box */
  input {
    width: 100%;
  }
`

export function Header({ handleSearch }) {
  return (
    <StyledHeader>
      <h2>Lista de eventos</h2>
      <h3>Los mejores shows por artistas y géneros.</h3>
      <SearchBox handleSearch={handleSearch} />
    </StyledHeader>
  )
}
