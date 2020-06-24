import React from "react"
import styled from "styled-components"
import { Playlists } from "../../API/StaticAssets"
import { Helmet } from "react-helmet"
import ListaCanalContainer from "./ListaCanalContainer"
import { TabHeader } from "../../Components/TabHeader"
import { useDebouncedCallback } from "use-debounce/lib"
import { useResponsiveTrackThumbnail } from "../../Components/HorizontalPlaylistItem"

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
  return (
    <>
      <Helmet>
        <title>StreamTOK [Canales]</title>
      </Helmet>
      <TabHeader
        handleSearch={handleSearch}
        title="Lista de canales"
        subtitle="Los mejores shows por artistas y géneros."
      />
      <StyledListaCanales>
        <div className="lista-canales">
          {Object.entries(Playlists).map(([key, value]) => (
            <ListaCanalContainer
              key={key}
              id={value}
              filterFn={filterFn}
              size={size}
            />
          ))}
        </div>
      </StyledListaCanales>
    </>
  )
}
