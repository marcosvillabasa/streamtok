import React from "react"
import styled from "styled-components"
import { FooterTitle } from "./Footer"

const StyledContactInformation = styled.section`
  margin-right: 7vw;
  text-align: left;
  p {
    font-style: normal;
    font-size: 21px;
    line-height: 45px;
    font-family: "Open Sans", sans-serif;
  }
`

export default function ContactInformation({ contact }) {
  return (
    <StyledContactInformation>
      <FooterTitle>
        Datos de contacto<span>.</span>
      </FooterTitle>
      <address>
        <p>Córdoba</p>
        <p>Urquiza 459</p>
        <p>351 428 4047</p>
        <p>Humberto Primo 670</p>
        <p>351 4318711</p>
        <p>streamtok@gmail.com</p>
      </address>
    </StyledContactInformation>
  )
}
