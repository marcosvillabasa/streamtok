import React from "react"
import styled from "styled-components"
import { RoundedPrimaryButton } from "../Components/Buttons"
import Grid from "@material-ui/core/Grid"
import useInView from "react-cool-inview"
import strings from "../strings.json"

const HeroSection = styled.section`
  text-align: left;
  height: 100vh;
  position: relative;

  .header-container {
    position: absolute;
    top: 50%;
    left: 5%;

    @media (orientation: landscape) {
      transform: translateY(-50%);
    }
    @media (orientation: portrait) {
      transform: translateY(-75%);
    }
  }

  .btn-hero {
    width: 30ch;
    margin: 2em 8% 0px 8%;
  }
`

const HeroTitle = styled.h1`
  font-size: var(--size-12);
  font-weight: 400;
  margin-bottom: 1em;
  letter-spacing: 0.1em;
  transform: ${(props) => (props.inView ? "none" : "translateY(-32px)")};
  animation: ${(props) => (props.inView ? "movedown 1.5s" : "none")};
`

const HeroText = styled.p`
  font-size: var(--size-4);
  line-height: 1.5em;
  font-family: "Open Sans", sans-serif;
  @media screen and (min-width: 1280px) {
    padding-right: 32%;
  }
  transform: ${(props) => (props.inView ? "none" : "translateY(-32px)")};
  animation: ${(props) => (props.inView ? "movedown 1.5s" : "none")};
`

export function Hero(props) {
  const { ref, inView } = useInView({ threshold: 0 })

  const onClick = (_) => {
    document.querySelector("#menu-container").classList.toggle("active")
    document.querySelector("#sidebar-overlay").classList.toggle("active")
  }

  return (
    <HeroSection id="hero-section" onClick={onClick}>
      <Grid item xs={10} sm={8} lg={7} className="header-container">
        <div ref={ref}>
          <HeroTitle inView={inView}>
            {strings.hero_header_text || "header_text"}
          </HeroTitle>
          <HeroText inView={inView}>
            {strings.hero_subheader_text || "subheader_text"}
          </HeroText>
        </div>
        <RoundedPrimaryButton className="btn-hero">
          VER CONTENIDO
          <span className="material-icons">arrow_forward</span>
        </RoundedPrimaryButton>
      </Grid>
    </HeroSection>
  )
}
