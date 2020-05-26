import React from "react"
import styled from "styled-components"
import { useHistory } from "react-router"
import { stringifyQueryString } from "../../Utils/querystring"

const StyledPlaylistItem = styled.div`
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
    background-color: #0004;

    img {
      width: 100%;
      height: auto;
      transform: scale(1.03);
      opacity: 1;
      transition: transform 0.25s, opacity 0.25s;
      will-change: transform, opacity;
    }
  }

  .playlist-item-info {
    user-select: none;
    opacity: 0.5;
    transition: 0.25s all;
    padding: 8px 16px;
    will-change: opacity;

    .playlist-item-artist {
      color: #707070;
    }
  }
`

export function PlaylistItem({ track, search }) {
  const history = useHistory()
  const onClick = (_) => {
    history.push({
      pathname: "canales",
      search: stringifyQueryString({
        search: search,
        currentTrack: track.index,
      }),
    })
  }
  return (
    <StyledPlaylistItem onClick={onClick}>
      <div className="playlist-item-img-container">
        <img
          alt={track.title}
          loading="lazy"
          width="536"
          height="300"
          src={track.images.find(({ width }) => width === 320)?.src}
        />
      </div>
      <div className="playlist-item-info">
        <p className="playlist-item-title">{track.title}</p>
        <p className="playlist-item-artist">{track.description}</p>
      </div>
    </StyledPlaylistItem>
  )
}
