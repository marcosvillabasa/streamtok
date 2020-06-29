import React from "react"
import styled from "styled-components"
import { Link } from "react-router-dom"
import { splitTrackTitle } from "../Utils/splitTrackTitle"
import { sizeSmall, sizeMedium } from "../Components/HorizontalPlaylistItem"
import Tooltip from "@material-ui/core/Tooltip"
import { CustomTooltip } from "./CustomTooltip"
import { secondsToTime } from "../Utils/time"

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
    position: relative;
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

    .playlist-item-time-overlay {
      position: absolute;
      background-color: #000;
      font-size: var(--size-2);
      padding: 3px 4px 0px 4px;
      border-radius: 2px;
      line-height: 1em;
      height: 1em;
      letter-spacing: 2px;
      bottom: 1px;
      right: 2px;
    }
  }

  .playlist-item-info {
    font-size: var(--size-2);
    padding: 0rem 0rem 0rem 1.4rem;
    align-self: center;

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
  const time = secondsToTime(track.duration)

  return (
    <Link to={"?v=" + track.mediaid}>
      <Tooltip
        placement="left"
        title={
          <CustomTooltip>
            <div className="description">{track.description}</div>
            <div className="tags">{track.tagsv2}</div>
          </CustomTooltip>
        }
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
            <p className="playlist-item-time-overlay">{time}</p>
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
      </Tooltip>
    </Link>
  )
})
