import React from "react"
import styled from "styled-components"
import { PlaylistItem } from "./HorizontalPlaylistItem"

const StyledHorizontalPlaylist = styled.div`
  margin: 0px 50px;
  display: flex;
  overflow-x: auto;

  ::-webkit-scrollbar {
    height: 8px;
  }

  ::-webkit-scrollbar-track {
    background-color: #fff1;
    border-radius: 10px;
  }

  ::-webkit-scrollbar-thumb {
    background: var(--color-primary);
    border-radius: 10px;
  }

  ::-webkit-scrollbar-thumb:hover {
    background: #b30000;
  }

  .track-title {
    font-size: 48px;
  }
`

const PlaylistTitle = styled.p`
  font-size: 28px;
  margin: 60px 0px 20px 70px;
`

const TitleContainer = styled.div`
  position: relative;
`

const ResultCount = styled.div`
  position: absolute;
  top: 0;
  right: 60px;
  font-size: 20px;
  font-weight: 400;
  letter-spacing: 0.1em;
  color: #747474;
  display: inline-flex;

  span {
    color: white;
    font-weight: 600;
  }
`

export function HorizontalPlaylist({ playlist, filterFn }) {
  return (
    <>
      <TitleContainer>
        <PlaylistTitle>{playlist.title}</PlaylistTitle>
        <ResultCount className="result-count">
          Se encontraron&nbsp;
          <span>{playlist.playlist.filter(filterFn).length}</span>
          <span>&nbsp;resultados.</span>
        </ResultCount>
      </TitleContainer>
      <StyledHorizontalPlaylist>
        {playlist.playlist.filter(filterFn).map((track) => (
          <PlaylistItem key={track.mediaid} track={track} />
        ))}
      </StyledHorizontalPlaylist>
    </>
  )
}
