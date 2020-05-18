import React from "react"
import styled from "styled-components"
import AdBanner from "../Ads/AdBanner"

const HeroSection = styled.section`
  text-align: left;
  width: max-content;
  height: 900px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
`

const HeroTitle = styled.h1`
  font-size: 48px;
  font-weight: 400;
  letter-spacing: 5px;
`

const HeroText = styled.p`
  font-size: 20px;
  line-height: 1.5em;
  font-family: "Open Sans", sans-serif;
  width: 30vw;
  min-width: 400px;
`

const Button = styled.button`
  margin-top: 64px;
  background: var(--color-primary);
  cursor: pointer;
  border-radius: 200px;
  border: none;
  font-size: 21px;
  line-height: 32px;
  font-weight: 600;
  letter-spacing: 1.05px;
  color: white;
  padding: 16px 48px;
  transition: 0.2s all;
  overflow: hidden;
  position: relative;

  &:hover {
    span {
      transform: translate(8px, 5px);
    }
  }
  span {
    margin-left: 8px;
    transform: translate(0px, 5px);
    will-change: transform;
    transition: 0.2s transform;
  }

  &::before {
    content: "";
    z-index: -1;
    top: 0;
    left: -100%;
    width: 100%;
    height: 100%;
    position: absolute;
    transition: all 0.2s ease;
    background-color: #ff0d57;
  }

  &:hover::before {
    left: 0;
  }
`

function Hero(props) {
  return (
    <HeroSection id="hero-section">
      <HeroTitle>Disfrutá del mejor streaming</HeroTitle>
      <HeroText>
        Streamtok es una empresa de entretenimiento que opera a nivel nacional,
        cuyo servicio principal es la transmisión de Live Streaming de
        contenidos audiovisuales.
      </HeroText>
      <Button>
        VER CONTENIDO
        <span className="material-icons">arrow_forward</span>
      </Button>
    </HeroSection>
  )
}

export default function LandingPage(props) {
  return (
    <div>
      <Hero />
      <AdBanner />
    </div>
  )
}
