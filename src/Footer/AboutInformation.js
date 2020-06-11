import React from "react"
import styled from "styled-components"
import logo from "../assets/logo"

const _str_about_information =
  "Streamtok es una empresa de entretenimiento que opera a nivel nacional, cuyo servicio principal es la transmisión de Live Streaming de contenidos audiovisuales."

const StyledAboutInformation = styled.section`
  div {
    height: 85px;
    width: 180px;
    overflow: hidden;
  }
  p {
    min-width: 380px;
    width: 60%;
    color: #999;
    font-size: 24px;
    margin-top: 40px;
    font-family: "Open Sans", sans-serif;

    @media screen and (max-width: 1280px) {
      width: 100%;
    }
  }
  svg {
    transform: translate(60px, 75px) scale(1.6);
  }

  @media screen and (max-width: 1280px) {
    grid-column: span 2;

    p {
      width: 100%;
    }
  }
`

export default function AboutInformation() {
  return (
    <StyledAboutInformation id="about-information">
      <div>{logo}</div>
      <p>{_str_about_information}</p>
    </StyledAboutInformation>
  )
}
