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

const imagesSrc = [
  grid1,
  grid2,
  grid3,
  grid4,
  grid5,
  grid6,
  grid7,
  grid8,
  grid9,
  grid10,
  grid11,
  grid12,
  grid13,
  grid14,
  grid15,
]

const StyledCanalesGrid = styled.div`
  display: grid;
  gap: 50px 80px;
  grid-template-columns: repeat(auto-fill, 260px);
`

const ImgGridContainer = styled.div`
  width: 150px;
  height: 150px;
  border-radius: 5px;
  background-color: #22252a;
  border: 1px solid #707070;
  padding: 35px 55px;
  display: flex;
  align-items: center;

  img {
    width: inherit;
  }
`

const Title = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  margin-bottom: 72px;

  div {
    color: #101114;
    position: absolute;
    font-weight: 600;
    font-size: 9vw;
    text-shadow: -1px 0 white, 0 1px white, 1px 0 white, 0 -1px white;
    opacity: 0.08;
    user-select: none;
    transform: translateY(-72px);
    will-change: font-size;
  }

  h2 {
    font-size: 40px;
    font-weight: 400;
    letter-spacing: 4px;
  }

  p {
    font-size: 28px;
    font-weight: 400;
    letter-spacing: 2.8px;
  }
`

export default function CanalesGrid(props) {
  return (
    <>
      <Title>
        <div>CANALES EN VIVO</div>
        <h2>CANALES EN VIVO</h2>
        <p>Programación en vivo de canales via Live streaming</p>
      </Title>
      <StyledCanalesGrid>
        {imagesSrc.map((src) => (
          <ImgGridContainer>
            <img className="imgigm" src={src}></img>
          </ImgGridContainer>
        ))}
      </StyledCanalesGrid>
    </>
  )
}
