import React from "react"
import styled from "styled-components"
import logo from "../assets/logo"

const _str_about_information =
  "Streamtok es una empresa de entretenimiento que opera a nivel nacional, cuyo servicio principal es la transmisión de Live Streaming de contenidos audiovisuales."

const StyledAboutInformation = styled.section`
  height: 100%;
  div {
    height: 85px;
    width: 180px;
    overflow: hidden;
  }
  p {
    color: var(--color-text-6);
    font-size: var(--size-6);
    margin-top: 20px;
    font-family: "Open Sans", sans-serif;

    @media screen and (min-width: 1280px) {
      padding-left: 32px;
      padding-right: 32px;
    }
  }
  .footer-logo-container {
    margin-left: auto;
    margin-right: auto;
  }
  svg {
    transform: translate(60px, 75px) scale(1.6);
  }
`

export default function AboutInformation() {
  return (
    <StyledAboutInformation id="about-information">
      <div className="footer-logo-container">{logo}</div>
      <p>{_str_about_information}</p>
    </StyledAboutInformation>
  )
}
