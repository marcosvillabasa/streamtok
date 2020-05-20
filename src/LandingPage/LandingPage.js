import React from "react"
import styled from "styled-components"
import AdBanner from "../Ads/AdBanner"
import Composition from "./Composition"
import CanalesGrid from "./CanalesGrid"

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

export const RoundedPrimaryButton = styled.button`
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
      <RoundedPrimaryButton>
        VER CONTENIDO
        <span className="material-icons">arrow_forward</span>
      </RoundedPrimaryButton>
    </HeroSection>
  )
}

const ScrollHelper = styled.div`
  * {
    user-select: none;
  }

  position: absolute;
  top: 0;
  right: calc(-1 * var(--body-margin));
  height: 100vh;
  width: calc(var(--body-margin) + 60px);
  backdrop-filter: blur(25px);
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  .scroll-notice {
    writing-mode: vertical-rl;
    font-family: "Open Sans", sans-serif;
    font-size: 20px;
    margin-bottom: 40px;
  }

  .coso {
    border-radius: 100px;
    border: 1px solid white;
    width: 50px;
    height: 120px;
    display: flex;
    align-items: center;
    justify-content: center;
    .arrow {
      transform: rotate(-90deg) scale(1.5);
    }
  }
`

const StyledLandingPage = styled.div`
  margin: 0px var(--body-margin);
  .react-multi-carousel-list {
    margin: 0 60px;
  }
`

export default function LandingPage(props) {
  return (
    <StyledLandingPage>
      <Hero />
      <AdBanner />
      <ScrollHelper>
        <span className="scroll-notice">Scroll para ver más</span>
        <div className="coso">
          <span className="material-icons arrow">keyboard_backspace</span>
        </div>
      </ScrollHelper>
      <Composition />
      <CanalesGrid />
    </StyledLandingPage>
  )
}
