import React from "react"
import styled from "styled-components"

const StyledSearchBox = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  height: 40px;

  input {
    padding: 12px 12px 12px 40px;
    border: 1px solid transparent;
    border-radius: 5px;
    background-color: transparent;
    font-size: 21px;
    font-family: "Open Sans", sans-serif;
    width: 220px;
    color: white;
    cursor: not-allowed;
  }
  span {
    left: 8px;
    position: absolute;
    font-size: 30px;
    transform: translateY(1px);
  }
`

export function SearchBox2({ handleSearch }) {
  return (
    <StyledSearchBox>
      <input
        placeholder="Buscar..."
        type="text"
        onChange={handleSearch}
        disabled
      />
      <span className="material-icons color-primary">search</span>
    </StyledSearchBox>
  )
}
