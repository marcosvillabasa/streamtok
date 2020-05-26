import React from "react"
import ReactJWPlayer from "react-jw-player"
import styled from "styled-components"
import { VerticalPlaylist } from "./VerticalPlaylist"
import { Header } from "./Header"

const StyledTabCanales = styled.div`
  margin: 0px 50px;
  display: grid;

  .track-title {
    font-size: 48px;
  }

  header {
    grid-column: 1 / span 2;
  }
  grid-template-rows: auto auto;
  grid-template-columns: 2fr 1fr;
  gap: 16px 25px;
`

export default function CanalesView(props) {
  const [currentTrack, setCurrentTrack] = React.useState(null)
  const [currentPlaylist, setCurrentPlaylist] = React.useState([])

  return (
    <StyledTabCanales>
      <Header currentTrack={currentTrack} />
      <ReactJWPlayer
        onVideoLoad={(track) => {
          if (track && track.item) {
            setCurrentTrack(track.item)
            if (!!window.location.search) {
              window.jwplayer().play()
            }
          }
        }}
        onReady={(_) => {
          setCurrentPlaylist(window.jwplayer().getPlaylist())
          const search = new URLSearchParams(window.location.search)
          const currentTrack = search.get("currentTrack")
          if (currentTrack) {
            window.jwplayer().playlistItem(currentTrack)
          }
        }}
        playerId="LUykEJtT"
        playerScript="https://cdn.jwplayer.com/libraries/LUykEJtT.js"
        playlist="https://cdn.jwplayer.com/v2/playlists/SEw1rfH9"
      />
      <VerticalPlaylist
        playlist={currentPlaylist}
        currentTrack={currentTrack}
      />
    </StyledTabCanales>
  )
}
