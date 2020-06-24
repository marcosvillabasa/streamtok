import React from "react"
import styled from "styled-components"
import strings from "../../strings.json"

const StyledNotFound = styled.div`
  padding: 2rem;
  font-size: 3rem;
  font-family: "Open Sans";
  color: grey;
`

export const NotFound = () => (
  <StyledNotFound>
    {strings.not_found_message || "404 - RECURSO NO ENCONTRADO"}
  </StyledNotFound>
)
