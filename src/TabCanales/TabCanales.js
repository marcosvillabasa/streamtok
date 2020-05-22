import React from "react"
import ReactJWPlayer from "react-jw-player"
import styled from "styled-components"

const StyledTabCanales = styled.div`
  margin: 0px 50px;
  display: grid;

  .track-title {
    font-size: 48px;
  }

  header {
    margin: 0px -50px;
    background-color: #191b1e;
    height: 200px;
    grid-column: 1 / span 2;
  }
  grid-template-rows: auto auto;
  grid-template-columns: 2fr 1fr;
  gap: 16px 25px;
`

const StyledVideosRelacionados = styled.div`
  background-color: #22252a;
  border-radius: 10px;
  border: 1px solid #707070;

  .videos-relacionados-title {
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

const StyledPlaylistListItem = styled.div`
  display: flex;
  padding: 20px 0px;
  border-bottom: 1px solid #2f333a;
  cursor: pointer;

  img {
    width: 290px;
  }

  .playlist-item-info {
    padding: 8px 16px;
    .playlist-item-artist {
      color: #707070;
    }
  }
`

function PlaylistItem(track, index, fullPlaylist) {
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
    <StyledPlaylistListItem onClick={changeCurrentTrack}>
      <img src={track.images.find(({ width }) => width === 320)?.src}></img>
      <div className="playlist-item-info">
        <p className="playlist-item-title">
          {title} - {track.description}
        </p>
        <p className="playlist-item-artist">{artist}</p>
      </div>
    </StyledPlaylistListItem>
  )
}

function VideosRelacionados({ playlist }) {
  return (
    <StyledVideosRelacionados>
      <div className="videos-relacionados-title">
        <label>Lista de videos relacionados</label>
      </div>
      <div className="container">{playlist.map(PlaylistItem)}</div>
    </StyledVideosRelacionados>
  )
}

const StyledHeader = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;

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
    background-color: #f001;
    height: 85px;
    width: 180px;
  }

  .logo2 {
    display: flex;
    align-items: center;
    justify-content: center;
    margin-left: 70px;
    background-color: #ff01;
    height: 85px;
    width: 280px;
  }
`

function TabCanalesHeader({ currentTrack }) {
  let artist = ""
  let title = ""
  if (currentTrack && currentTrack.title) {
    const splited = currentTrack.title.split("-")
    artist = splited[0]
    title = splited[1]
  }
  return (
    <StyledHeader>
      <div className="track-info-container">
        <p className="track-artist">{artist}</p>
        <p className="track-title">{title}</p>
      </div>
      <LogosContainer>
        <div className="logo1">logo acá</div>
        <div className="logo2">logo acá</div>
      </LogosContainer>
    </StyledHeader>
  )
}

export default function TabCanales(props) {
  const [currentTrack, setCurrentTrack] = React.useState(null)
  const [currentPlaylist, setCurrentPlaylist] = React.useState([])

  return (
    <StyledTabCanales>
      <TabCanalesHeader currentTrack={currentTrack} />
      <ReactJWPlayer
        onVideoLoad={(track) => {
          if (track && track.item) {
            window.jwplayer().play(true)
            setCurrentTrack(track.item)
          }
        }}
        onReady={(_) => {
          setCurrentPlaylist(window.jwplayer().getPlaylist().slice(0, 6))
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
      <VideosRelacionados
        playlist={currentPlaylist}
        currentTrack={currentTrack}
      />
    </StyledTabCanales>
  )
}
