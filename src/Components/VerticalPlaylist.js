import React from "react"
import styled from "styled-components"
import { PlaylistItem } from "./VerticalPlaylistItem"

const StyledVerticalPlaylist = styled.div`
  background-color: #22252a;
  border-radius: 10px;
  border: 1px solid #707070;
  min-width: 480px;
  max-width: 480px;
  width: 480px;

  @media screen and (max-width: 1280px) {
    max-width: 800px;
    width: 90%;
  }

  .playlist-title {
    font-size: 2rem;
    font-weight: 600;
    padding: 3rem 0rem;
    padding-left: 3rem;
    border-bottom: 1px solid #707070;
  }

  .container {
    margin: 1rem;

    ::-webkit-scrollbar {
      width: 8px;
      height: 0px;
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

    height: 650px;
    overflow-y: scroll;
  }
`

export function VerticalPlaylist({ playlist, currentTrack, setCurrentTrack }) {
  return (
    <StyledVerticalPlaylist>
      <div className="playlist-title">
        <label>Lista de videos relacionados</label>
      </div>
      <div className="container">
        {playlist.map((track) => (
          <PlaylistItem
            track={track}
            setCurrentTrack={setCurrentTrack}
            active={currentTrack?.mediaid === track.mediaid}
          />
        ))}
      </div>
    </StyledVerticalPlaylist>
  )
}
