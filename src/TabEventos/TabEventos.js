import React from "react"
import styled from "styled-components"
import { useHistory } from "react-router"

const StyledPlaylistListItem = styled.div`
  display: flex;
  flex-direction: column;
  cursor: pointer;

  &:hover {
    .playlist-item-img-container {
      img {
        opacity: 0.5;
        transform: scale(1.2);
      }
    }

    .playlist-item-info {
      opacity: 1;
    }
  }

  .playlist-item-img-container {
    width: 536px;
    height: 300px;
    overflow: hidden;
    margin: 0px 16px;
    background-color: black;

    img {
      width: 100%;
      height: auto;
      transform: scale(1.03);
      transition: transform 0.25s, opacity 0.25s;
      opacity: 1;
    }
  }

  .playlist-item-info {
    user-select: none;
    opacity: 0.5;
    transition: 0.25s;
    padding: 8px 16px;

    .playlist-item-artist {
      color: #707070;
    }
  }
`
function PlaylistItem(track, index, fullPlaylist) {
  const history = useHistory()
  const onClick = (_) => {
    history.push({
      pathname: "canales",
      search: "?currentTrack=" + index,
    })
  }
  return (
    <StyledPlaylistListItem onClick={onClick}>
      <div className="playlist-item-img-container">
        <img src={track.images.find(({ width }) => width === 320)?.src}></img>
      </div>
      <div className="playlist-item-info">
        <p className="playlist-item-title">{track.title}</p>
        <p className="playlist-item-artist">{track.description}</p>
      </div>
    </StyledPlaylistListItem>
  )
}

const StyledHorizontalPlaylist = styled.div`
  margin: 0px 50px;
  display: flex;
  overflow-x: scroll;

  ::-webkit-scrollbar {
    height: 8px;
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

  .track-title {
    font-size: 48px;
  }
`

function HorizontalPlaylist({ playlist }) {
  return (
    <StyledHorizontalPlaylist>
      {playlist.map(PlaylistItem)}
    </StyledHorizontalPlaylist>
  )
}

const PlaylistTitle = styled.p`
  font-size: 28px;
  margin: 60px 0px 20px 70px;
`

export default function TabEventos(props) {
  const [playlist, setPlaylist] = React.useState({ playlist: [] })
  React.useEffect(() => {
    fetch("https://cdn.jwplayer.com/v2/playlists/SEw1rfH9")
      .then((res) => res.json())
      .then((res) => ({ ...res, playlist: res.playlist.slice(0, 10) }))
      .then(setPlaylist)
  }, [])
  return (
    <div style={{ color: "white" }}>
      <PlaylistTitle>{playlist.title}</PlaylistTitle>
      <HorizontalPlaylist playlist={playlist.playlist} />
    </div>
  )
}
