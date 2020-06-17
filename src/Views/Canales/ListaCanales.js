import React from "react"
import styled from "styled-components"
import { Playlists } from "../../API/StaticAssets"
import { Helmet } from "react-helmet"
import ListaCanalContainer from "./ListaCanalContainer"
import { TabHeader } from "../../Components/TabHeader"
import { useDebouncedCallback } from "use-debounce/lib"

const StyledListaCanales = styled.div`
  .lista-canales-titulo {
    font-size: 4rem;
  }

  .lista-canales {
    display: flex;
    flex-direction: column;
    .lista-canal-container {
      margin-bottom: 4rem;
    }
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
        <title>Lista de canales</title>
      </Helmet>
      <TabHeader
        handleSearch={handleSearch}
        title="Lista de canales"
        subtitle="Los mejores shows por artistas y géneros."
      />
      <StyledListaCanales>
        <div className="lista-canales">
          {Object.entries(Playlists).map(([key, value]) => (
            <div className="lista-canal-container" key={value}>
              <ListaCanalContainer id={value} filterFn={filterFn} />
            </div>
          ))}
        </div>
      </StyledListaCanales>
    </>
  )
}
