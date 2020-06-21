import React from "react"
import styled from "styled-components"
import { useRouteMatch } from "react-router"
import { Link } from "react-router-dom"
import { secondsToTime } from "../Utils/time"
import { useMediaQuery, useTheme } from "@material-ui/core"

const sizeSmall = { width: 128, height: 72 }
const sizeMedium = { width: sizeSmall.width * 2, height: sizeSmall.height * 2 }
const sizeLarge = { width: sizeSmall.width * 3, height: sizeSmall.height * 3 }

export const useResponsiveTrackThumbnail = () => {
  const theme = useTheme()
  const mediaQueryTablet = useMediaQuery(theme.breakpoints.up("sm"))
  const mediaQueryDesktop = useMediaQuery(theme.breakpoints.up("md"))
  const [size, setSize] = React.useState(sizeSmall)

  React.useEffect(() => {
    if (mediaQueryDesktop) {
      setSize(sizeLarge)
    } else if (mediaQueryTablet) {
      setSize(sizeMedium)
    } else {
      setSize(sizeSmall)
    }
  }, [mediaQueryDesktop, mediaQueryTablet])
  return size
}

const StyledPlaylistItem = styled.div`
  display: flex;
  width: 140px;
  flex-direction: column;
  cursor: pointer;

  @media screen and (min-width: 600px) {
    width: 280px;
  }
  @media screen and (min-width: 960px) {
    width: 420px;
  }

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
    width: 128px;
    height: 72px;
    @media screen and (min-width: 600px) {
      width: 256px;
      height: 144px;
    }
    @media screen and (min-width: 960px) {
      width: 384px;
      height: 216px;
    }
    position: relative;
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
    transition: 0.25s all;
    padding: 0.6em 1.2em;
    will-change: opacity;
    font-size: var(--size-1);
    @media screen and (min-width: 600px) {
      font-size: var(--size-5);
    }

    .playlist-item-time {
      color: #707070;
    }
  }
`

export function PlaylistItem({ track, size = { width: 128, height: 72 } }) {
  const match = useRouteMatch()

  const time = secondsToTime(track.duration)
  return (
    <Link
      to={match.path + "/" + track.feedid + "?v=" + track.mediaid}
      title={track.description + "  | " + track.tags}
    >
      <StyledPlaylistItem>
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
          <p className="playlist-item-title">{track.title}</p>
          <p className="playlist-item-time">{time}</p>
        </div>
      </StyledPlaylistItem>
    </Link>
  )
}
