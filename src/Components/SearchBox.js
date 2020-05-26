import React from "react"
import styled from "styled-components"

const StyledSearchBox = styled.div`
  position: relative;
  display: flex;
  align-items: center;

  input {
    padding: 12px 60px 12px 30px;
    border: 1px solid #707070;
    border-radius: 5px;
    background-color: #2e3033;
    font-size: 21px;
    font-family: "Open Sans", sans-serif;
    width: 536px;
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
