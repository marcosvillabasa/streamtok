import React from "react"
import styled from "styled-components"
import { useLocation } from "react-router"
import strings from "../strings.json"

const StyledSearchBox = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  align-self: normal;

  .track-search-box {
    width: 100%;
    padding: 0.6em 1.8em 0.6em 0.8em;
    border: 1px solid #707070;
    border-radius: 5px;
    background-color: #2e3033;
    font-size: var(--size-4);
    font-family: "Open Sans", sans-serif;
    min-width: max-content;
    color: white;
  }

  .search-icon {
    right: 8px;
    color: var(--color-text-8);
    position: absolute;
    font-size: var(--size-10);
  }
`

export function SearchBox({ handleSearch }) {
  const inputRef = React.useRef(null)
  const location = useLocation()
  React.useEffect(() => {
    const search = new URLSearchParams(location.search).get("search")
    if (search) {
      inputRef.current.value = search
    }
  }, [location.search])

  return (
    <StyledSearchBox className="search-box">
      <input
        ref={inputRef}
        placeholder={
          strings.search_placeholder || "Buscar por artistas o generos"
        }
        type="text"
        className="track-search-box"
        onChange={handleSearch}
      />
      <span className="material-icons search-icon">search</span>
    </StyledSearchBox>
  )
}
