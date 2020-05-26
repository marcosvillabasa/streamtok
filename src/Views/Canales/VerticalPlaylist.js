import React from "react"
import styled from "styled-components"
import { PlaylistItem } from "./VerticalPlaylistItem"

const StyledVerticalPlaylist = styled.div`
  background-color: #22252a;
  border-radius: 10px;
  border: 1px solid #707070;

  .playlist-title {
    font-size: 21px;
    font-weight: 600;
    padding: 30px 0px;
    padding-left: 35px;
    border-bottom: 1px solid #707070;
  }

  .container {
    margin-right: 10px;
    margin-top: 20px;
    margin-bottom: 20px;

    ::-webkit-scrollbar {
      width: 8px;
    }

    ::-webkit-scrollbar-track {
      box-shadow: inset 0 0 5px grey;
      border-radius: 10px;
    }

    ::-webkit-scrollbar-thumb {
      background: var(--color-primary);
      border-radius: 10px;
    }

    ::-webkit-scrollbar-thumb:hover {
      background: #b30000;
    }

    padding-left: 35px;
    height: 650px;
    overflow-y: scroll;
  }
`

export function VerticalPlaylist({ playlist, label }) {
  return (
    <StyledVerticalPlaylist>
      <div className="playlist-title">
        <label>Lista de videos relacionados</label>
      </div>
      <div className="container">{playlist.map(PlaylistItem)}</div>
    </StyledVerticalPlaylist>
  )
}
