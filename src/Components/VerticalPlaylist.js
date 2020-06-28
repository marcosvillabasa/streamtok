import React from "react"
import styled from "styled-components"
import { PlaylistItem } from "./VerticalPlaylistItem"

const StyledVerticalPlaylist = styled.div`
  background-color: #22252a;
  border-radius: 10px;
  border: 1px solid #707070;
  width: 90%;
  margin-left: auto;
  margin-right: auto;

  .playlist-title {
    font-size: 24px;
    text-align: left;
    font-weight: 600;
    padding: 1em 2em;
    border-bottom: 1px solid #707070;
  }

  .container {
    ::-webkit-scrollbar {
      width: 5px;
      @media screen and (pointer: fine) {
        width: 10px;
      }
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

    max-height: 650px;
    overflow-y: scroll;
  }
`

export function VerticalPlaylist({
  title,
  playlist,
  currentTrack,
  setCurrentTrack,
  size,
}) {
  return (
    <StyledVerticalPlaylist>
      <div className="playlist-title">
        <label>{title}</label>
      </div>
      <div className="container">
        {playlist.map((track, index) => (
          <PlaylistItem
            key={index + track.mediaid}
            size={size}
            track={track}
            setCurrentTrack={setCurrentTrack}
            active={currentTrack?.mediaid === track.mediaid}
          />
        ))}
      </div>
    </StyledVerticalPlaylist>
  )
}
