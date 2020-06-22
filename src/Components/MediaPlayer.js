import Grid from "@material-ui/core/Grid"
import React from "react"
import { Helmet } from "react-helmet"
import ReactJWPlayer from "react-jw-player"
import styled from "styled-components"
import { useDedupedQueryCanal } from "../API/Queries/QueryCanal"
import { queryParamParse } from "../Utils/querystring"
import { MediaPlayerHeader } from "./MediaPlayerHeader"
import { VerticalPlaylist } from "./VerticalPlaylist"
import { useResponsiveTrackThumbnail } from "./HorizontalPlaylistItem"
import { Spinner } from "./Spinner"

const StyledTabCanales = styled.div`
  .header-container {
    margin-bottom: 32px;
  }
  .playlist-container {
    margin-top: 48px;
    @media screen and (min-width: 1280px) {
      margin-top: 0;
      width: 10vw;
      max-width: 512px;
    }
  }

  /* this is needed for jwplayer to fill the container for some reason  */
  .dummy-placeholder {
    height: 0px;
    overflow: hidden;
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
  const size = useResponsiveTrackThumbnail(true)

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
        <Grid item xs={12} className="header-container">
          <MediaPlayerHeader currentTrack={currentTrack} />
        </Grid>
        <Grid item xs={12} lg>
          {loading ? (
            <Spinner />
          ) : (
            <ReactJWPlayer
              onReady={onReady}
              playerId="LUykEJtT"
              playerScript="https://cdn.jwplayer.com/libraries/LUykEJtT.js"
              playlist={dedupedResponse?.playlist}
            />
          )}
          <div className="dummy-placeholder">&nbsp;</div>
        </Grid>
        <Grid item xs={12} lg className="playlist-container">
          <VerticalPlaylist
            size={size}
            playlist={dedupedResponse?.playlist}
            currentTrack={currentTrack}
            setCurrentTrack={setCurrentTrack}
          />
        </Grid>
      </Grid>
    </StyledTabCanales>
  )
}
