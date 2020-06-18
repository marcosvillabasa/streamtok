import React from "react"
import styled from "styled-components"
import logo1 from "../assets/municipalidad de cosquin.svg"
import logo2 from "../assets/logo cosquin.svg"
import { splitTrackTitle } from "../Utils/splitTrackTitle"

const StyledHeader = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #191b1e;
  height: 200px;

  .track-info-container {
    margin-bottom: -50px;
    margin-left: 100px;

    .track-artist {
      font-size: 28px;
      color: #eee;
    }
    .track-title {
      font-size: 24px;
      color: #747474;
    }
  }
`

const LogosContainer = styled.div`
  display: flex;
  align-items: center;
  margin-right: var(--body-margin);

  .logo1 {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 85px;
    width: 180px;

    img {
      transform: scale(1.6);
    }
  }

  .logo2 {
    display: flex;
    align-items: center;
    justify-content: center;
    margin-left: 70px;
    height: 85px;
    width: 280px;

    img {
      transform: scale(2);
    }
  }
`

export function MediaPlayerHeader({ currentTrack }) {
  const { artist, trackTitle } = splitTrackTitle(currentTrack?.title)
  return (
    <StyledHeader>
      <div className="track-info-container">
        <p className="track-artist">{artist}</p>
        <p className="track-title">{trackTitle}</p>
      </div>
      <LogosContainer>
        <div className="logo1">
          <img alt="logo-municipalidad-cosquin" src={logo1}></img>
        </div>
        <div className="logo2">
          <img alt="logo-festival-cosquin" src={logo2}></img>
        </div>
      </LogosContainer>
    </StyledHeader>
  )
}
