import React from "react"
import styled from "styled-components"
import logo1 from "../assets/municipalidad de cosquin.svg"
import logo2 from "../assets/logo cosquin.svg"
import { splitTrackTitle } from "../Utils/splitTrackTitle"

const StyledHeader = styled.header`
  background-color: #191b1e;
  display: flex;

  .track-info-container {
    padding: 6% 2% 6% 6%;
    @media screen and (min-width: 600px) {
      padding: 3% 2% 3% 4%;
    }
    .track-artist {
      font-size: var(--size-10);
      color: var(--color-text-9);
    }
    .track-title {
      font-size: var(--size-6);
      color: var(--color-text-5);
    }
  }
`

const LogosContainer = styled.div`
  flex: 1 1 auto;
  align-self: center;

  display: grid;
  gap: 24px;
  justify-content: flex-end;
  margin-right: 2%;
  justify-items: center;

  @media screen and (min-width: 600px) {
    grid-auto-flow: column;
  }

  @media screen and (min-width: 960px) {
    gap: calc(20% - 64px);
  }

  .logo,
  .logo {
    height: 40px;
    @media screen and (min-width: 600px) {
      height: 50px;
    }

    @media screen and (min-width: 960px) {
      height: 80px;
    }

    @media screen and (min-width: 1280px) {
      height: 100px;
    }
    img {
      height: inherit;
      width: auto;
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
        <div className="logo">
          <img alt="logo-municipalidad-cosquin" src={logo1}></img>
        </div>
        <div className="logo">
          <img alt="logo-festival-cosquin" src={logo2}></img>
        </div>
      </LogosContainer>
    </StyledHeader>
  )
}
