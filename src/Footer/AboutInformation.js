import React from "react"
import styled from "styled-components"
import fixedLogo from "../assets/logostreamtokfixed.svg"

const _str_about_information =
  "Streamtok es una empresa de entretenimiento que opera a nivel nacional, cuyo servicio principal es la transmisión de Live Streaming de contenidos audiovisuales."

const StyledAboutInformation = styled.section`
  height: 100%;
  .footer-logo-container {
    height: 85px;
    width: 180px;
    margin-left: auto;
    margin-right: auto;

    .footer-logo {
      height: 100%;
      width: 100%;
    }
  }
  .about-text {
    color: var(--color-text-5);
    margin-top: 20px;
    font-family: "Open Sans", sans-serif;
    text-align: center;
  }
  @media screen and (min-width: 1280px) {
    padding: 0px 80px;
    .footer-logo-container {
      margin: 0;
    }
    .about-text {
      max-width: 480px;
      text-align: left;
    }
  }
`

export default function AboutInformation() {
  return (
    <StyledAboutInformation id="about-information">
      <div className="footer-logo-container">
        <img className="footer-logo" alt="streamtok logo" src={fixedLogo} />
      </div>
      <p className="about-text">{_str_about_information}</p>
    </StyledAboutInformation>
  )
}
