import React from "react"
import styled from "styled-components"
import { useRouteMatch } from "react-router"
import { Link } from "react-router-dom"

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
    width: 480px;
    height: 270px;
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
    font-size: 2rem;

    .playlist-item-artist {
      color: #707070;
    }
  }
`

export function PlaylistItem({ track }) {
  const match = useRouteMatch()
  return (
    <Link to={match.path + "/" + track.feedid + "?v=" + track.mediaid}>
      <StyledPlaylistItem>
        <div className="playlist-item-img-container">
          <img
            alt={track.title}
            loading="lazy"
            width="480"
            height="270"
            src={track.images.find(({ width }) => width === 320)?.src}
          />
        </div>
        <div className="playlist-item-info">
          <p className="playlist-item-title">{track.title}</p>
          <p className="playlist-item-artist">{track.description}</p>
        </div>
      </StyledPlaylistItem>
    </Link>
  )
}
