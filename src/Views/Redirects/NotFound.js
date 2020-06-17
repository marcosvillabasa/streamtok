import React from "react"
import styled from "styled-components"

const StyledNotFound = styled.div`
  padding: 2rem;
  font-size: 3rem;
  font-family: "Open Sans";
  color: grey;
`

export const NotFound = () => (
  <StyledNotFound>404 - RECURSO NO ENCONTRADO</StyledNotFound>
)
