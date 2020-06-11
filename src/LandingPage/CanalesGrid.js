import React from "react"
import styled from "styled-components"

import grid1 from "../assets/Todo_Noticias_2016@2x.png"
import grid2 from "../assets/nickelodeon-logo@2x.png"
import grid3 from "../assets/Logo_Televisión_Pública_Argentina@2x.png"
import grid4 from "../assets/logo@2x.png"
import grid5 from "../assets/Imagen 5@2x.png"
import grid6 from "../assets/Imagen 4@2x.png"
import grid7 from "../assets/Imagen 3@2x.png"
import grid8 from "../assets/Imagen 2@2x.png"
import grid9 from "../assets/Imagen 1@2x.png"
import grid10 from "../assets/Canal Volver - Logo.fw@2x.png"
import grid11 from "../assets/1200px-Logo_RTVE.svg@2x.png"
import grid12 from "../assets/publicidad-cronica-tv@2x.png"
import grid13 from "../assets/gSM7MgZ-_400x400@2x.png"
import grid14 from "../assets/dd985-canal26hd@2x.png"
import grid15 from "../assets/C5N_Logo_2015@2x.png"
import { useHistory } from "react-router-dom"

const imagesSrc = [
  { src: grid1, link: "tn" },
  { src: grid2, link: "nickelodeon" },
  { src: grid3, link: "tvpublica" },
  { src: grid4, link: "sabradios" },
  { src: grid5, link: "vorterix" },
  { src: grid6, link: "cadenaser" },
  { src: grid7, link: "encuentro" },
  { src: grid8, link: "euronews" },
  { src: grid9, link: "kzoentertainment" },
  { src: grid10, link: "volver" },
  { src: grid11, link: "rtve" },
  { src: grid12, link: "cronica" },
  { src: grid13, link: "ln" },
  { src: grid14, link: "26hd" },
  { src: grid15, link: "c5n" },
]

const StyledCanalesGrid = styled.div`
  display: grid;
  min-width: 500px;
  gap: 2vw 4vw;
  grid-template-columns: repeat(auto-fill, minmax(150px, 1fr));
  grid-auto-rows: minmax(120px, auto);

  @media only screen and (min-width: 1280px) and (max-width: 2000px) {
    grid-template-columns: repeat(5, minmax(150px, 1fr));
  }
`

const GridImgContainer = styled.div`
  width: 60%;
  border-radius: 5px;
  background-color: #22252a;
  border: 1px solid #707070;
  padding: 35px 20%;
  display: flex;
  align-items: center;
  transition: 0.3s border-color, 0.2s box-shadow;
  cursor: pointer;

  &:hover {
    border-color: var(--color-primary);
    box-shadow: 0 0 0 1px var(--color-primary);
  }

  img {
    width: 100%;
  }
`

const Title = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  margin-bottom: 72px;

  label {
    color: #101114;
    white-space: nowrap;
    position: absolute;
    letter-spacing: 0.25em;
    font-weight: 600;
    font-size: 120px;
    text-shadow: -1px 0 white, 0 1px white, 1px 0 white, 0 -1px white;
    opacity: 0.05;
    pointer-events: none;
    user-select: none;
    transform: translateY(-60px);
    will-change: font-size;
  }

  h2 {
    font-size: 40px;
    font-weight: 400;
    letter-spacing: 0.1em;
  }

  h3 {
    font-size: 28px;
    font-weight: 400;
    letter-spacing: 0.1em;
  }
`

const Container = styled.div`
  padding-bottom: 120px;
`

export default function CanalesGrid(props) {
  const history = useHistory()
  return (
    <Container>
      <Title>
        {/* <label>CANALES EN VIVO</label> */}
        <h2>CANALES EN VIVO</h2>
        <h3>Programación en vivo de canales via Live streaming</h3>
      </Title>
      <StyledCanalesGrid>
        {imagesSrc.map(({ src, link }) => (
          <GridImgContainer
            onClick={() => {
              history.push({ pathname: "/tv/" + link })
              window.scrollTo(0, 0)
            }}
          >
            <img alt="logo-canal" src={src}></img>
          </GridImgContainer>
        ))}
      </StyledCanalesGrid>
    </Container>
  )
}
