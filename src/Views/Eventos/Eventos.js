import React from "react"
import { Helmet } from "react-helmet"
import { useDebouncedCallback } from "use-debounce"
import { useDedupedQueryCanal } from "../../API/Queries/QueryCanal"
import { HorizontalPlaylist } from "../../Components/HorizontalPlaylist"
import { TabHeader } from "../../Components/TabHeader"
import { StyledListaCanales } from "../Canales/ListaCanales"
import strings from "../../strings.json"

export default function EventosView({ history, location }) {
  const { loading, error, dedupedResponse } = useDedupedQueryCanal("Lu7EC8Bf")
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

  const filterFn = React.useCallback(
    (track) => {
      if (!search) {
        return true
      } else {
        return track.title.toLowerCase().includes(search.toLowerCase())
      }
    },
    [search]
  )

  if (error) {
    return (
      <div className="error-message">
        {strings.list_eventos_error_message ||
          "Hubo un error al cargar los eventos"}
      </div>
    )
  }

  return (
    <div className="eventos-main">
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
      <StyledListaCanales>
        <div className="lista-canales">
          <HorizontalPlaylist
            loading={loading}
            id="Lu7EC8Bf"
            playlist={dedupedResponse}
            filterFn={filterFn}
            search={search}
          />
        </div>
      </StyledListaCanales>
    </div>
  )
}
