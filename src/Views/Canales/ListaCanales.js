import React from "react"
import styled from "styled-components"
import { Playlists } from "../../API/StaticAssets"
import { Helmet } from "react-helmet"
import ListaCanalContainer from "./ListaCanalContainer"
import { TabHeader } from "../../Components/TabHeader"
import { useDebouncedCallback } from "use-debounce/lib"
import { useResponsiveTrackThumbnail } from "../../Components/HorizontalPlaylistItem"
import strings from "../../strings.json"

export const StyledListaCanales = styled.div`
  .lista-canales {
    display: grid;
    grid-auto-flow: row;
    margin-top: 32px;
    row-gap: 32px;
  }
`

export default function ListaCanales({ history, match, location }) {
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

  const size = useResponsiveTrackThumbnail()

  return (
    <>
      <Helmet>
        <title>StreamTOK [Canales]</title>
      </Helmet>
      <TabHeader
        handleSearch={handleSearch}
        title={strings.lista_canales_title || "Lista de canales"}
        subtitle={
          strings.lista_canales_subtitle ||
          "Los mejores shows por artistas y géneros."
        }
      />
      <StyledListaCanales>
        <div className="lista-canales">
          {Object.entries(Playlists).map(([key, value]) => (
            <ListaCanalContainer
              key={key}
              id={value}
              search={search}
              size={size}
            />
          ))}
        </div>
      </StyledListaCanales>
    </>
  )
}
