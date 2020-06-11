import React from "react"
import styled from "styled-components"
import { Playlists } from "../../API/StaticAssets"
import { Link } from "react-router-dom"
import { Helmet } from "react-helmet"

const StyledListaCanales = styled.div`
  a {
    font-size: 3rem;
    text-decoration: none;
    color: var(--color-primary);
  }

  & > div {
    display: flex;
    flex-direction: column;
  }
`

export default function ListaCanales(props) {
  return (
    <StyledListaCanales>
      <Helmet>
        <title>Lista de canales</title>
      </Helmet>
      <h2>LISTA DE CANALES</h2>
      <div>
        {Object.entries(Playlists).map(([key, value]) => (
          <Link to={value}>{key}</Link>
        ))}
      </div>
    </StyledListaCanales>
  )
}
