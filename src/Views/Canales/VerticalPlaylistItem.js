import React from "react"
import styled from "styled-components"

const StyledPlaylistItem = styled.div`
  display: flex;
  padding: 20px 0px;
  border-bottom: 1px solid #444;
  cursor: pointer;

  .playlist-item-img-container {
    width: 290px;
    height: 160px;
    background-color: #0004;

    img {
      object-fit: cover;
    }
  }

  .playlist-item-info {
    padding: 8px 16px;
    .playlist-item-artist {
      color: #555;
    }
  }
`

export function PlaylistItem(track, index, fullPlaylist) {
  let artist = ""
  let title = ""
  if (track && track.title) {
    const splited = track.title.split("-")
    artist = splited[0]
    title = splited[1]
  }
  const changeCurrentTrack = () => {
    window.jwplayer().playlistItem(index)
  }

  return (
    <StyledPlaylistItem onClick={changeCurrentTrack}>
      <div className="playlist-item-img-container">
        <img
          alt={track.title}
          loading="lazy"
          width="290"
          height="160"
          src={track.images.find(({ width }) => width === 320)?.src}
        />
      </div>
      <div className="playlist-item-info">
        <p className="playlist-item-title">
          {title} - {track.description}
        </p>
        <p className="playlist-item-artist">{artist}</p>
      </div>
    </StyledPlaylistItem>
  )
}
