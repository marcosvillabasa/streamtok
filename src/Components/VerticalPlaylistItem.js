import React from "react"
import styled from "styled-components"
import { Link } from "react-router-dom"
import { splitTrackTitle } from "../Utils/splitTrackTitle"
import { sizeSmall, sizeMedium } from "../Components/HorizontalPlaylistItem"

const StyledPlaylistItem = styled.div`
  display: flex;
  padding: 8px 0px;
  border-bottom: 1px solid var(--color-text-3);
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
    width: ${sizeSmall.width}px;
    height: ${sizeSmall.height}px;
    @media screen and (min-width: 600px) {
      width: ${sizeMedium.width}px;
      height: ${sizeMedium.height}px;
    }
    background-color: #0004;

    img {
      object-fit: cover;
    }
  }

  .playlist-item-info {
    font-size: var(--size-2);
    padding: 1rem 1rem 0rem 1.4rem;

    .playlist-item-artist {
      color: var(--color-text-5);
    }
  }
`

export const PlaylistItem = React.memo(function PlaylistItem({
  track,
  active,
  setCurrentTrack,
  size,
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
            width={size.width}
            height={size.height}
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
