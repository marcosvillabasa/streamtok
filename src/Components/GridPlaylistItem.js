import React from "react"
import styled from "styled-components"
import { useRouteMatch } from "react-router"
import { Link } from "react-router-dom"
import { secondsToTime } from "../Utils/time"
import Tooltip from "@material-ui/core/Tooltip"
import { CustomTooltip } from "./CustomTooltip"

const StyledPlaylistItem = styled.div`
  display: flex;
  width: 100%;
  margin-bottom: 16px;
  flex-direction: column;
  cursor: pointer;
  overflow: hidden;

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
    width: 90%;
    background-color: #0004;
    position: relative;
    overflow: hidden;

    &::before {
      display: block;
      content: "";
      width: 100%;
      padding-top: 56.25%;
      background-color: #0004;
    }

    img {
      position: absolute;
      top: 0;
      bottom: 0;
      left: 0;
      right: 0;
      width: 100%;
      opacity: 1;
      transition: transform 0.25s, opacity 0.25s;
      will-change: transform, opacity;
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
    user-select: none;
    opacity: 0.75;
    transition: 0.25s opacity;
    padding: 0.6em 1.2em 0.6em 0em;
    will-change: opacity;
    font-size: 10px;
    @media screen and (min-width: 600px) {
      font-size: 13px;
    }
    @media screen and (min-width: 960px) {
      font-size: 16px;
    }

    .playlist-item-time {
      color: #707070;
    }
  }
`

export function GridPlaylistItem({ track }) {
  const match = useRouteMatch()

  const time = secondsToTime(track.duration)
  return (
    <Link to={match.path + "/" + track.feedid + "?v=" + track.mediaid}>
      <Tooltip
        title={
          <CustomTooltip>
            <div className="description">{track.description}</div>
            <div className="tags">{track.tagsv2}</div>
          </CustomTooltip>
        }
      >
        <StyledPlaylistItem>
          <div className="playlist-item-img-container">
            <img
              alt={track.title}
              src={track.images.find(({ width }) => width === 320)?.src}
            />
            <p className="playlist-item-time-overlay">{time}</p>
          </div>
          <div className="playlist-item-info">
            <p className="playlist-item-title">{track.title}</p>
            <p className="playlist-item-time">{time}</p>
          </div>
        </StyledPlaylistItem>
      </Tooltip>
    </Link>
  )
}
