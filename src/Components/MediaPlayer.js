import Grid from "@material-ui/core/Grid"
import React from "react"
import { Helmet } from "react-helmet"
import ReactJWPlayer from "react-jw-player"
import styled from "styled-components"
import { useDedupedQueryCanal } from "../API/Queries/QueryCanal"
import { queryParamParse } from "../Utils/querystring"
import { MediaPlayerHeader } from "./MediaPlayerHeader"
import { VerticalPlaylist } from "./VerticalPlaylist"

const StyledTabCanales = styled.div`
  .MuiGrid-item {
    &:nth-child(1) {
      margin-bottom: 3rem;
    }
    &:nth-child(2) {
      padding: 0rem 2rem;
    }
    &:nth-child(3) {
      padding-right: 2rem;
      @media screen and (max-width: 1280px) {
        display: flex;
        justify-content: center;
        padding: 0rem;
        margin-top: 4rem;
      }
    }
  }
  .player-container {
    display: flex;
    width: 100%;

    .jwplayer-container {
      margin-right: 2rem;
      width: inherit;
    }

    @media screen and (max-width: 1400px) {
      flex-direction: column;
      align-items: center;
      .jwplayer-container {
        margin-bottom: 2rem;
      }
    }
  }
`

export default function MediaPlayer({ history, match, location }) {
  const { loading, error, dedupedResponse } = useDedupedQueryCanal(
    match.params.id
  )

  const [currentTrack, setCurrentTrack] = React.useState(null)
  const [playerInitialized, setPlayerInitialized] = React.useState(false)
  const onReady = () => {
    setPlayerInitialized(true)
    window.scroll(0, 144)
  }

  React.useEffect(() => {
    if (dedupedResponse && playerInitialized) {
      setCurrentTrack((curr) => {
        const queryMediaId = queryParamParse(location.search, ["v"]).v
        // if there is a querystring, sync with the local state and jwplayer
        if (queryMediaId) {
          // check the index of that mediaid in the current playlist
          const trackIndex = dedupedResponse.playlist.findIndex(
            (track) => track.mediaid === queryMediaId
          )
          // if the index isn't -1, then it's a valid mediaid and can be seted
          if (trackIndex >= 0) {
            window.jwplayer().playlistItem(trackIndex)

            // FIXME: ?? for some reason if this is not in the next tick it
            // doesn't trigger the autoplay
            window.setTimeout(window.jwplayer().play, 0)
            return dedupedResponse.playlist[trackIndex]
          }
        } else {
          // if there isn't a querystring, set the current track at 0 and
          // cancel the autoplay
          window.jwplayer().playlistItem(0)
          window.jwplayer().stop()
          return dedupedResponse.playlist[0]
        }
      })
    }
  }, [location, dedupedResponse, playerInitialized])

  if (error) {
    return <div>ERROR</div>
  }

  return (
    <StyledTabCanales>
      <Helmet>
        <title>
          {loading
            ? "cargando..."
            : currentTrack
            ? currentTrack.title + " | StreamTOK"
            : dedupedResponse.title + " | StreamTOK"}
        </title>
      </Helmet>
      <Grid container>
        <Grid item xs={12}>
          <MediaPlayerHeader currentTrack={currentTrack} />
        </Grid>
        <Grid item xs={12} className="player-container">
          <div className="jwplayer-container">
            <ReactJWPlayer
              onReady={onReady}
              playerId="LUykEJtT"
              playerScript="https://cdn.jwplayer.com/libraries/LUykEJtT.js"
              playlist={dedupedResponse?.playlist}
            />
          </div>
          <VerticalPlaylist
            playlist={dedupedResponse?.playlist}
            currentTrack={currentTrack}
            setCurrentTrack={setCurrentTrack}
          />
        </Grid>
      </Grid>
    </StyledTabCanales>
  )
}
