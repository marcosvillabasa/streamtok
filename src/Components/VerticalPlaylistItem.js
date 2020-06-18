import React from "react"
import styled from "styled-components"
import { Link } from "react-router-dom"
import { splitTrackTitle } from "../Utils/splitTrackTitle"

const StyledPlaylistItem = styled.div`
  display: flex;
  padding: 2rem 0rem;
  border-bottom: 1px solid #444;
  cursor: pointer;
  transition: 0.1s background-color ease-in-out;
  will-change: background-color;

  &.active {
    background-color: #1005;
    &:hover {
      background-color: #2006;
    }
  }

  &:hover {
    background-color: #1003;
  }

  .playlist-item-img-container {
    width: 240px;
    height: 135px;
    background-color: #0004;

    img {
      object-fit: cover;
    }
  }

  .playlist-item-info {
    font-size: 1.8rem;
    padding: 1rem 1rem 0rem 1.4rem;

    .playlist-item-artist {
      color: #555;
    }
  }
`

export const PlaylistItem = React.memo(function PlaylistItem({
  track,
  active,
  setCurrentTrack,
}) {
  const { artist, trackTitle } = splitTrackTitle(track?.title)

  return (
    <Link
      to={"?v=" + track.mediaid}
      title={track.description + "  | " + track.tags}
    >
      <StyledPlaylistItem className={active ? "active" : "inactive"}>
        <div className="playlist-item-img-container">
          <img
            alt={track.title}
            loading="lazy"
            width="240"
            height="135"
            src={track.images.find(({ width }) => width === 320)?.src}
          />
        </div>
        <div className="playlist-item-info">
          {trackTitle ? (
            <>
              <p className="playlist-item-title">{trackTitle}</p>
              <p className="playlist-item-artist">{artist}</p>
            </>
          ) : (
            <p className="playlist-item-title">{artist}</p>
          )}
        </div>
      </StyledPlaylistItem>
    </Link>
  )
})
