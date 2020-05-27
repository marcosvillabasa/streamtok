import React from "react"
import styled from "styled-components"

const StyledSearchBox = styled.div`
  position: relative;
  display: flex;
  align-items: center;

  input {
    padding: 1rem 6rem 1rem 3rem;
    border: 1px solid #707070;
    border-radius: 5px;
    background-color: #2e3033;
    font-size: 2.1rem;
    font-family: "Open Sans", sans-serif;
    min-width: max-content;
    color: white;
  }
  span {
    right: 16px;
    position: absolute;
    font-size: 32px;
  }
`

export function SearchBox({ handleSearch }) {
  return (
    <StyledSearchBox>
      <input
        placeholder="Buscar por artistas o generos"
        type="text"
        onChange={handleSearch}
      />
      <span className="material-icons">search</span>
    </StyledSearchBox>
  )
}
