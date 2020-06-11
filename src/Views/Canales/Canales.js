import React from "react"
import ReactJWPlayer from "react-jw-player"
import styled from "styled-components"
import { VerticalPlaylist } from "./VerticalPlaylist"
import { Header } from "./Header"
import Grid from "@material-ui/core/Grid"

import { useQuery } from "react-apollo"
import { QueryCanal } from "../../API/Queries/QueryCanal"
import { queryParamParse } from "../../Utils/querystring"
import { Helmet } from "react-helmet"

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
`

export default function CanalesView({ history, match, location }) {
  const {
    loading,
    error,
    // ESTO ES HORRIBLE MALDITA ANIDACION
    data: { response = { playlist: [] } } = {},
  } = useQuery(QueryCanal, {
    variables: {
      playlistId: match.params.id,
    },
  })

  const [currentTrack, setCurrentTrack] = React.useState(null)
  const [playerInitialized, setPlayerInitialized] = React.useState(false)
  const onReady = () => setPlayerInitialized(true)

  React.useEffect(() => {
    const queryMediaId = queryParamParse(location.search, ["v"]).v
    if (response && playerInitialized) {
      setCurrentTrack((curr) => {
        if (queryMediaId) {
          let trackIndex = response.playlist.findIndex(
            (track) => track.mediaid === queryMediaId
          )
          trackIndex = trackIndex < 0 ? 0 : trackIndex
          if (trackIndex >= 0) {
            window.jwplayer().playlistItem(trackIndex)

            // FIXME: ?? for some reason if this is not in the next tick it
            // doesn't trigger the autoplay
            window.setTimeout(window.jwplayer().play, 0)
            return response.playlist[trackIndex]
          }
        } else {
          window.jwplayer().playlistItem(0)
          window.jwplayer().stop()
          return response.playlist[0]
        }
      })
    }
  }, [location, response, playerInitialized])

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
            : response.title + " | StreamTOK"}
        </title>
      </Helmet>
      <Grid container>
        <Grid item xs={12}>
          <Header currentTrack={currentTrack} />
        </Grid>
        <Grid item xs={12} lg>
          <ReactJWPlayer
            onReady={onReady}
            playerId="LUykEJtT"
            playerScript="https://cdn.jwplayer.com/libraries/LUykEJtT.js"
            playlist={response?.playlist}
          />
        </Grid>
        <Grid item xs={12} lg="auto">
          <VerticalPlaylist
            playlist={response?.playlist}
            currentTrack={currentTrack}
            setCurrentTrack={setCurrentTrack}
          />
        </Grid>
      </Grid>
    </StyledTabCanales>
  )
}
