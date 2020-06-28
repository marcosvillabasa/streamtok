import React from "react"
import { Helmet } from "react-helmet"
import { useDebouncedCallback } from "use-debounce"
import { useDedupedQueryCanal } from "../../API/Queries/QueryCanal"
import { TabHeader } from "../../Components/TabHeader"
import strings from "../../strings.json"
import styled from "styled-components"
import matchSorter from "match-sorter"
import { GridPlaylistItem } from "../../Components/GridPlaylistItem"
import { ResultCount } from "../../Components/ResultCount"

const StyledTrackGrid = styled.div`
  display: grid;
  margin: 0px 5%;
  grid-template-columns: 1fr 1fr;
  @media screen and (min-width: 600px) {
    grid-template-columns: 1fr 1fr 1fr;
  }
  @media screen and (min-width: 960px) {
    grid-template-columns: 1fr 1fr 1fr 1fr;
  }
  @media screen and (min-width: 1280px) {
    grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
  }
`

const MainContainer = styled.div`
  .result-count {
    margin: 24px 5%;
  }
`

export default function EventosView({ history, location }) {
  const { loading, error, data } = useDedupedQueryCanal("Lu7EC8Bf")
  const [search, setSearch] = React.useState(() => {
    const search = new URLSearchParams(location.search).get("search")
    return search || ""
  })
  const [debouncedHandleSearch] = useDebouncedCallback((value) => {
    history.push({
      search: "?search=" + value,
    })
    setSearch(value)
  }, 500)
  const handleSearch = (event) => debouncedHandleSearch(event.target.value)

  const [filtered, setFiltered] = React.useState([])
  React.useEffect(() => {
    if (data.playlist.length) {
      setFiltered(
        matchSorter(data.playlist, search, {
          keys: ["flatten"],
          threshold: matchSorter.rankings.WORD_STARTS_WITH,
        })
      )
    }
  }, [data, search])

  if (error) {
    return (
      <div className="error-message">
        {strings.list_eventos_error_message ||
          "Hubo un error al cargar los eventos"}
      </div>
    )
  }

  return (
    <MainContainer>
      <Helmet>
        <title>StreamTOK [Eventos]</title>
      </Helmet>
      <TabHeader
        handleSearch={handleSearch}
        title={strings.lista_eventos_title || "Lista de eventos"}
        subtitle={
          strings.lista_eventos_subtitle ||
          "Los mejores shows por artistas y géneros."
        }
      />
      <ResultCount className="result-count">
        Se encontraron&nbsp;
        <span>{loading ? "⌛" : filtered.length}</span>
        <span>&nbsp;resultados.</span>
      </ResultCount>
      <StyledTrackGrid>
        {filtered.map((track, index) => (
          <GridPlaylistItem key={index + track.mediaid} track={track} />
        ))}
      </StyledTrackGrid>
    </MainContainer>
  )
}
