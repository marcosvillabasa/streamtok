import React from "react"
import styled from "styled-components"
import { RoundedPrimaryButton } from "../Components/Buttons"

const HeroSection = styled.section`
  text-align: left;
  width: max-content;
  height: calc(100vh - 140px);
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
`

const HeroTitle = styled.h1`
  font-size: 48px;
  font-weight: 400;
  letter-spacing: 0.1em;
`

const HeroText = styled.p`
  font-size: 20px;
  line-height: 1.5em;
  font-family: "Open Sans", sans-serif;
  width: 30vw;
  min-width: 400px;
`

export function Hero(props) {
  return (
    <HeroSection id="hero-section">
      <HeroTitle>Disfrutá del mejor streaming</HeroTitle>
      <HeroText>
        Streamtok es una empresa de entretenimiento que opera a nivel nacional,
        cuyo servicio principal es la transmisión de Live Streaming de
        contenidos audiovisuales.
      </HeroText>
      <RoundedPrimaryButton>
        VER CONTENIDO
        <span className="material-icons">arrow_forward</span>
      </RoundedPrimaryButton>
    </HeroSection>
  )
}
